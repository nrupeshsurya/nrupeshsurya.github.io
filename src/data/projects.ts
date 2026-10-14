export type Project = {
  name: string;
  summary: string;
  problem: string;
  built: string;
  stack: string[];
  year: string;
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
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
    featured: true,
  },
  {
    name: 'IMU muscle fatigue detection',
    summary: 'Detecting signs of muscle fatigue from a wearable motion sensor.',
    problem:
      'Weak muscles cause subtle but detectable changes in everyday movements. Could a cheap wearable sensor pick them up?',
    built:
      'Firmware for an ESP32 reading an MPU9250 IMU over I2C, and Python tools to collect, augment and analyse the data. It recognises activities like walking and sitting, and characterises sit-to-stand transitions.',
    stack: ['C++', 'ESP32', 'Python', 'Embedded'],
    year: '2021',
    links: [{ label: 'Code', href: 'https://github.com/nrupeshsurya/IMU-MuscleFatigue' }],
    featured: true,
  },
  {
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
    featured: true,
  },
  {
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
