export const profile = {
  name: "Saicharan Chowdarapu",
  shortName: "Sai",
  location: "Atlanta, Georgia",
  email: "sai.chowdarapu09@gmail.com",
  linkedin: "https://www.linkedin.com/in/sai-chowdarapu/",
  github: "https://github.com/SaiC123",
  instagram: "https://www.instagram.com/saichowvlogs/",
  bio: "Current student taking college-level coursework at Georgia Tech. Most of what I do outside class is running things, and figuring out the financial and operational side that keeps each one working.",
  focusNote:
    "Studying Computer Science and Business, with a running interest in how the two fit together.",
};

export const facts = [
  { k: "AP courses", v: "20+" },
  { k: "Dual enrollment", v: "10+" },
  { k: "Coursework", v: "Georgia Tech (4.0)" },
  { k: "SAT", v: "1530 / 1600" },
  { k: "Field", v: "Computer Science / Business" },
  { k: "Based in", v: "Atlanta, Georgia" },
];

export type Activity = {
  slug: string;
  role: string;
  org: string;
  place: string;
  period: string;
  summary: string;
  bullets: string[];
  skills: string[];
  image: string;
  imageAlt: string;
  /** True stock/placeholder photo, not a real photo or logo yet. */
  placeholderImage?: boolean;
  extraImage?: string;
  extraImageAlt?: string;
  document?: { label: string; href: string };
};

