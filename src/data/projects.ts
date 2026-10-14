export type Project = {
  name: string;
  kind: 'work' | 'side';
  org?: string;
  summary: string;
  problem: string;
  built: string;
  impact?: string;
  stack: string[];
  year: string;
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    kind: 'work',
    name: '1-step Checkout for Retail and Grocery',
    org: 'Amazon Payments',
    summary: 'A shorter checkout that takes customers from cart to order without a separate payment page.',
    problem: 'Every extra page in checkout adds latency and a chance for the customer to drop off.',
    built:
      'I owned four of the designs and led delivery of a checkout flow that removes an entire page, for both Retail and Grocery.',
    impact: '~1s faster checkout, and ~3s faster grocery payments',
    stack: ['System design', 'Technical leadership', 'Payments'],
    year: '2024–26',
    featured: true,
  },
  {
    kind: 'work',
    name: 'MFA page speed-up',
    org: 'Amazon Payments',
    summary: 'Prefetch optimizations across the full stack for the multi-factor authentication step of payments.',
    problem: 'The MFA page took ~6s to load, and customers waited on it in the middle of paying.',
    built:
      'I drove prefetch optimizations across the backend, page rendering and front end, so the page has what it needs before the customer reaches it.',
    impact: 'MFA page load from ~6s to ~100ms, and total transaction time from ~16s to ~10s',
    stack: ['Java', 'JavaScript', 'JSP', 'Performance'],
    year: '2024–26',
    featured: true,
  },
  {
    kind: 'work',
    name: 'RAG-powered team Slackbot',
    org: 'Amazon Payments',
    summary: "A Slack assistant that answers engineers' questions from team documentation.",
    problem: 'Answers to recurring questions were buried across docs, and the same questions kept coming up in chat.',
    built:
      'A retrieval-augmented generation (RAG) bot built with Amazon Kendra, AWS Lambda and Strands Agents. Alongside it, I ran a GenAI learning series for the team.',
    impact: '1000+ queries a month',
    stack: ['GenAI', 'RAG', 'Amazon Kendra', 'AWS Lambda', 'Strands Agents'],
    year: '2024–26',
    featured: true,
  },
  {
    kind: 'work',
    name: 'MCP server for Amazon Shopping',
    org: 'Internal hackathon',
    summary: 'A Model Context Protocol server that lets AI agents work with Amazon Shopping.',
    problem: 'AI assistants need a structured, safe way to call shopping capabilities, rather than scraping pages.',
    built: 'An MCP server that exposes Amazon Shopping actions as tools that LLM agents can call.',
    impact: 'Won the hackathon',
    stack: ['MCP', 'LLM agents', 'GenAI'],
    year: '2024–26',
  },
  {
    kind: 'work',
    name: 'Payment recommendations library',
    org: 'Amazon Payments',
    summary: 'A config-driven library that decides which payment methods to recommend at checkout.',
    problem: 'Checkout needs to suggest the right payment method for each customer, across many different flows.',
    built:
      'A config-driven recommendations library, plus Last-Used (V1 and V2) and Most-Used pipelines. I also tuned the service\'s garbage collection after a 50% throughput regression.',
    impact: 'Key payment metrics (PCR and PSR) up ~5000 bps; V2 adopted across Retail and other clients; 3–4x throughput',
    stack: ['Java', 'Distributed systems', 'JVM tuning'],
    year: '2022–24',
  },
  {
    kind: 'side',
    name: 'mHealth app and cloud load testing',
    summary: 'My undergraduate thesis: a mobile health app, plus load tests of the cloud backend behind it.',
    problem:
      'Health apps need a backend that holds up as more people use them. The thesis asked how a cloud architecture for an mHealth app behaves under realistic load.',
    built:
      'A React Native app showing daily, weekly and monthly health views, and a Python load-testing harness that seeds the database and simulates many concurrent users against the AWS-hosted API.',
    stack: ['React Native', 'JavaScript', 'Python', 'AWS'],
    year: '2021–22',
    links: [
      { label: 'App', href: 'https://github.com/nrupeshsurya/mHealth-app' },
      { label: 'Load testing', href: 'https://github.com/nrupeshsurya/Load-testing-mhealth-App' },
    ],
  },
  {
    kind: 'side',
    name: 'IMU muscle fatigue detection',
    summary: 'Detecting signs of muscle fatigue from a wearable motion sensor.',
    problem:
      'Weak muscles cause subtle but detectable changes in everyday movements. Could a cheap wearable sensor pick them up?',
    built:
      'Firmware for an ESP32 reading an MPU9250 IMU over I2C, and Python tools to collect, augment and analyse the data. It recognises activities like walking and sitting, and characterises sit-to-stand transitions.',
    stack: ['C++', 'ESP32', 'Python', 'Embedded'],
    year: '2021',
    links: [{ label: 'Code', href: 'https://github.com/nrupeshsurya/IMU-MuscleFatigue' }],
  },
  {
    kind: 'side',
    name: 'Music link converter',
    summary: 'A Discord bot and web app that convert Spotify links to YouTube Music and back.',
    problem: 'Friends share music from different streaming services, and a link only works for people on the same one.',
    built:
      "A Discord bot that converts links asynchronously as they're posted, using the Spotify, YouTube Music and Discord APIs. I later made a web version with React and Flask.",
    stack: ['Python', 'Discord API', 'Spotify API', 'React', 'Flask'],
    year: '2020–22',
    links: [
      { label: 'Discord bot', href: 'https://github.com/nrupeshsurya/discordbot' },
      { label: 'Web app', href: 'https://github.com/nrupeshsurya/link-converter' },
    ],
  },
  {
    kind: 'side',
    name: 'RSA file encryption in C',
    summary: 'Encrypting and decrypting files with RSA through the OpenSSL C API.',
    problem: 'A Computer Networks course project: secure file transfer using public-key cryptography.',
    built: 'Command-line encrypt and decrypt programs in C, using OpenSSL-generated key pairs. I wrote up how it works on the blog.',
    stack: ['C', 'OpenSSL', 'Make'],
    year: '2021',
    links: [
      { label: 'Code', href: 'https://github.com/nrupeshsurya/RSA-encryption' },
      { label: 'Write-up', href: '/blog/rsa-algorithm/' },
    ],
  },
  {
    kind: 'side',
    name: 'This site',
    summary: 'My personal site, rebuilt from Jekyll to Astro in 2026.',
    problem: 'The old Jekyll theme was dated, and its build setup hard to maintain.',
    built:
      'A static Astro site with typed content collections, automatic dark mode, an RSS feed and a sitemap. A GitHub Actions workflow deploys it to GitHub Pages.',
    stack: ['Astro', 'TypeScript', 'CSS', 'GitHub Actions'],
    year: '2026',
    links: [{ label: 'Code', href: 'https://github.com/nrupeshsurya/nrupeshsurya.github.io' }],
  },
];
