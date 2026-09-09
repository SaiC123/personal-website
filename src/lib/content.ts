export const profile = {
  name: "Saicharan Chowdarapu",
  shortName: "Sai",
  location: "Atlanta, Georgia",
  email: "sai.chowdarapu09@gmail.com",
  linkedin: "https://www.linkedin.com/in/sai-chowdarapu/",
  github: "https://github.com/SaiC123",
  bio: "Current student taking college-level coursework at Georgia Tech, Georgia State, and Lanier Technical College. Most of what I do outside class is running things, and figuring out the financial and operational side that keeps each one working.",
  focusNote:
    "Studying Computer Science and Business, with a running interest in how the two fit together.",
};

export const facts = [
  { k: "AP courses", v: "20+" },
  { k: "Dual enrollment", v: "10+" },
  { k: "Coursework", v: "Georgia Tech · Georgia State · Lanier Tech (4.0)" },
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
  image: string;
  imageAlt: string;
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
    image: "/images/citizens-bank.png",
    imageAlt: "Citizens Bank of Georgia logo",
  },
];

// Everything else: real involvement, no full card yet (either not requested
// as featured, or, for Home More Project and the bank job, still missing
// real dates since neither is on LinkedIn).
export const alsoInvolvedIn: { name: string; category: string; note?: string }[] = [
  {
    name: "DocuBridge (HUVTSP)",
    category: "Business",
    note: "Business development internship, Harvard summer program",
  },
  {
    name: "NRIVA Business & Finance Internship",
    category: "Business",
    note: "Financial analyst internship",
  },
  { name: "AI & ML Club", category: "Tech", note: "Co-President" },
  {
    name: "Trailblazer Robotics",
    category: "Tech",
    note: "Program lead, STEM for preschoolers",
  },
  { name: "NIT Research", category: "Research", note: "Cybersecurity research" },
  { name: "Conduct Flow", category: "Project", note: "AI B2B SaaS project" },
  { name: "FBLA", category: "Competition", note: "3x state placement" },
  {
    name: "CafCap (TiE Atlanta)",
    category: "Competition",
    note: "Co-creator, pitch showcase",
  },
  { name: "Piano", category: "Arts", note: "Guild and ABRSM certified" },
  {
    name: "Dance",
    category: "Arts",
    note: "Bollywood dancer, 30+ performances, background dancer at 3 concerts, taught classes",
  },
];

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

export const toolkit = {
  technical: ["Python", "Java", "Data analysis", "AI / ML fundamentals", "Canva"],
  business: [
    "Business plan development",
    "Financial forecasting & modeling",
    "Market & competitor analysis",
    "Pricing & growth strategy",
    "Grant writing & fundraising",
    "SEO & growth marketing",
  ],
  leadership: [
    "Team & curriculum leadership",
    "Investor pitching",
    "Client acquisition",
    "Nonprofit operations",
    "Public speaking & presentations",
    "Community outreach",
  ],
};

export const otherActivities = [
  { label: "Martial arts", value: "3rd-degree black belt" },
  { label: "Music", value: "College-level pianist (Guild, ABRSM)" },
  { label: "Scouting", value: "Life Scout" },
];