// Featured activities, chosen for having a concrete role, a measurable
// result, and enough detail to stand as its own card.
export const activities: Activity[] = [
  {
    slug: "equinox",
    role: "Co-Founder",
    org: "Equinox Academy",
    place: "Alpharetta, Georgia",
    period: "Jun 2025 - Present",
    summary:
      "Lead an 8-tutor team serving 200+ students across 30+ courses, from 10 AP subjects to SAT/ACT prep and finance.",
    bullets: [
      "Manage an 8-tutor team delivering 30+ courses (10 APs, SAT/ACT, finance) to 200+ students.",
      "Run the business end to end, from pricing and marketing to scheduling and payments, earning $3K+ in profit.",
      "Students have earned 200+ AP scores of 5.",
    ],
    skills: [
      "Business strategy",
      "Pricing strategy",
      "Marketing",
      "Client acquisition",
      "Team leadership",
      "Canva",
      "Google Workspace",
      "Calendly",
      "Stripe",
    ],
    image: "/images/equinox.png",
    imageAlt: "Equinox Academy logo",
  },
  {
    slug: "leadership-initiative",
    role: "International Leadership & Business Intern",
    org: "Leadership Initiatives",
    place: "Washington, D.C. (Remote)",
    period: "Jul 2026 - Present",
    summary:
      "Built a business plan with a 5-person team for a Nigerian startup, then pitched to Microsoft, AWS, and Georgetown judges and won a $3,500 grant.",
    bullets: [
      "Built a business plan, marketing strategy, branding, and startup budget with a 5-person team for an entrepreneur in Bauchi State, Nigeria.",
      "Pitched to judges from Microsoft, AWS, and Georgetown University, securing a $3,500 grant for implementation.",
      "Continuing into a year-long International Leadership Program, building business solutions for local problems in Nigeria.",
    ],
    skills: [
      "Business plan development",
      "Financial planning",
      "Marketing strategy",
      "Branding",
      "Investor pitching",
      "Google Slides",
      "Excel",
      "Canva",
    ],
    image: "/images/leadership-initiatives.jpg",
    imageAlt: "Leadership Initiatives logo",
  },
  {
    slug: "lumora",
    role: "Co-Founder",
    org: "Lumora Agency",
    place: "Alpharetta, Georgia",
    period: "Jul 2025 - Present",
    summary:
      "Co-founded a nonprofit marketing agency that has delivered branding and web services to 20+ local businesses (~$100M combined value).",
    bullets: [
      "Co-founded a 501(c)(3) nonprofit social media marketing agency.",
      "Lead a team of 10 interns delivering branding and web services.",
      "Served 20+ local businesses with a combined value of ~$100M.",
    ],
    skills: [
      "Digital marketing",
      "Social media strategy",
      "Branding",
      "Client acquisition",
      "Nonprofit operations",
      "Canva",
      "Meta Business Suite",
      "Google Analytics",
    ],
    image: "/images/lumora.webp",
    imageAlt: "Lumora Agency logo",
  },
  {
    slug: "pypath",
    role: "Co-Founder",
    org: "Pypath",
    place: "Global",
    period: "May 2025 - Present",
    summary:
      "Designed a free Python curriculum and deployed it to 25+ schools in 6 countries, reaching 1,000+ students in developing regions.",
    bullets: [
      "Designed a free Python curriculum for schools in developing countries.",
      "Deployed it to 25+ schools across 6 countries, reaching 1,000+ students.",
      "Founding partner running curriculum design and program rollout.",
    ],
    skills: [
      "Python",
      "Curriculum design",
      "Nonprofit operations",
      "Global program management",
      "Jupyter Notebook",
      "GitHub",
      "Google Classroom",
    ],
    image: "/images/pypath.png",
    imageAlt: "Pypath logo",
  },
  {
    slug: "innovateatl",
    role: "Co-Founder",
    org: "InnovateATL",
    place: "Georgia",
    period: "Mar 2026 - Present",
    summary:
      "Launched one of Georgia's largest student startup sprints: 70+ teams and 200+ students, with $1.6K raised.",
    bullets: [
      "Launched and run the sprint end to end: 70+ teams, 200+ student participants, and $1.6K raised.",
      "Built a partner network of 7 organizations, including CREATE-X, Tech Square VC, and GT CEISMC.",
      "Own operations, outreach, sponsorships, and event execution.",
    ],
    skills: [
      "Operations",
      "Sponsorships & partnerships",
      "Event execution",
      "Outreach",
      "Notion",
      "Airtable",
      "Canva",
    ],
    image: "/images/innovateatl.jpg",
    imageAlt: "InnovateATL logo",
  },
  {
    slug: "homemore-project",
    role: "Grants & Presentations Intern",
    org: "The HomeMore Project",
    place: "San Francisco, California",
    period: "Aug 2026 - Present",
    summary:
      "Created 5 pitch decks and scripts for a homelessness nonprofit's grant and outreach work, used in 100+ meetings.",
    bullets: [
      "Created 5 pitch decks and accompanying scripts supporting grant applications and outreach.",
      "The materials have been used in 100+ meetings.",
      "The organization has distributed 1,200+ solar packs across 25 cities.",
    ],
    skills: ["Presentation design", "Grant writing", "Nonprofit support", "Google Slides", "Canva"],
    image: "/images/homemore-project.png",
    imageAlt: "HomeMore Project logo",
  },
  {
    slug: "citizens-bank",
    role: "Teller",
    org: "Citizens Bank of Georgia",
    place: "Alpharetta, Georgia",
    period: "Sep 2026 - Present",
    summary:
      "Analyze 10+ client financial statements daily for liquidity and credit risk, while serving 20+ customers and handling $15K+ in cash a day.",
    bullets: [
      "Analyze 10+ client financial statements daily, assessing liquidity and credit risk.",
      "Serve 20+ customers and handle $15K+ in cash daily.",
      "Process deposits and loans.",
    ],
    skills: [
      "Financial statement analysis",
      "Credit & liquidity risk",
      "Cash handling",
      "Retail banking operations",
    ],
    image: "/images/citizens-bank.jpg",
    imageAlt: "A bank teller counter",
  },
  {
    slug: "docubridge",
    role: "Strategy & Business Development Intern",
    org: "DocuBridge (HUVTSP)",
    place: "Remote",
    period: "Jun 2025 - Jul 2025",
    summary:
      "Analyzed 30+ AI-finance startups to develop market segmentation, SWOT analysis, and product recommendations for DocuBridge's go-to-market strategy.",
    bullets: [
      "Analyzed 30+ AI-finance startups and established players, researching generative AI applications, market trends, customer needs, and competitive positioning.",
      "Developed market segmentation, a SWOT analysis, and product recommendations supporting DocuBridge's go-to-market strategy.",
      "Built a visual market map and feature matrix comparing DocuBridge to competitors, identifying 5 key differentiation areas.",
    ],
    skills: ["Market research", "Competitive analysis", "Google Slides", "Excel"],
    image: "/images/docubridge-logo.png",
    imageAlt: "Harvard Undergraduate Ventures-TECH Summer Program emblem",
  },
  {
    slug: "nriva",
    role: "Business & Finance Analyst",
    org: "NRIVA Business and Finance Internship",
    place: "St. Louis, Missouri",
    period: "May 2024 - Aug 2024",
    summary:
      "Analyzed an $8M convention budget for a 100K+ member nonprofit and built predictive financial models that identified ~$100,000 in savings.",
    bullets: [
      "Analyzed an $8M convention budget for NRIVA, a nonprofit with 100K+ members.",
      "Built predictive financial models that identified ~$100,000 in potential savings.",
      "Completed 5+ hands-on projects, including a startup business plan (revenue projections, cost structure, break-even analysis) presented to a panel of 6 executives and a forecasting model that improved profit-projection accuracy by 20% in simulations.",
    ],
    skills: ["Financial modeling", "Predictive modeling", "Budget analysis", "Excel", "Business planning"],
    image: "/images/nriva-logo.jpeg",
    imageAlt: "NRIVA logo",
    extraImage: "/images/nriva-extra.png",
    extraImageAlt: "Financial model built during the NRIVA internship",
  },
  {
    slug: "trailblazer-robotics",
    role: "Program Lead",
    org: "Trailblazer Robotics",
    place: "Alpharetta, Georgia",
    period: "Oct 2025 - Present",
    summary:
      "Taught 30+ preschoolers the fundamentals of robotics and engineering through hands-on lessons, 3x a week over 6 months.",
    bullets: [
      "Designed and led a robotics and engineering curriculum for 30+ preschool students.",
      "Ran hands-on build sessions 3x per week over 6 months.",
      "Coordinated with instructors to streamline delivery and improve engagement across classes.",
    ],
    skills: ["Robotics", "Curriculum design", "Lesson planning", "Team leadership"],
    image: "/images/trailblazer-robotics.png",
    imageAlt: "Trailblazer Robotics flame-and-gear logo",
  },
  {
    slug: "nit-research",
    role: "Researcher",
    org: "National Institute of Technology, Warangal",
    place: "Warangal, India",
    period: "Ongoing",
    summary:
      "Built an ML anomaly detector that secures MQTT/TLS traffic on IoT networks, reaching 96% accuracy across 8 attack types.",
    bullets: [
      "Built a machine-learning anomaly detector for IoT networks, monitoring MQTT/TLS traffic.",
      "Reached 96% detection accuracy across 8 attack types.",
      "Co-authoring a research paper with Prof. Meher Preetam.",
    ],
    skills: ["Python", "Machine learning", "Anomaly detection", "IoT & network security", "Technical writing"],
    image: "/images/nit-research.jpeg",
    imageAlt: "National Institute of Technology, Warangal emblem",
  },
  {
    slug: "conduct-flow",
    role: "Creator",
    org: "Conduct Flow",
    place: "Remote",
    period: "Ongoing",
    summary:
      "Built an LLM pipeline for client-to-task automation, piloted by 10+ organizations with 63% faster workflows and a 73% acceptance rate.",
    bullets: [
      "Engineered an LLM pipeline for client-to-task automation.",
      "Ran pilots with 10+ organizations: 63% faster workflows and a 73% acceptance rate.",
      "Pitched to Red Line and Telora VCs and spoke at an AI conference.",
    ],
    skills: ["Python", "LLM pipelines", "Workflow automation", "Product development", "Figma"],
    image: "/images/conduct-flow.png",
    imageAlt: "Conduct Flow logo",
  },
  {
    slug: "cafcap",
    role: "Co-Creator",
    org: "CafCap (TiE Atlanta)",
    place: "Atlanta, Georgia",
    period: "Oct 2023 - Apr 2024",
    summary:
      "Co-created CafCap through the TiE Atlanta Entrepreneurship Program, selected as the team's MVP and featured in the Pitch Showcase.",
    bullets: [
      "Co-created CafCap, contributing to product development, market research, business strategy, and pitching.",
      "Selected as the team's MVP for leadership and contribution.",
      "Featured in TiE Atlanta's Pitch Showcase.",
    ],
    skills: ["Product development", "Pitching", "Market research"],
    image: "/images/cafcap.jpeg",
    imageAlt: "TiE Atlanta logo",
  },
  {
    slug: "piano",
    role: "Pianist",
    org: "Piano",
    place: "Atlanta, Georgia",
    period: "Ongoing",
    summary:
      "12 years of piano, reaching college-level proficiency (ABRSM Level 5) with 40+ recitals performed.",
    bullets: [
      "Studied piano for 12 years, reaching college-level proficiency (ABRSM Level 5).",
      "Performed 40+ recitals.",
      "Helped teach ~10 younger students.",
      "Certified through the Guild and ABRSM.",
    ],
    skills: ["Music theory", "Performance", "Teaching"],
    image: "/images/piano.jpg",
    imageAlt: "Sai performing at a piano recital",
  },
  {
    slug: "dance",
    role: "Dancer",
    org: "Shiv's Institute of Dance",
    place: "Atlanta, Georgia",
    period: "Through Mar 2025",
    summary:
      "Bollywood dancer with 30+ performances, including background dancing at 3 concerts and teaching classes, until I stopped in March 2025.",
    bullets: [
      "30+ performances.",
      "Background dancer at 3 concerts.",
      "Taught dance classes.",
    ],
    skills: ["Choreography", "Performance"],
    image: "/images/backdrop/dance/dance-9.jpg",
    imageAlt: "Sai dancing on stage",
  },
];

