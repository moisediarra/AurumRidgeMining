// All site content lives here — edit this file to adapt the site.

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
  srcSet?: string;
}

export type OperationStatus = 'Production' | 'Development' | 'Exploration';

export interface Operation {
  id: string;
  name: string;
  location: string;
  status: OperationStatus;
  output: string;
  reserves: string;
  description: string;
  image: Photo;
}

export interface Pillar {
  title: string;
  metric: string;
  text: string;
}

export interface Report {
  title: string;
  date: string;
  type: 'Quarterly' | 'Annual' | 'ESG' | 'Press';
}

export interface Job {
  title: string;
  location: string;
  department: string;
}

export const company = {
  name: 'Aurum Ridge Mining',
  tagline: 'Responsible gold, built for generations.',
  intro:
    'We explore, develop and operate gold mines across West Africa — with safety, local partnership and transparent reporting at the core of everything we extract.',
  email: 'info@aurumridge.example',
  phone: '+233 30 000 0000',
  address: 'Airport City, Accra, Ghana',
  ticker: 'ARGM',
};

// Photos live in public/images (Unsplash License — see README for credits).
export const photos = {
  hero: {
    src: '/images/hero-open-pit-1920.webp',
    srcSet:
      '/images/hero-open-pit-800.webp 800w, /images/hero-open-pit-1280.webp 1280w, /images/hero-open-pit-1920.webp 1920w',
    alt: '',
    width: 1920,
    height: 1280,
  },
  aboutPit: {
    src: '/images/about-pit.webp',
    alt: 'Terraced walls of a large open-pit gold mine under a cloudy sky',
    width: 900,
    height: 1200,
  },
  aboutUnderground: {
    src: '/images/about-underground.webp',
    alt: 'Miner in high-visibility gear walking beside a loader in an underground tunnel',
    width: 600,
    height: 900,
  },
  sustainForest: {
    src: '/images/sustain-forest.webp',
    alt: 'Aerial view of a river winding through dense tropical forest',
    width: 1400,
    height: 734,
  },
  sustainSeedling: {
    src: '/images/sustain-seedling.webp',
    alt: 'Gloved hands planting a young seedling in dark soil',
    width: 700,
    height: 1050,
  },
  investorsGold: {
    src: '/images/investors-gold.webp',
    alt: 'Stacked fine gold bullion bars',
    width: 1000,
    height: 667,
  },
  careersEngineer: {
    src: '/images/careers-engineer.webp',
    alt: 'Smiling engineer wearing a white hard hat, safety glasses and orange coveralls',
    width: 900,
    height: 1350,
  },
} satisfies Record<string, Photo>;

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Operations', href: '#operations' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Investors', href: '#investors' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export const stats: Stat[] = [
  { value: 412, suffix: 'k oz', label: 'Gold produced in 2025' },
  { value: 3.8, suffix: 'M oz', label: 'Proven & probable reserves', decimals: 1 },
  { value: 4200, suffix: '+', label: 'Employees, 92% local' },
  { value: 0.21, suffix: '', label: 'Lost-time injury rate (LTIFR)', decimals: 2 },
];

export const operations: Operation[] = [
  {
    id: 'kesse',
    name: 'Kesse Hill Mine',
    location: 'Ashanti Region, Ghana',
    status: 'Production',
    output: '238k oz / yr',
    reserves: '1.9M oz',
    description:
      'Our flagship open-pit and underground operation, with a 4.5 Mtpa carbon-in-leach processing plant.',
    image: {
      src: '/images/op-kesse.webp',
      alt: 'Excavator working the benches of an open-pit mine',
      width: 800,
      height: 533,
    },
  },
  {
    id: 'tano',
    name: 'Tano River Project',
    location: 'Western North Region, Ghana',
    status: 'Production',
    output: '174k oz / yr',
    reserves: '1.2M oz',
    description:
      'Heap-leach operation commissioned in 2022, now running on 40% solar-hybrid power.',
    image: {
      src: '/images/op-tano.webp',
      alt: 'Conveyor stackers building ore stockpiles',
      width: 800,
      height: 494,
    },
  },
  {
    id: 'sikasso',
    name: 'Sikasso Belt',
    location: 'Sikasso Region, Mali',
    status: 'Development',
    output: 'First gold 2027',
    reserves: '0.7M oz',
    description:
      'Feasibility study completed; construction of the processing plant began in Q2 2026.',
    image: {
      src: '/images/op-sikasso.webp',
      alt: 'Aerial view of excavators and dozers preparing a construction site',
      width: 800,
      height: 600,
    },
  },
  {
    id: 'birim',
    name: 'Birim North Licence',
    location: 'Eastern Region, Ghana',
    status: 'Exploration',
    output: '42,000 m drilled',
    reserves: 'Resource pending',
    description:
      'Early-stage greenfield exploration targeting a 22 km shear-hosted gold corridor.',
    image: {
      src: '/images/op-birim.webp',
      alt: 'Drill rig working on rocky exploration ground',
      width: 800,
      height: 600,
    },
  },
];

export const pillars: Pillar[] = [
  {
    title: 'Water stewardship',
    metric: '78% water recycled',
    text: 'Closed-loop process water circuits and quarterly community water-quality reports.',
  },
  {
    title: 'Land rehabilitation',
    metric: '640 ha restored',
    text: 'Progressive backfilling and native reforestation, planned from day one of each pit.',
  },
  {
    title: 'Community investment',
    metric: '$14.2M in 2025',
    text: 'Schools, clinics and a vocational academy co-designed with traditional authorities.',
  },
  {
    title: 'Lower-carbon energy',
    metric: '-31% emissions since 2021',
    text: 'Solar-hybrid plants and fleet electrification toward net zero by 2045.',
  },
];

export const reports: Report[] = [
  { title: 'Q3 2026 Production & Operations Update', date: '2026-10-08', type: 'Quarterly' },
  { title: 'Sikasso Belt construction milestone', date: '2026-09-15', type: 'Press' },
  { title: '2025 Sustainability Report', date: '2026-04-30', type: 'ESG' },
  { title: '2025 Annual Report & Financial Statements', date: '2026-03-28', type: 'Annual' },
];

export const jobs: Job[] = [
  { title: 'Senior Mining Engineer', location: 'Kesse Hill, Ghana', department: 'Operations' },
  { title: 'Exploration Geologist', location: 'Birim North, Ghana', department: 'Exploration' },
  { title: 'Environmental Officer', location: 'Tano River, Ghana', department: 'Sustainability' },
  { title: 'Data Engineer', location: 'Accra HQ (hybrid)', department: 'Technology' },
];
