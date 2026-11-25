/**
 * B/Stack Club Data Source
 * Bosscoder School of Technology
 * All content is placeholder and configurable in this single file.
 */

export interface Vertical {
  id: 'B/Algo' | 'B/Uild' | 'B/Hack' | 'B/Dev';
  name: string;
  tagline: string;
  color: string;
  accentBg: string;
  description: string;
  whatYoullDo: string[];
  symbolType: 'algo' | 'unit' | 'hack' | 'dev';
  leadName: string;
}

export interface Project {
  id: string;
  title: string;
  vertical: 'B/Algo' | 'B/Uild' | 'B/Hack' | 'B/Dev';
  verticalColor: string;
  descriptionLines: [string, string, string, string];
  tags: string[];
  builtBy: string[];
  funFact: string;
  tiltAngle: number;
  badge: string;
  githubUrl: string;
  learnedTakeaways: string[];
  previewGradient: string;
  illustrationSvg: 'rover' | 'code' | 'cloud' | 'trophy' | 'iot';
}

export interface ClubEvent {
  id: string;
  title: string;
  name?: string; // friendly alias for title
  vertical: 'B/Algo' | 'B/Uild' | 'B/Hack' | 'B/Dev' | 'All';
  verticalColor: string;
  dateStr: string;
  date?: string; // friendly alias for dateStr
  targetIso: string;
  location: string;
  place?: string; // friendly alias for location
  note: string;
  description?: string; // friendly alias for note
  isHeroNextMission?: boolean;
  status: 'upcoming' | 'live' | 'completed';
  registrationUrl?: string;
  link?: string; // friendly alias for registrationUrl
  missionNumber?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  avatarSeed: string;
  avatarColor: string;
  /** Optional real photo (path or URL). If empty, a cartoon avatar is drawn instead. */
  photoUrl?: string;
  role: string;
  isLead: boolean;
  verticals: ('B/Algo' | 'B/Uild' | 'B/Hack' | 'B/Dev')[];
  description: string;
  memberSince: string;
  whatIBuild: string;
  funFact: string;
  skills: { label: string; level: number }[];
  github: string;
  linkedin: string;
  email: string;
}

export const CLUB_META = {
  name: 'B/Stack',
  fullName: 'B/Stack',
  institution: 'Bosscoder School of Technology',
  heroSubtitle: 'The tech club of Bosscoder School of Technology',
  taglines: [
    'B/Algo · B/Uild · B/Hack · B/Dev',
    'MAKE · BREAK · SHIP',
    'STUDENT BUILDERS',
  ],
  stats: [
    { value: 'XX+', label: 'members', targetNum: 140 },
    { value: 'XX+', label: 'projects', targetNum: 42 },
    { value: 'XX+', label: 'events', targetNum: 28 },
    { value: '4', label: 'verticals', targetNum: 4 },
  ],
  established: 'EST. 20XX',
  socials: {
    github: 'https://github.com/b-stack',
    instagram: 'https://instagram.com/bstack_club',
    linkedin: 'https://linkedin.com/company/b-stack',
    email: 'crew@bstack.tech',
  },
};

