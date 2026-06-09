import type { Profile } from "@types/profile";

export const profile: Profile = {
  name: "Luis Octavio",
  job: "Staff DevOps / Platform Engineer",
  avatar: "https://avatars.githubusercontent.com/u/55890128?s=256&v=4",
  bio: [
    "Cloud architect and platform engineer specializing in the design and implementation of secure, scalable, and resilient solutions across cloud-native, hybrid, and on-premises environments. Deep expertise in Kubernetes orchestration, Infrastructure as Code (IaC), CI/CD automation, microservices architecture, and platform governance — applying DevOps and SRE practices to ensure availability, stability, and operational efficiency.",
    "Experienced in security hardening, high availability, cost optimization (FinOps), and compliance aligned with NIST and ISO standards. Also active in backend engineering with Go, Python, C#, and Node.js — bridging architecture, development, and operations to accelerate delivery and drive platform modernization.",
  ],
  socials: [
    {
      icon: "logo-github",
      link: "https://github.com/lucho00cuba",
      label: "GitHub profile",
    },
    {
      icon: "logo-twitter",
      link: "https://x.com/zzjust_mezz",
      label: "X (Twitter) profile",
    },
    {
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/luisoctaviomotaverdasco",
      label: "LinkedIn profile",
    },
    {
      icon: "finger-print-outline",
      link: "https://www.credly.com/users/zzjustmezz",
      label: "Credly profile",
    },
  ],
  contacts: [
    {
      icon: "mail-outline",
      title: "Email",
      value: "luisoctavio.mota.verdasco@gmail.com",
      link: "mailto:luisoctavio.mota.verdasco@gmail.com",
    },
    {
      icon: "location-outline",
      title: "Location",
      value: "Madrid, Spain",
    },
  ],
  services: [
    {
      icon: "design",
      title: "Infrastructure as Code",
      description:
        "Design and implementation of infrastructure using code for scalability, reliability, and automation, leveraging tools like Terraform, CloudFormation, and Ansible.",
    },
    {
      icon: "dev",
      title: "Backend Development",
      description:
        "Efficient backend solutions designed for high performance, security, and scalability, using modern technologies and best practices in containerization and orchestration.",
    },
    {
      icon: "monitoring",
      title: "Cloud & DevOps Engineering",
      description:
        "Expertise in managing cloud environments, optimizing CI/CD pipelines, container orchestration with Kubernetes, and automating infrastructure processes for continuous integration and delivery.",
    },
    {
      icon: "photo",
      title: "Monitoring & Observability",
      description:
        "Implementing robust monitoring, logging, and alerting systems with Prometheus, Grafana, and other tools to ensure application health and optimize performance across cloud and on-premise infrastructure.",
    },
  ],
  portfolio: {
    categories: [
      "All",
      "Cloud & IaC",
      "Backend APIs",
      "SRE Tooling",
      "Security",
      "Platform Ops",
      "Frontend Development",
    ],
    projects: [
      {
        title: "headers-enricher",
        category: "Cloud & IaC",
        image: "/portfolio/headers-enricher.png",
        link: "https://github.com/lucho00cuba/headers-enricher",
      },
      {
        title: "localstack-labs",
        category: "Cloud & IaC",
        image: "/portfolio/localstack-labs.png",
        link: "https://github.com/Lucho00Cuba/localstack-labs",
      },
      {
        title: "sample-api",
        category: "Backend APIs",
        image: "/portfolio/sample-api.png",
        link: "https://github.com/Lucho00Cuba/sample-api",
      },
      {
        title: "mtc",
        category: "SRE Tooling",
        image: "/portfolio/mtc.png",
        link: "https://github.com/Lucho00Cuba/mtc",
      },
      {
        title: "echo-back",
        category: "Platform Ops",
        image: "/portfolio/echo-back.png",
        link: "https://github.com/Lucho00Cuba/echo-back",
      },
      {
        title: "dot-render",
        category: "SRE Tooling",
        image: "/portfolio/dot-render.png",
        link: "https://github.com/Lucho00Cuba/dot-render",
      },
      {
        title: "english-arena",
        category: "Frontend Development",
        image: "/portfolio/english-arena.png",
        link: "https://github.com/Lucho00Cuba/english-arena",
      },
      {
        title: "easyrbac",
        category: "Security",
        image: "/portfolio/easyrbac.png",
        link: "https://github.com/Lucho00Cuba/easyrbac",
      },
      {
        title: "the-game-of-life",
        category: "Backend APIs",
        image: "/portfolio/the-game-of-life.png",
        link: "https://github.com/lucho00cuba/the-game-of-life",
      },
      {
        title: "TripleCLangLab",
        category: "Backend APIs",
        image: "/portfolio/TripleCLangLab.png",
        link: "https://github.com/lucho00cuba/TripleCLangLab",
      },
      {
        title: "solid-principles-with-dotnet",
        category: "Backend APIs",
        image: "/portfolio/solid-principles-with-dotnet.png",
        link: "https://github.com/lucho00cuba/solid-principles-with-dotnet",
      },
    ],
  },
  education: [
    {
      title: "Microcomputer systems and networks FP Degree",
      date: {
        from: { year: 2019 },
        to: { year: 2021 },
      },
      description:
        "Studied microcomputer systems, network protocols, and hardware configurations, gaining hands-on experience in system administration.",
    },
    {
      title: "Network computer systems administration FP Degree",
      date: {
        from: { year: 2021 },
        to: { year: 2023 },
      },
      description:
        "Focused on network administration, configuration, troubleshooting, and security, with a strong emphasis on cloud and virtualized environments.",
    },
  ],
  experience: [
    {
      title: "System Administrator (Junior)",
      company: "ESNOEI INC",
      date: {
        from: { year: 2020, month: 6 },
        to: { year: 2021, month: 5 },
      },
      description:
        "Contributed to a dockerization project on Proxmox VE, helping build LXC network environments and deploy development and production workloads with Docker and Docker Compose.",
    },
    {
      title: "System Administrator",
      company: "Vermont Solutions",
      date: {
        from: { year: 2021, month: 5 },
        to: { year: 2023, month: 4 },
      },
      description:
        "Managed and maintained hybrid and cloud infrastructures, including OpenStack, ensuring optimal performance and high availability. Focused on container orchestration with Kubernetes and Rancher, as well as automating tasks with custom scripts to enhance operational efficiency and reduce downtime.",
    },
    {
      title: "DevOps Engineer",
      company: "Vermont Solutions",
      date: {
        from: { year: 2023, month: 4 },
        to: "present",
      },
      description:
        "Designing and operating cloud infrastructure on AWS, Azure, and OpenStack, with Kubernetes as the primary orchestration platform. Leads CI/CD automation with GitHub Actions and GitOps with Fleet Rancher, implements observability stacks (Prometheus, Grafana, OpenTelemetry), and drives IaC adoption with Terraform and Ansible across multi-environment deployments.",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: [
        "Bash",
        "PowerShell",
        "Python",
        "Go",
        "JavaScript",
        "TypeScript",
        "C#",
        "Java",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        "AWS",
        "Azure",
        "OpenStack",
        "Terraform",
        "Ansible",
        "Cloudflare",
        "Vercel",
      ],
    },
    {
      category: "Containers & Orchestration",
      items: [
        "Docker",
        "Podman",
        "Containerd",
        "Kubernetes",
        "K3s",
        "RKE",
        "RKE2",
        "Rancher",
      ],
    },
    {
      category: "CI/CD & GitOps",
      items: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "GitLab",
        "Bitbucket",
        "Jenkins",
        "Fleet",
        "ArgoCD",
      ],
    },
    {
      category: "Backend & Frameworks",
      items: [
        ".NET",
        "Node.js",
        "FastAPI",
        "Flask",
        "Nginx",
        "Traefik",
        "Astro",
      ],
    },
    {
      category: "Observability",
      items: [
        "Prometheus",
        "Grafana",
        "Alertmanager",
        "Sentry",
        "OpenTelemetry",
      ],
    },
    {
      category: "Databases & Messaging",
      items: ["PostgreSQL", "MySQL", "Redis", "RabbitMQ"],
    },
    {
      category: "Operating Systems",
      items: ["Ubuntu", "Debian", "Red Hat", "Windows"],
    },
  ],
  testimonials: [
    {
      name: "Oscar Gonzalez",
      avatar: "/avatar-1.png",
      text: "Luis is a brilliant mind and proficient in the sysadmin field. I had the opportunity to share with him and he showed a great capacity for learning and the ability to resolve complex problems. Luis is willing to take the lead in situations when required. I believe that his skills and experience make him an excellent candidate for any position related to Information Technologies.",
      date: "2020-10-30",
    },
    {
      name: "David Domenech",
      avatar: "/avatar-4.png",
      text: "Luis is a great, very professional coworker; and he always shows good results and professionalism. He has mainly shown great interest in the sysadmin field and Python programming language. He is a proactive, cooperative and responsible developer and technology enthusiast, who aims to achieve superior results. In spite of being young, it's an importan member and colaborator of our team. If you have any question about him, please feel free to contact me.",
      date: "2021-03-09",
    },
  ],
  certifications: [
    {
      title: "ASP.NET for Experienced Developers",
      issuer: "Microsoft",
      date: "Jul 2025",
      link: "https://www.credly.com/users/zzjustmezz/badges",
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Dec 2024",
      link: "https://www.credly.com/users/zzjustmezz/badges",
    },
    {
      title: "DevOps on AWS",
      issuer: "Amazon Web Services",
      date: "Aug 2023",
      link: "https://www.credly.com/users/zzjustmezz/badges",
    },
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      issuer: "Google Cloud",
      date: "Feb 2022",
      link: "https://www.credly.com/users/zzjustmezz/badges",
    },
    {
      title: "Kubernetes on GCP",
      issuer: "Google Cloud",
      date: "Nov 2021",
      link: "https://www.credly.com/users/zzjustmezz/badges",
    },
    {
      title: "Implement DevOps Workflows in Google Cloud",
      issuer: "Google Cloud",
      date: "Nov 2021",
      link: "https://www.credly.com/users/zzjustmezz/badges",
    },
  ],
};