// Backdrop photos behind the Activities carousel, blurred so they read as
// ambient texture. Keyed by activity slug so the background can switch to
// match whichever activity is centered in the carousel. Activities without
// a dedicated set yet fall back to their own logo (see activityBackdropFor
// below).
export const activityBackdropBySlug: Record<string, string[]> = {
  equinox: [
    "/images/backdrop/equinox/equinox-1.jpg",
    "/images/backdrop/equinox/equinox-2.jpg",
    "/images/backdrop/equinox/equinox-3.jpg",
    "/images/backdrop/equinox/equinox-4.jpg",
    "/images/backdrop/equinox/equinox-5.jpg",
    "/images/backdrop/equinox/equinox-6.jpg",
  ],
  "leadership-initiative": [
    "/images/backdrop/leadership-initiative/li-1.jpg",
    "/images/backdrop/leadership-initiative/li-2.jpg",
    "/images/backdrop/leadership-initiative/li-3.jpg",
    "/images/backdrop/leadership-initiative/li-4.jpg",
    "/images/backdrop/leadership-initiative/li-5.jpg",
  ],
  lumora: [
    "/images/backdrop/lumora/lumora-1.jpg",
    "/images/backdrop/lumora/lumora-2.jpg",
    "/images/backdrop/lumora/lumora-3.jpg",
    "/images/backdrop/lumora/lumora-4.jpg",
  ],
  pypath: [
    "/images/backdrop/pypath/pypath-1.jpg",
    "/images/backdrop/pypath/pypath-2.jpg",
    "/images/backdrop/pypath/pypath-3.jpg",
    "/images/backdrop/pypath/pypath-4.jpg",
  ],
  innovateatl: [
    "/images/backdrop/innovateatl/innovateatl-1.jpg",
    "/images/backdrop/innovateatl/innovateatl-2.jpg",
    "/images/backdrop/innovateatl/innovateatl-3.jpg",
    "/images/backdrop/innovateatl/innovateatl-4.jpg",
  ],
  "homemore-project": [
    "/images/backdrop/homemore-project/homemore-1.jpg",
    "/images/backdrop/homemore-project/homemore-2.jpg",
    "/images/backdrop/homemore-project/homemore-3.jpg",
    "/images/backdrop/homemore-project/homemore-4.jpg",
    "/images/backdrop/homemore-project/homemore-5.jpg",
  ],
  "citizens-bank": ["/images/backdrop/citizens-bank/citizens-bank-1.jpg"],
  nriva: ["/images/backdrop/nriva/nriva-1.jpg"],
  "nit-research": [
    "/images/backdrop/nit-research/nit-research-1.jpg",
    "/images/backdrop/nit-research/nit-research-2.jpg",
    "/images/backdrop/nit-research/nit-research-3.jpg",
  ],
  "conduct-flow": ["/images/backdrop/conduct-flow/conduct-flow-1.jpg"],
  cafcap: [
    "/images/backdrop/cafcap/cafcap-1.jpg",
    "/images/backdrop/cafcap/cafcap-2.jpg",
  ],
  docubridge: ["/images/backdrop/docubridge/docubridge-1.jpg"],
  "trailblazer-robotics": ["/images/backdrop/trailblazer-robotics/trailblazer-robotics-1.jpg"],
  piano: [
    "/images/backdrop/piano/piano-1.jpg",
    "/images/backdrop/piano/piano-2.jpg",
    "/images/backdrop/piano/piano-3.jpg",
    "/images/backdrop/piano/piano-4.jpg",
    "/images/backdrop/piano/piano-5.jpg",
    "/images/backdrop/piano/piano-6.jpg",
  ],
  dance: [
    "/images/backdrop/dance/dance-1.jpg",
    "/images/backdrop/dance/dance-2.jpg",
    "/images/backdrop/dance/dance-3.jpg",
    "/images/backdrop/dance/dance-4.jpg",
    "/images/backdrop/dance/dance-5.jpg",
    "/images/backdrop/dance/dance-6.jpg",
    "/images/backdrop/dance/dance-7.jpg",
    "/images/backdrop/dance/dance-8.jpg",
    "/images/backdrop/dance/dance-9.jpg",
    "/images/backdrop/dance/dance-10.jpg",
    "/images/backdrop/dance/dance-11.jpg",
    "/images/backdrop/dance/dance-12.jpg",
  ],
};

