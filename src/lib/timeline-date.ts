import type { TimelineDatePoint, TimelineDateRange } from '@types/profile';

const MONTH_LABELS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const;

function formatDatePoint(point: { year: number; month?: number }): string {
  if (point.month) {
    return `${MONTH_LABELS[point.month - 1]} ${point.year}`;
  }

  return String(point.year);
}

export function formatTimelineDateRange(range: TimelineDateRange): string {
  const toLabel = range.to === 'present' ? 'Present' : formatDatePoint(range.to);
  return `${formatDatePoint(range.from)} — ${toLabel}`;
}

function hasMonthPrecision(range: TimelineDateRange): boolean {
  if (range.from.month) return true;
  if (range.to !== 'present' && range.to.month) return true;
  return false;
}

function getEndPoint(range: TimelineDateRange): { year: number; month: number } {
  if (range.to === 'present') {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() + 1 };
  }

  return {
    year: range.to.year,
    month: range.to.month ?? 12,
  };
}

function countMonths(range: TimelineDateRange): number {
  const startMonth = range.from.month ?? 1;
  const end = getEndPoint(range);
  const isPresent = range.to === 'present';
  const diff = (end.year - range.from.year) * 12 + (end.month - startMonth);

  // Completed ranges count the end month; ongoing roles stop at the current month.
  return Math.max(1, isPresent ? diff : diff + 1);
}

function toMonthIndex(point: TimelineDatePoint): number {
  return point.year * 12 + (point.month ?? 1);
}

export function compareTimelineDateDesc(
  a: TimelineDatePoint,
  b: TimelineDatePoint,
): number {
  return toMonthIndex(b) - toMonthIndex(a);
}

export function getCompanyDateRange(
  roles: Array<{ date: TimelineDateRange }>,
): TimelineDateRange {
  let earliest = roles[0].date.from;
  let latestEnd: TimelineDatePoint = roles[0].date.to === 'present'
    ? { year: new Date().getFullYear(), month: new Date().getMonth() + 1 }
    : roles[0].date.to;
  let hasPresent = roles[0].date.to === 'present';

  for (const { date } of roles) {
    if (toMonthIndex(date.from) < toMonthIndex(earliest)) {
      earliest = date.from;
    }

    if (date.to === 'present') {
      hasPresent = true;
    } else if (!hasPresent && toMonthIndex(date.to) > toMonthIndex(latestEnd)) {
      latestEnd = date.to;
    }
  }

  return { from: earliest, to: hasPresent ? 'present' : latestEnd };
}

export function formatTimelineDuration(range: TimelineDateRange): string | null {
  const isPresent = range.to === 'present';

  if (!hasMonthPrecision(range)) {
    const endYear = isPresent ? new Date().getFullYear() : range.to.year;
    const years = Math.max(1, endYear - range.from.year);
    const label = years === 1 ? '1 year' : `${years} years`;
    return isPresent ? `${years}+ years` : label;
  }

  const months = countMonths(range);

  if (months < 12) {
    const label = months === 1 ? '1 month' : `${months} months`;
    return isPresent ? `${months}+ months` : label;
  }

  const years = Math.max(1, Math.round(months / 12));
  const label = years === 1 ? '1 year' : `${years} years`;
  return isPresent ? `${years}+ years` : label;
}
