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
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=900&h=900&fit=crop&q=70&auto=format",
    imageAlt: "Close-up of piano keys",
    placeholderImage: true,
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
]);

export const awards = [
  { place: "1st", event: "TSA National Leadership Conference", detail: "Software Development" },
  { place: "2nd", event: "FBLA State Leadership Conference", detail: "Intro to Social Media Strategy" },
  { place: "3rd", event: "FBLA State Leadership Conference", detail: "Data Analysis" },
  { place: "3rd", event: "FBLA State Leadership Conference", detail: "Community Service Project" },
  { place: "Top 1%", event: "Blue Ocean", detail: "MirrorMind" },
];

// Wilderness First Aid (exp. Mar 2026) and Adult/Pediatric First Aid/CPR/AED
// (exp. Jan 2026) are left off since both have since expired. Say if you've
// renewed either and I'll add it back.
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