/** Backdrop images for one activity, falling back to its own logo. */
export function activityBackdropFor(activity: Activity): string[] {
  return activityBackdropBySlug[activity.slug] ?? [activity.image];
}

// Unusually wide source images (banner logos, etc.) that need extra width
// in the backdrop collage so they don't get cropped down to a sliver.
export const wideBackdropImages = new Set<string>([
  "/images/backdrop/lumora/lumora-1.jpg",
  "/images/backdrop/pypath/pypath-2.jpg",
  "/images/backdrop/trailblazer-robotics/trailblazer-robotics-1.jpg",
]);

// Unusually tall (portrait) source images that need extra height instead,
// for the same reason.
export const tallBackdropImages = new Set<string>([
  "/images/backdrop/innovateatl/innovateatl-1.jpg",
  "/images/backdrop/innovateatl/innovateatl-4.jpg",
  "/images/backdrop/homemore-project/homemore-4.jpg",
]);

// Per-activity overlap scale for the backdrop collage. Lower means smaller,
// less-upscaled tiles. Defaults to 1.28 (see collageTiles); InnovateATL's
// source images are already pre-blurred and Home More's are lower-res, so
// both look better scaled down a bit rather than blown up to fill big tiles.
export const activityBackdropScale: Record<string, number> = {
  innovateatl: 1.1,
  "homemore-project": 1.12,
  lumora: 1.08,
};