export const VERTICALS: Record<Vertical['id'], Vertical> = {
  'B/Algo': {
    id: 'B/Algo',
    name: 'B/Algo',
    tagline: 'computer programming and problem solving',
    color: '#7F77DD',
    accentBg: 'rgba(127, 119, 221, 0.16)',
    description: 'Master advanced algorithms, competitive sprints, computational geometry, and algorithmic art.',
    whatYoullDo: [
      'Solve graph theory, DP, and dynamic tree puzzles under clock pressure',
      'Compete in collegiate algorithmic battles, ICPC qualifiers & weekly heats',
      'Optimize hot code paths to sub-millisecond execution times',
    ],
    symbolType: 'algo',
    leadName: 'Member name (Algo Lead)',
  },
  'B/Uild': {
    id: 'B/Uild',
    name: 'B/Uild',
    tagline: 'robotics and hardware',
    color: '#1D9E75',
    accentBg: 'rgba(29, 158, 117, 0.16)',
    description: 'Bridge firmware with the physical realm: soldering circuits, CAD mechanics, sensor telemetry, and rovers.',
    whatYoullDo: [
      'Design modular PCBs, motor controllers & telemetry transceivers',
      'Assemble autonomous rovers with computer vision and LiDAR navigation',
      'Compete in university hardware hackathons and combat robotics arenas',
    ],
    symbolType: 'unit',
    leadName: 'Member name (Unit Lead)',
  },
  'B/Hack': {
    id: 'B/Hack',
    name: 'B/Hack',
    tagline: 'hackathons and team challenges',
    color: '#D85A30',
    accentBg: 'rgba(216, 90, 48, 0.16)',
    description: 'Assemble lightning-fast cross-discipline squads to turn wild ideas into functional moonshots in 36 hours.',
    whatYoullDo: [
      'Master rapid ideation, wireframing, pitch rehearsal & sleepless sprint stamina',
      'Participate in national and international hackathon road trips',
      'Ship polished MVPs with real users before Sunday demo judging',
    ],
    symbolType: 'hack',
    leadName: 'Member name (Hack Lead)',
  },
  'B/Dev': {
    id: 'B/Dev',
    name: 'B/Dev',
    tagline: 'open source and web development',
    color: '#378ADD',
    accentBg: 'rgba(55, 138, 221, 0.16)',
    description: 'Craft high-performance distributed systems, modern web platforms, and contribute to world-class OSS repos.',
    whatYoullDo: [
      'Build scalable web stacks with TypeScript, React, Rust, and Go',
      'Contribute upstream PRs to major open-source ecosystems',
      'Deploy and maintain developer tooling for the college student body',
    ],
    symbolType: 'dev',
    leadName: 'Member name (Dev Lead)',
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Project name 01: RoboStack Rover',
    vertical: 'B/Uild',
    verticalColor: '#1D9E75',
    descriptionLines: [
      'A 6-wheeled terrain rover engineered with dual ESP32 chips and customized planetary gearboxes.',
      'Constructed using laser-cut acrylic, 3D printed ABS suspension arms, and differential steering kinematics.',
      'During testing on campus gravel, motor driver thermal throttling caught fire; rebuilt with copper heat-sinks.',
      'Now autonomously maps campus hallways with 2D LiDAR and streams live telemetry to a browser dashboard.',
    ],
    tags: ['ESP32', 'ROS2', 'C++', 'FreeRTOS', '3D Print'],
    builtBy: ['Member name (Lead)', 'Member name', 'Member name'],
    funFact: 'Survived an accidental 1.2-meter drop off the engineering stairs with zero frame fractures!',
    tiltAngle: -2.5,
    badge: 'HARDWARE PROTOTYPE',
    githubUrl: 'https://github.com/b-stack/robostack-rover',
    learnedTakeaways: [
      'Brushless ESC firmware calibration requires precise deadband curves',
      'LiDAR SLAM accuracy doubles when fused with wheel encoder odometry',
      'Always install accessible emergency hardware kill-switches',
    ],
    previewGradient: 'from-[#1D9E75] to-[#0B1226]',
    illustrationSvg: 'rover',
  },
  {
    id: 'proj-2',
    title: 'Project name 02: AlgoDuel Arena',
    vertical: 'B/Algo',
    verticalColor: '#7F77DD',
    descriptionLines: [
      'A multiplayer 1v1 terminal & web battleground where coders duel to solve randomized algorithmic teasers.',
      'Powered by an isolated Docker sandbox runner measuring memory allocations and microsecond CPU ticks.',
      'Encountered race conditions when both players submitted simultaneous AST patches on WebSocket sync.',
      'Handles over 500 concurrent matches with millisecond leaderboard sync and interactive visual test cases.',
    ],
    tags: ['Go', 'TypeScript', 'Docker', 'WebSockets', 'Redis'],
    builtBy: ['Member name (Algo Lead)', 'Member name'],
    funFact: 'Our fastest player solved a hard DP Knapsack variation in exactly 43 seconds flat.',
    tiltAngle: 2.8,
    badge: 'COMPETITIVE ENGINE',
    githubUrl: 'https://github.com/b-stack/algoduel-arena',
    learnedTakeaways: [
      'Securing user-submitted untrusted code requires cgroups v2 resource quotas',
      'Real-time syntax diffing reduces WebSocket payload size by 84%',
      'Predictive input buffering keeps duels responsive even at high latency',
    ],
    previewGradient: 'from-[#7F77DD] to-[#26215C]',
    illustrationSvg: 'code',
  },
  {
    id: 'proj-3',
    title: 'Project name 03: OmniSync OSS',
    vertical: 'B/Dev',
    verticalColor: '#378ADD',
    descriptionLines: [
      'A zero-config peer-to-peer file synchronization daemon built entirely for local campus networks.',
      'Written in Rust with WebRTC data channels, multicast DNS discovery, and end-to-end ChaCha20 encryption.',
      'Cross-subnet UDP broadcast packets were repeatedly blocked by university campus firewall switches.',
      'Pioneered automatic STUN hole punching and relay fallback, maintaining 90MB/s sustained transfers.',
    ],
    tags: ['Rust', 'WebRTC', 'Tauri', 'mDNS', 'Cryptography'],
    builtBy: ['Member name (Dev Lead)', 'Member name', 'Member name'],
    funFact: 'Shared over 14 Terabytes of lecture slides and Linux ISOs across campus dorms in week one.',
    tiltAngle: -1.8,
    badge: 'OPEN SOURCE 800+ ★',
    githubUrl: 'https://github.com/b-stack/omnisync-oss',
    learnedTakeaways: [
      'Zero-copy buffer slicing in Rust preserves battery life on laptops',
      'mDNS broadcast requires careful packet rate limiting to prevent network flood',
      'Writing cross-platform GUI with Tauri halved memory usage compared to Electron',
    ],
    previewGradient: 'from-[#378ADD] to-[#151038]',
    illustrationSvg: 'cloud',
  },
  {
    id: 'proj-4',
    title: 'Project name 04: HackGrid Live',
    vertical: 'B/Hack',
    verticalColor: '#D85A30',
    descriptionLines: [
      'An all-in-one 36-hour hackathon management cockpit handling team matching, mentor queues, and judging.',
      'Features a real-time matrix display of all hacker booths with live status flags and SMS alert webhooks.',
      'At 3 AM during a 600-person hackathon, the database connection pool starved under simultaneous check-ins.',
      'Hot-patched with optimistic UI caches and survived 42 judges grading 88 projects simultaneously.',
    ],
    tags: ['Next.js', 'PostgreSQL', 'Twilio', 'Tailwind', 'Node.js'],
    builtBy: ['Member name (Hack Lead)', 'Member name'],
    funFact: 'Powered 4 inter-collegiate hackathons and dispatched 3,400 slice-of-pizza notifications!',
    tiltAngle: 3.2,
    badge: 'HACKATHON CHAMPION',
    githubUrl: 'https://github.com/b-stack/hackgrid-live',
    learnedTakeaways: [
      'Judging queues need deterministic round-robin assignment to avoid judge fatigue',
      'Optimistic mutations with toast rollbacks keep UI snappy on dodgy venue Wi-Fi',
      'Always have offline fallback sheets ready for venue network blackout',
    ],
    previewGradient: 'from-[#D85A30] to-[#2A1426]',
    illustrationSvg: 'trophy',
  },
  {
    id: 'proj-5',
    title: 'Project name 05: EcoSense IoT Mesh',
    vertical: 'B/Uild',
    verticalColor: '#1D9E75',
    descriptionLines: [
      'A solar-powered environmental sensor mesh monitoring campus classroom air quality and ambient acoustics.',
      'Built with ultra-low-power Nordic nRF52 BLE beacons relaying telemetry over a Zigbee sub-GHz mesh.',
      'Water ingress during monsoon season shorted three rooftop sensory nodes; redesigned with silicone gaskets.',
      'Data streams directly to an interactive 3D voxel heatmap viewable by facility managers on campus.',
    ],
    tags: ['nRF52', 'Zigbee', 'Solar Energy', 'Sensors', 'Three.js'],
    builtBy: ['Member name', 'Member name', 'Member name'],
    funFact: 'Detected an unventilated chemistry lab spike 14 minutes before the building alarm activated.',
    tiltAngle: -2.0,
    badge: 'SMART CAMPUS IOT',
    githubUrl: 'https://github.com/b-stack/ecosense-iot',
    learnedTakeaways: [
      'Solar energy harvesting requires dynamic deep-sleep cycle algorithms',
      'Outdoor IP67 housing design is as vital as the circuit schematic itself',
      'Sensor calibration curves drift over time without baseline auto-zeroing',
    ],
    previewGradient: 'from-[#1D9E75] to-[#14122E]',
    illustrationSvg: 'iot',
  },
];

