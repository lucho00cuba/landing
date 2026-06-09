import type { ExperienceItem } from '@types/profile';
import { compareTimelineDateDesc, getCompanyDateRange } from '@lib/timeline-date';
import type { TimelineDateRange } from '@types/profile';

export interface ExperienceCompanyGroup {
  company: string;
  dateRange: TimelineDateRange;
  roles: ExperienceItem[];
}

export function groupExperienceByCompany(
  items: ExperienceItem[],
): ExperienceCompanyGroup[] {
  const groups = new Map<string, ExperienceItem[]>();

  for (const item of items) {
    const roles = groups.get(item.company) ?? [];
    roles.push(item);
    groups.set(item.company, roles);
  }

  return [...groups.entries()]
    .map(([company, roles]) => {
      const sortedRoles = [...roles].sort((a, b) =>
        compareTimelineDateDesc(a.date.from, b.date.from),
      );

      return {
        company,
        roles: sortedRoles,
        dateRange: getCompanyDateRange(sortedRoles),
      };
    })
    .sort((a, b) =>
      compareTimelineDateDesc(a.roles[0].date.from, b.roles[0].date.from),
    );
}
