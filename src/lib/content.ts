export const profile = {
  name: "Saicharan Chowdarapu",
  shortName: "Sai",
  location: "Atlanta, Georgia",
  email: "sai.chowdarapu09@gmail.com",
  linkedin: "https://www.linkedin.com/in/sai-chowdarapu/",
  github: "https://github.com/SaiC123",
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
      "A tutoring company I co-founded and help run, with about 100 students, a five-person tutor team, and 500+ sessions so far.",
    bullets: [
      "Co-founded and operate a tutoring business serving ~100 students with a 5-person tutor team, running 500+ sessions and generating $5,000+ in profit since 11th grade.",
      "Contributed to 200+ AP scores of 5 among students through structured academic support.",
      "Designed the business, marketing, and pricing strategy that drove client acquisition and revenue growth since launch.",
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
      "Developed a business proposal and secured a $3,500 grant for an entrepreneur in Bauchi State, Nigeria, alongside 78 hours of community service.",
    bullets: [
      "Collaborated with business and international development professionals to develop a business proposal, marketing strategy, branding, and startup budget for an aspiring entrepreneur in Bauchi State, Nigeria.",
      "Pitched to investors and professionals from Microsoft, Georgetown University, and AWS, securing a $3,500 grant for implementation, alongside 78 hours of community service.",
      "Continuing into a year-long International Leadership Program, developing business-oriented solutions to local problems in Nigeria.",
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
      "A 501(c)(3) nonprofit social media marketing agency I co-founded, revolutionizing digital marketing for local businesses.",
    bullets: [
      "Co-founded a 501(c)(3) nonprofit social media marketing agency serving local businesses and community organizations.",
      "Oversee operations, branding, and client acquisition while managing a creative and outreach team.",
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
      "Co-founded Pypath, expanding access to Python education for underserved communities, now running in schools across 9 countries.",
    bullets: [
      "Co-founded Pypath to expand access to Python and computer science education for underserved communities.",
      "Grew the program into schools across 9 countries.",
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
      "Co-founded a statewide student entrepreneurship competition helping student founders develop, validate, and pitch startup ideas.",
    bullets: [
      "Co-founded InnovateATL, a statewide student entrepreneurship competition helping student founders develop, validate, and pitch startup ideas.",
      "Lead operations, outreach, sponsorships, partnerships, and competition execution.",
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
      "Help The HomeMore Project, a nonprofit working to end homelessness, build the presentations and materials behind their grant applications.",
    bullets: [
      "Build presentations and supporting materials used in funding and grant applications.",
      "Support a nonprofit focused on ending homelessness through housing and outreach programs.",
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
      "Teller at Citizens Bank of Georgia, handling customer transactions and account services at a community bank.",
    bullets: [
      "Process customer deposits, withdrawals, and account transactions.",
      "Learned hands-on retail banking and customer service operations at a community bank.",
    ],
    skills: [
      "Customer service",
      "Financial transactions",
      "Retail banking operations",
      "Point-of-sale systems",
    ],
    image: "/images/citizens-bank.png",
    imageAlt: "Citizens Bank of Georgia logo",
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
      "Completed hands-on entrepreneurship and financial-analysis projects, building a financial forecasting model that improved profit-projection accuracy by 20%.",
    bullets: [
      "Completed 5+ hands-on projects in entrepreneurship and financial analysis, producing business models and presentations evaluated by finance professionals.",
      "Developed a comprehensive startup business plan with revenue projections, cost structures, and break-even analysis, presented to a panel of 6 executives.",
      "Built a financial forecasting model that improved profit projection accuracy by 20%, enhancing strategic decision-making in simulation exercises.",
    ],
    skills: ["Financial modeling", "Excel", "Business planning"],
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
      "Designed and lead the STEM curriculum for a robotics program serving 20+ preschool students.",
    bullets: [
      "Lead robotics education sessions for 20+ preschool students, introducing foundational STEM and problem-solving concepts through interactive projects.",
      "Designed age-appropriate lesson plans that built students' creativity, logical reasoning, and teamwork.",
      "Worked with instructors to streamline curriculum delivery, improving engagement across all participating classes.",
    ],
    skills: ["Curriculum design", "Team leadership", "Lesson planning"],
    image: "/images/trailblazer-robotics.png",
    imageAlt: "Trailblazer Robotics flame-and-gear logo",
  },
  {
    slug: "nit-research",
    role: "Researcher",
    org: "National Institute of Technology, Warangal",
    place: "Warangal, India",
    period: "Ongoing",
    summary: "Cybersecurity research.",
    bullets: ["Conducting cybersecurity research."],
    skills: ["Python", "Cybersecurity fundamentals", "Technical writing"],
    image: "/images/nit-research.jpeg",
    imageAlt: "National Institute of Technology, Warangal emblem",
  },
  {
    slug: "conduct-flow",
    role: "Creator",
    org: "Conduct Flow",
    place: "Remote",
    period: "Ongoing",
    summary: "An AI B2B SaaS project.",
    bullets: ["Building an AI-powered B2B SaaS product."],
    skills: ["Python", "Product development", "Figma"],
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
    summary: "College-level pianist, certified through the Guild and ABRSM.",
    bullets: ["College-level pianist.", "Certified through the Guild and ABRSM."],
    skills: ["Music theory", "Performance"],
    image: "/images/piano.jpg",
    imageAlt: "Sai performing at a piano recital",
  },
  {
    slug: "dance",
    role: "Dancer",
    org: "Shiv's Institute of Dance",
    place: "Atlanta, Georgia",
    period: "Ongoing",
    summary:
      "Bollywood dancer with 30+ performances, including background dancing at 3 concerts and teaching classes.",
    bullets: [
      "30+ performances.",
      "Background dancer at 3 concerts.",
      "Taught dance classes.",
    ],
    skills: ["Choreography", "Performance"],
    image: "/images/dance.jpeg",
    imageAlt: "Shiv's Institute of Dance logo",
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
    | "valorant"
    | "fortnite"
    | "naruto"
    | "himym"
    | "scouts"
    | "friends"
    | "concerts"
    | "car"
    | "starbucks";
  /** Real photos for this tile. Empty means it's using the icon treatment for now. */
  photos: string[];
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
      "/images/backdrop/piano/piano-1.jpg",
      "/images/backdrop/piano/piano-2.jpg",
      "/images/backdrop/piano/piano-3.jpg",
      "/images/backdrop/piano/piano-4.jpg",
      "/images/backdrop/piano/piano-5.jpg",
      "/images/backdrop/piano/piano-6.jpg",
    ],
  },
  {
    slug: "dance",
    title: "Dance",
    tagline: "Bollywood dancer, 30+ performances",
    description:
      "Bollywood dance has been a constant for me, 30+ performances, background dancing at three concerts, and teaching classes on the side. It's the most fun way I know to work as a team.",
    icon: "dance",
    photos: [
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
  },
  {
    slug: "valorant",
    title: "Valorant",
    tagline: "Tactical FPS, my main competitive game",
    description:
      "My go-to when I want something competitive and locked-in. Photos coming soon.",
    icon: "valorant",
    photos: [],
  },
  {
    slug: "fortnite",
    title: "Fortnite",
    tagline: "The more casual, chaotic pick",
    description:
      "Less serious than Valorant, more about squading up with friends. Photos coming soon.",
    icon: "fortnite",
    photos: [],
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
    photos: ["/images/personal/scouts.jpg"],
  },
  {
    slug: "friends",
    title: "Friends",
    tagline: "A lot of my free time is just this",
    description:
      "Most of my time outside everything else goes to this: going out to eat, hanging out, no real agenda. I'll write more here soon.",
    icon: "friends",
    photos: [
      "/images/personal/friends/friends-1.jpg",
      "/images/personal/friends/friends-2.jpg",
      "/images/personal/friends/friends-3.jpg",
      "/images/personal/friends/friends-4.jpg",
      "/images/personal/friends/friends-5.jpg",
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
      "/images/personal/concerts/concerts-1.jpg",
      "/images/personal/concerts/concerts-2.jpg",
      "/images/personal/concerts/concerts-3.jpg",
      "/images/personal/concerts/concerts-4.jpg",
      "/images/personal/concerts/concerts-5.jpg",
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
      "/images/personal/car/car-1.jpg",
      "/images/personal/car/car-2.jpg",
      "/images/personal/car/car-3.jpg",
    ],
  },
  {
    slug: "starbucks",
    title: "Starbucks",
    tagline: "Top 1% visitor, some days for 9+ hours",
    description:
      "I go to my local Starbucks pretty much every day, sometimes for 9+ hours at a stretch, usually working alongside friends like Vihaan and Sarosh. I'm apparently a Top 1% visitor there.",
    icon: "starbucks",
    photos: ["/images/personal/starbucks.jpg"],
  },
];
