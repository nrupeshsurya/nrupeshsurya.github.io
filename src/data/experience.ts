export type Role = {
  title: string;
  period?: string;
  points?: string[];
};

export type Job = {
  company: string;
  team?: string;
  location: string;
  roles: Role[];
};

export const EXPERIENCE: Job[] = [
  {
    company: 'Amazon',
    team: 'Amazon Business',
    location: 'Madrid, Spain',
    roles: [{ title: 'Software Development Engineer II' }],
  },
  {
    company: 'Amazon',
    team: 'Payments Experience',
    location: 'Bengaluru, India',
    roles: [
      {
        title: 'Software Development Engineer II',
        period: 'Jun 2024 – 2026',
        points: [
          'Led delivery of 1-step Checkout for Retail and Grocery. Removing an entire page from the flow cut checkout latency by ~1s and grocery payment latency by ~3s.',
          'Brought multi-factor authentication page load time down from ~6s to ~100ms through prefetch optimizations across the full stack.',
          'Built a RAG-powered Slackbot handling 1000+ queries a month, and won a hackathon with an MCP server for Amazon Shopping.',
          'Onboarded 6+ new engineers and took part in hiring as a Bar Raiser in training.',
        ],
      },
      {
        title: 'Software Development Engineer',
        period: 'Jul 2022 – Jun 2024',
        points: [
          'Built a config-driven recommendations library and shipped Last-Used and Most-Used pipelines, now used across Retail and multiple other clients.',
          'Tuned GC on the recommendation service, giving a 3–4x throughput improvement overall.',
        ],
      },
      {
        title: 'SDE Intern',
        period: 'Feb 2022 – Jun 2022',
        points: ['Built autoscaling for tier-2 services so they could handle Prime Day and Diwali Sale traffic.'],
      },
    ],
  },
  {
    company: 'Intuit',
    location: 'Bengaluru, India',
    roles: [
      {
        title: 'SWE Intern',
        period: 'May 2021 – Jul 2021',
        points: ['Split part of the QuickBooks Online backend monolith into Spring Boot microservices, deployed to production for 8 million customers.'],
      },
    ],
  },
];

export const SKILLS = [
  { label: 'Languages', items: ['Java', 'Python', 'JavaScript / TypeScript', 'C++'] },
  { label: 'Frameworks & tools', items: ['Spring Boot', 'React', 'AWS (Lambda, DynamoDB, S3, CloudWatch, CDK)', 'Git'] },
  { label: 'Areas', items: ['Distributed systems', 'Microservices', 'Payment systems', 'GenAI / LLM agents', 'System design'] },
];

export const EDUCATION = {
  school: 'BITS Pilani, Goa Campus',
  degree: 'B.E. Computer Science and M.Sc. Chemistry',
  period: '2017 – 2022',
};