export const awards = [
  {
    place: "1st",
    event: "TSA National Leadership Conference",
    detail: "Software Development",
    description:
      "MirrorMind, a real-time Chrome extension that reads facial expressions aloud for people who are blind or visually impaired.",
    skills: ["MediaPipe", "TensorFlow.js", "Chrome extension APIs", "TypeScript", "Google OAuth2", "Product design"],
  },
  {
    place: "2nd",
    event: "FBLA State Leadership Conference",
    detail: "Intro to Social Media Strategy",
    description:
      "A Facebook-first growth strategy for Akshaya Patra, a nonprofit fighting child food insecurity.",
    skills: ["Social media strategy", "Campaign planning", "Budgeting", "Canva", "A/B testing", "Data-driven marketing"],
  },
  {
    place: "3rd",
    event: "FBLA State Leadership Conference",
    detail: "Data Analysis",
    description:
      "A data model optimizing crowd management, transportation, and housing for the 2028 LA Olympics.",
    skills: ["Python", "Pandas / NumPy", "Data visualization", "Statistical modeling", "Monte Carlo simulation", "Jupyter Notebook"],
  },
  {
    place: "3rd",
    event: "FBLA State Leadership Conference",
    detail: "Community Service Project",
    description:
      "Co-led a food-insecurity initiative that collected 5,000+ lbs of food and reached 300+ households.",
    skills: ["Program management", "Community organizing", "Grant management", "Survey research", "Public speaking"],
  },
  {
    place: "Top 1%",
    event: "Blue Ocean",
    detail: "MirrorMind",
    description: "Rebuilt MirrorMind as a physical wearable, engineering the hardware from scratch.",
    skills: ["Hardware prototyping", "Embedded systems", "Computer vision", "Pitching"],
  },
];