export const EVENTS: ClubEvent[] = [
  {
    id: 'evt-hero',
    title: 'B/Hack Sprint 20XX: 36-Hour Hackathon Mission',
    vertical: 'B/Hack',
    verticalColor: '#D85A30',
    dateStr: 'November 14-16, 20XX',
    targetIso: '2026-11-14T09:00:00',
    location: 'Bosscoder Tech Hall & Virtual Arena',
    note: 'Build, break, and ship moonshot prototypes in 36 hours. Mentors, prizes, food, and midnight pizza included!',
    isHeroNextMission: true,
    status: 'upcoming',
    registrationUrl: '#join',
    missionNumber: 'MISSION 042',
  },
  {
    id: 'evt-2',
    title: 'B/Algo: Graph Traversal & Dynamic Programming Heats',
    vertical: 'B/Algo',
    verticalColor: '#7F77DD',
    dateStr: 'November 22, 20XX · 18:00',
    targetIso: '2026-11-22T18:00:00',
    location: 'Lab 402, Bosscoder School of Tech',
    note: 'Deep dive into Dijkstra variations, topological sorts, and ICPC tournament speed drills.',
    status: 'upcoming',
  },
  {
    id: 'evt-3',
    title: 'B/Uild: Quadcopter PCB & ESC Soldering Bootcamp',
    vertical: 'B/Uild',
    verticalColor: '#1D9E75',
    dateStr: 'December 05, 20XX · 14:00',
    targetIso: '2026-12-05T14:00:00',
    location: 'Maker Garage & Robotics Lab',
    note: 'Hands-on surface mount soldering, flight controller flashing, and propeller balancing test bench.',
    status: 'upcoming',
  },
  {
    id: 'evt-4',
    title: 'B/Dev: Fullstack Rust & WebAssembly Workshop',
    vertical: 'B/Dev',
    verticalColor: '#378ADD',
    dateStr: 'December 12, 20XX · 17:00',
    targetIso: '2026-12-12T17:00:00',
    location: 'Auditorium B & Live Stream',
    note: 'Compiling high-performance native routines into the browser and building zero-overhead UI apps.',
    status: 'upcoming',
  },
  {
    id: 'evt-past-1',
    title: 'Event 01: Freshmen Hardware & Algo Kickoff',
    vertical: 'All',
    verticalColor: '#DDEB6B',
    dateStr: 'September 20XX',
    targetIso: '2026-09-10T10:00:00',
    location: 'Main Amphitheater',
    note: 'Welcomed 200+ curious builders with live rover demonstrations and lightning coding puzzles.',
    status: 'completed',
    missionNumber: 'MISSION 038',
  },
  {
    id: 'evt-past-2',
    title: 'Event 02: B/Hack Inter-College Invitational',
    vertical: 'B/Hack',
    verticalColor: '#D85A30',
    dateStr: 'October 20XX',
    targetIso: '2026-10-02T09:00:00',
    location: 'Bosscoder Tech Hall',
    note: '40 teams, 12 judges, and 3 winner trophies awarded for revolutionary campus tools.',
    status: 'completed',
    missionNumber: 'MISSION 039',
  },
  {
    id: 'evt-past-3',
    title: 'Event 03: Global Open Source Hacktober Push',
    vertical: 'B/Dev',
    verticalColor: '#378ADD',
    dateStr: 'October 08, 20XX',
    targetIso: '2026-10-08T16:00:00',
    location: 'Virtual OSS Hub',
    note: 'Merged 112 pull requests across 18 public GitHub repositories in a single weekend.',
    status: 'completed',
    missionNumber: 'MISSION 040',
  },
  {
    id: 'evt-past-4',
    title: 'Event 04: BattleBots Campus Demolition Derby',
    vertical: 'B/Uild',
    verticalColor: '#1D9E75',
    dateStr: 'October 14, 20XX',
    targetIso: '2026-10-14T15:00:00',
    location: 'Campus Arena',
    note: '8 custom-built 3kg combat robots clashed in our reinforced polycarbonate cage arena.',
    status: 'completed',
    missionNumber: 'MISSION 041',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'aishik',
    name: 'Aishik',
    avatarSeed: 'aishik',
    avatarColor: '#7F77DD',
    photoUrl: '/crew/Aishik.jpg',
    role: '',
    isLead: false,
    verticals: ['B/Algo'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'ansh',
    name: 'Ansh',
    avatarSeed: 'ansh',
    avatarColor: '#1D9E75',
    photoUrl: '/crew/Ansh.png',
    role: '',
    isLead: false,
    verticals: ['B/Uild'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'arsh',
    name: 'Arsh',
    avatarSeed: 'arsh',
    avatarColor: '#D85A30',
    photoUrl: '/crew/Arsh.png',
    role: '',
    isLead: false,
    verticals: ['B/Hack'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'harshit',
    name: 'Harshit',
    avatarSeed: 'harshit',
    avatarColor: '#378ADD',
    photoUrl: '/crew/Harshit.jpg',
    role: '',
    isLead: false,
    verticals: ['B/Dev'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'kousitha',
    name: 'Kousitha',
    avatarSeed: 'kousitha',
    avatarColor: '#E879F9',
    photoUrl: '/crew/Kousitha.png',
    role: '',
    isLead: false,
    verticals: ['B/Algo'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'nilay',
    name: 'Nilay',
    avatarSeed: 'nilay',
    avatarColor: '#67E8F9',
    photoUrl: '/crew/Nilay.webp',
    role: '',
    isLead: false,
    verticals: ['B/Dev'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'priyansh',
    name: 'Priyansh',
    avatarSeed: 'priyansh',
    avatarColor: '#F59E0B',
    photoUrl: '/crew/Priyansh.jpeg',
    role: '',
    isLead: false,
    verticals: ['B/Hack'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'r-pranav',
    name: 'R Pranav',
    avatarSeed: 'r-pranav',
    avatarColor: '#10B981',
    photoUrl: '/crew/R Pranav.jpeg',
    role: '',
    isLead: false,
    verticals: ['B/Uild'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'sambhu',
    name: 'Sambhu',
    avatarSeed: 'sambhu',
    avatarColor: '#8B5CF6',
    photoUrl: '/crew/Sambhu.jpg',
    role: '',
    isLead: false,
    verticals: ['B/Algo'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'shivam',
    name: 'Shivam',
    avatarSeed: 'shivam',
    avatarColor: '#EC4899',
    photoUrl: '/crew/Shivam.jpg',
    role: '',
    isLead: false,
    verticals: ['B/Hack'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'tanishq',
    name: 'Tanishq',
    avatarSeed: 'tanishq',
    avatarColor: '#06B6D4',
    photoUrl: '/crew/Tanishq.jpg',
    role: '',
    isLead: false,
    verticals: ['B/Dev'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'trideep',
    name: 'Trideep',
    avatarSeed: 'trideep',
    avatarColor: '#F97316',
    photoUrl: '/crew/Trideep.png',
    role: '',
    isLead: false,
    verticals: ['B/Dev', 'B/Algo'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'vinay',
    name: 'Vinay',
    avatarSeed: 'vinay',
    avatarColor: '#14B8A6',
    photoUrl: '/crew/Vinay.png',
    role: '',
    isLead: false,
    verticals: ['B/Uild'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'vanshika',
    name: 'Vanshika',
    avatarSeed: 'vanshika',
    avatarColor: '#A855F7',
    photoUrl: '/crew/Vnashika.png',
    role: '',
    isLead: false,
    verticals: ['B/Dev'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'yash',
    name: 'Yash',
    avatarSeed: 'yash',
    avatarColor: '#3B82F6',
    photoUrl: '/crew/Yash.jpg',
    role: '',
    isLead: false,
    verticals: ['B/Hack'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
  {
    id: 'ziyad',
    name: 'Ziyad',
    avatarSeed: 'ziyad',
    avatarColor: '#6366F1',
    photoUrl: '/crew/Ziyad.JPG',
    role: '',
    isLead: false,
    verticals: ['B/Algo'],
    description: '',
    memberSince: '2024',
    whatIBuild: '',
    funFact: '',
    skills: [],
    github: 'https://github.com/b-stack',
    linkedin: 'https://linkedin.com',
    email: 'crew@bstack.tech',
  },
];