// Wilderness First Aid (exp. Mar 2026) and Adult/Pediatric First Aid/CPR/AED
// (exp. Jan 2026) are left off since both have since expired. Say if you've
// renewed either and I'll add it back.
export const certificationsUrl = "https://www.linkedin.com/in/sai-chowdarapu/details/certifications/";

export const certifications = [
  "Information Technology Specialist, Certiport",
  "Harvard Undergraduate Ventures-TECH Summer Program (HUVTSP)",
  "Future of the Business World, Wharton Global Youth Program",
  "Certificate of Achievement, International Leadership & Business Internship, Leadership Initiatives",
];

export const otherActivities = [
  { label: "Martial arts", value: "3rd-degree black belt" },
  { label: "Music", value: "College-level pianist (Guild, ABRSM)" },
  { label: "Scouting", value: "Life Scout" },
];

export type Hobby = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon:
    | "piano"
    | "dance"
    | "videogames"
    | "naruto"
    | "himym"
    | "scouts"
    | "friends"
    | "concerts"
    | "car"
    | "starbucks"
    | "food"
    | "anime"
    | "family"
    | "dog";
  /**
   * Real photos for this tile, each with its own width/height aspect ratio
   * (width / height) so the collage can lay them out like a justified photo
   * gallery - every photo shown in full, never cropped, and sized close to
   * its natural shape. Empty means it's using the icon treatment for now.
   */
  photos: { src: string; aspect: number }[];
};

// Placeholder copy - swap in your own words whenever you're ready.
export const hobbies: Hobby[] = [
  {
    slug: "piano",
    title: "Piano",
    tagline: "College-level pianist, Guild & ABRSM certified",
    description:
      "I've been playing for years and still perform in recitals. It's the one part of my day where I have to slow all the way down and get something exactly right, note by note.",
    icon: "piano",
    photos: [
      { src: "/images/backdrop/piano/piano-1.jpg", aspect: 1.7787 },
      { src: "/images/backdrop/piano/piano-2.jpg", aspect: 1.7787 },
      { src: "/images/backdrop/piano/piano-3.jpg", aspect: 1.5 },
      { src: "/images/backdrop/piano/piano-4.jpg", aspect: 1.7787 },
      { src: "/images/backdrop/piano/piano-5.jpg", aspect: 1.7787 },
      { src: "/images/backdrop/piano/piano-6.jpg", aspect: 1.3333 },
    ],
  },
  {
    slug: "dance",
    title: "Dance",
    tagline: "Bollywood dancer, 30+ performances",
    description:
      "Bollywood dance was a constant for me for years, 30+ performances, background dancing at three concerts, and teaching classes on the side, before I stopped in March 2025.",
    icon: "dance",
    photos: [
      { src: "/images/backdrop/dance/dance-1.jpg", aspect: 1.3333 },
      { src: "/images/backdrop/dance/dance-2.jpg", aspect: 2.1226 },
      { src: "/images/backdrop/dance/dance-3.jpg", aspect: 1.7787 },
      { src: "/images/backdrop/dance/dance-4.jpg", aspect: 1.3333 },
      { src: "/images/backdrop/dance/dance-5.jpg", aspect: 1.4975 },
      { src: "/images/backdrop/dance/dance-6.jpg", aspect: 1.3333 },
      { src: "/images/backdrop/dance/dance-7.jpg", aspect: 1.5 },
      { src: "/images/backdrop/dance/dance-8.jpg", aspect: 1.5 },
      { src: "/images/backdrop/dance/dance-9.jpg", aspect: 1.5 },
      { src: "/images/backdrop/dance/dance-10.jpg", aspect: 1.4975 },
      { src: "/images/backdrop/dance/dance-11.jpg", aspect: 1.5 },
      { src: "/images/backdrop/dance/dance-12.jpg", aspect: 1.5 },
    ],
  },
  {
    slug: "videogames",
    title: "Video Games",
    tagline: "Currently Valorant (Diamond)",
    description:
      "I currently play Valorant and I'm Diamond rank. Grew up on Rocket League, Fortnite, and Minecraft before that.",
    icon: "videogames",
    photos: [{ src: "/images/personal/videogames.jpg", aspect: 1.5 }],
  },
  {
    slug: "naruto",
    title: "Naruto",
    tagline: "My favorite anime",
    description:
      "The one I always come back to. Photos coming soon.",
    icon: "naruto",
    photos: [],
  },
  {
    slug: "himym",
    title: "HIMYM",
    tagline: "How I Met Your Mother, on repeat",
    description:
      "A comfort rewatch at this point. Photos coming soon.",
    icon: "himym",
    photos: [],
  },
  {
    slug: "scouts",
    title: "Scouts",
    tagline: "Life Scout, backpacking trips and all",
    description:
      "Scouting has meant a lot of time outdoors, including multi-day backpacking treks with my crew.",
    icon: "scouts",
    photos: [{ src: "/images/personal/scouts.jpg", aspect: 1.5491 }],
  },
  {
    slug: "friends",
    title: "Friends",
    tagline: "A lot of my free time is just this",
    description:
      "Most of my time outside everything else goes to this: going out to eat, hanging out, no real agenda. I'll write more here soon.",
    icon: "friends",
    photos: [
      { src: "/images/personal/friends/friends-1.jpg", aspect: 1.3333 },
      { src: "/images/personal/friends/friends-2.jpg", aspect: 0.75 },
      { src: "/images/personal/friends/friends-3.jpg", aspect: 1.3333 },
      { src: "/images/personal/friends/friends-4.jpg", aspect: 1.3333 },
      { src: "/images/personal/friends/friends-5.jpg", aspect: 1.3333 },
    ],
  },
  {
    slug: "concerts",
    title: "Concerts",
    tagline: "Rolling Loud, arena shows, and more",
    description:
      "I go to as many shows as I can with friends. I'll write more here soon.",
    icon: "concerts",
    photos: [
      { src: "/images/personal/concerts/concerts-1.jpg", aspect: 0.75 },
      { src: "/images/personal/concerts/concerts-2.jpg", aspect: 1.3333 },
      { src: "/images/personal/concerts/concerts-3.jpg", aspect: 1.3333 },
      { src: "/images/personal/concerts/concerts-4.jpg", aspect: 0.75 },
      { src: "/images/personal/concerts/concerts-5.jpg", aspect: 1.3333 },
    ],
  },
  {
    slug: "car",
    title: "Car",
    tagline: "2010 Mustang GT, manual, my first car",
    description:
      "My 2010 Mustang GT is my first car and still my daily driver. It's a manual, and I recently swapped in a custom screen myself.",
    icon: "car",
    photos: [
      { src: "/images/personal/car/car-1.jpg", aspect: 0.75 },
      { src: "/images/personal/car/car-2.jpg", aspect: 0.75 },
      { src: "/images/personal/car/car-3.jpg", aspect: 0.7167 },
    ],
  },
  {
    slug: "starbucks",
    title: "Starbucks",
    tagline: "Top 1% visitor, some days for 9+ hours",
    description:
      "I go to my local Starbucks pretty much every day, sometimes for 9+ hours at a stretch, usually working alongside friends like Vihaan and Sarosh. I'm apparently a Top 1% visitor there.",
    icon: "starbucks",
    photos: [{ src: "/images/personal/starbucks.jpg", aspect: 0.9967 }],
  },
  {
    slug: "food",
    title: "Food",
    tagline: "Big foodie - I cook, and I'm always chasing new places",
    description:
      "I cook a fair amount myself, and I'm always looking for a new restaurant or cuisine to try. Always down to go out and eat somewhere new.",
    icon: "food",
    photos: [
      { src: "/images/personal/food/food-1.jpg", aspect: 0.75 },
      { src: "/images/personal/food/food-2.jpg", aspect: 0.75 },
      { src: "/images/personal/food/food-3.jpg", aspect: 0.75 },
      { src: "/images/personal/food/food-4.jpg", aspect: 0.75 },
      { src: "/images/personal/food/food-5.jpg", aspect: 0.75 },
      { src: "/images/personal/food/food-6.jpg", aspect: 1.3333 },
      { src: "/images/personal/food/food-7.jpg", aspect: 0.75 },
    ],
  },
  {
    slug: "anime",
    title: "Anime",
    tagline: "I've watched a lot so far",
    description:
      "I've watched a lot of anime so far: Naruto, Death Note, Seven Deadly Sins, Black Clover, Vinland Saga, Attack on Titan, Your Lie in April, I Want to Eat Your Pancreas, Demon Slayer, Your Name, A Silent Voice, Hunter x Hunter, Jujutsu Kaisen, and Boruto. Always open to recommendations.",
    icon: "anime",
    photos: [{ src: "/images/personal/anime.jpg", aspect: 0.6667 }],
  },
  {
    slug: "family",
    title: "Family",
    tagline: "One sister, a mom, and a dad",
    description:
      "I have one sister, a mom, and a dad. Growing up with them has been awesome, and I love my family.",
    icon: "family",
    photos: [{ src: "/images/personal/family.jpg", aspect: 1.356 }],
  },
  {
    slug: "oreo",
    title: "Oreo",
    tagline: "My dog, since my 10th birthday",
    description:
      "Oreo is my dog. I got him on my tenth birthday, and he's been an emotional support and a big part of my family ever since.",
    icon: "dog",
    photos: [{ src: "/images/personal/oreo.jpg", aspect: 0.6765 }],
  },
];
