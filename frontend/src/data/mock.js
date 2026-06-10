// Mock data for Shramjivi website
// Source: Annual Report 2025-26

export const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_flamboyant-neumann-7/artifacts/e4rg8y82_final%20shramjivi%20logo.png";

export const SITE = {
  name: "Shramjivi",
  fullName: "Shramjivi Mahila Kalyan Trust",
  tagline: "Rooted in Legacy. Moving Towards Scalable Impact.",
  estd: 1940,
  location: "Surat, Gujarat, India",
  email: "info@shramjivi.org",
  website: "www.shramjivi.org",
  instagram: "@shramjivi_foundation",
  address:
    "Shramjivi Sevalaya Building, Opp. Railway Station Road, Sufi Baug, Near Hilton Garden Inn, Railway Station Area, Varachha, Surat \u2013 395003, Gujarat, India",
  bank: {
    accountName: "Shramjivi Mahila Kalyan Trust",
    bankName: "Bank Of Baroda",
    accountNumber: "07430100006327",
    ifsc: "BARB0SUFIBA",
    upi: "shra7698327@barodampay",
    note: "(Fifth character is zero)",
  },
};

export const HERO_STATS = [
  { value: "85+", label: "Years of Service" },
  { value: "58,000+", label: "Lives impacted in 2025\u201326" },
  { value: "3,260+", label: "Women reached through counseling" },
  { value: "2,000+", label: "Women trained in livelihood skills" },
];

export const FOCUS_AREAS = [
  {
    id: "health",
    title: "Health & Well-Being",
    subtitle: "HIV Prevention & Targeted Intervention",
    description:
      "Targeted HIV prevention aligned with NACP-V, focused on high-risk and vulnerable populations across Surat\u2014migrant workers and HRG communities.",
    icon: "HeartPulse",
    image:
      "https://images.unsplash.com/photo-1648964388258-e71b58683ed0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGhlYWx0aGNhcmV8ZW58MHx8fHwxNzgxMDIyOTM4fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "women",
    title: "Women Empowerment & Support",
    subtitle: "Counseling, Legal Aid & Crisis Support",
    description:
      "Counseling services for women facing domestic, social, and personal challenges \u2014 conflict resolution, legal guidance, and continuous follow-up.",
    icon: "Users",
    image:
      "https://images.unsplash.com/photo-1636986905406-758b0e280f49?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwzfHx3b21lbiUyMGVtcG93ZXJtZW50fGVufDB8fHx8MTc4MTAyMjk0OHww&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "livelihood",
    title: "Livelihood & Skill Development",
    subtitle: "Sewing & Tailoring Training",
    description:
      "A practical, livelihood-oriented sewing training program enabling women to earn independently \u2014 most begin earning even before completing the course.",
    icon: "Scissors",
    image:
      "https://images.pexels.com/photos/27872045/pexels-photo-27872045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const MILESTONES = [
  { year: "1940", text: "Shramjivi established \u2014 labour & trade union movement" },
  { year: "1981", text: "Harihar Thakor Smarak Trust established for community outreach" },
  { year: "1994", text: "Shramjivi Mahila Kalyan Trust established for women empowerment" },
  { year: "1997", text: "Toolkit assistance to thousands under Manav Kalyan Yojna" },
  { year: "1998", text: "Counseling services started under Government-supported initiative" },
  { year: "2000", text: "Sewing Training Program started" },
  { year: "2001", text: "Street Children Outreach & HIV Awareness Program started" },
  { year: "2002", text: "HIV TI \u2014 Migrant Program launched" },
  { year: "2005", text: "Second counseling center started" },
  { year: "2006", text: "National Child Labour Program launched (Phase-I, 3 schools)" },
  { year: "2007", text: "Computer Training Program started" },
  { year: "2008", text: "HIV TI \u2014 MSM Program started" },
  { year: "2017", text: "National Child Labour Program (Phase-II) \u2014 7 schools under Shramjivi" },
  { year: "2026", text: "Local venue and community partner for ICMR-NITVAR IBBS-HRG project, Surat" },
  { year: "2026+", text: "Digital Saheli Initiative planned" },
];

export const HEALTH_IMPACT = {
  total: "58,000+",
  migrant: [
    { label: "Migrants Reached (IPC)", value: "56,150" },
    { label: "Target Achievement", value: "108%" },
    { label: "Registered Beneficiaries", value: "10,019" },
    { label: "Outreach Sessions", value: "2,641" },
    { label: "Counseling Sessions", value: "5,807" },
    { label: "Clinic / Health Camp Visits", value: "5,572" },
    { label: "HIV Tests Conducted", value: "4,179" },
    { label: "Health Camps Conducted", value: "242" },
    { label: "STI Cases Treated", value: "109" },
    { label: "HIV Positive Linked to ART", value: "5 / 5 (100%)" },
  ],
  msm: [
    { label: "Active HRG Population", value: "1,354+" },
    { label: "Registered Beneficiaries", value: "1,888" },
    { label: "Counseling Sessions", value: "4,169" },
    { label: "Active Population", value: "1,411" },
    { label: "HIV Tests Conducted", value: "2,571" },
    { label: "Condoms Distributed", value: "2,37,169" },
    { label: "Lubes Distributed", value: "28,724" },
    { label: "HRGs Screened for TB", value: "4,768" },
    { label: "HRGs Treated for TB", value: "56" },
    { label: "HIV Positive Linked to ART", value: "2 / 2" },
  ],
};

export const WOMEN_IMPACT = [
  { label: "Women Supported at the Centers", value: "1,050+" },
  { label: "Counseling Cases Handled", value: "720+" },
  { label: "Beneficiaries via Field Visits", value: "2,210+" },
  { label: "Other Support Services", value: "330+" },
  { label: "Total Women Reached (2025\u201326)", value: "3,260+" },
];

export const LIVELIHOOD_IMPACT = [
  { label: "Women Enrolled Since Inception", value: "2,000+" },
  { label: "Enrolled (2025\u201326)", value: "12" },
  { label: "Successfully Completed", value: "7" },
  { label: "Currently Under Training", value: "5" },
];

export const IMPACT_STORIES = [
  {
    name: "Kiran",
    program: "Health & Well-Being",
    title: "From Fear and Isolation to Treatment and Stability",
    excerpt:
      "A migrant worker living alone in Surat, Kiran avoided seeking help due to fear and stigma. Through field outreach, counseling, and ART linkage, he found both medical and emotional support.",
  },
  {
    name: "Imran",
    program: "Health & Well-Being",
    title: "Creating Awareness Through Peer Leadership",
    excerpt:
      "A young daily-wage worker with limited awareness about HIV. After participating in awareness sessions, he adopted safer practices and encouraged friends and co-workers to do the same.",
  },
  {
    name: "Nainya",
    program: "Women Empowerment",
    title: "Restored Her Choice and Protection",
    excerpt:
      "Shramjivi facilitated counseling and legal proceedings that enabled Nainya to safely return to Nari Suraksha Gruh after her divorce \u2014 ensuring her dignity and continued support.",
  },
  {
    name: "Lata Ben",
    program: "Women Empowerment",
    title: "From Crisis to Stability and Purpose",
    excerpt:
      "Approached Shramjivi during a difficult phase, secured legal aid and monthly maintenance for her daughter. Today she has served the Trust for over 25 years \u2014 from seeker to leader.",
  },
  {
    name: "Sunita Ben",
    program: "Livelihood",
    title: "A New Beginning Through Skills",
    excerpt:
      "Sole earner of her family, Sunita joined the sewing program and gradually built a steady income through garment making \u2014 supporting her household independently.",
  },
  {
    name: "Bhavini Joshi",
    program: "Legacy \u2014 Computer Training",
    title: "From Learner to Leader",
    excerpt:
      "Joined Shramjivi\u2019s computer training program to learn basic digital skills. Today she leads the counseling support team at Shramjivi Sevalaya, Surat.",
  },
];

export const LEGACY_PROGRAMS = [
  {
    title: "Computer Training Program",
    period: "2008 \u2014 2018",
    body:
      "Short-term courses in Windows, MS Office, Tally, CorelDRAW, Photoshop and DTP at highly subsidized fees. 512 students trained across various courses, primarily benefiting women.",
    highlight: "512 students trained",
  },
  {
    title: "National Child Labour Program",
    period: "2006\u20132009 & 2017\u20132021",
    body:
      "Implemented across 7 schools in Kosad, Shriram Nagar, Patidar and Chhaprabhatha. Children received uniforms, books, midday meals (Akshay Patra) and financial stipends.",
    highlight: "260+ children mainstreamed into formal education",
  },
  {
    title: "Street Children Outreach & HIV Awareness",
    period: "2001 onwards",
    body:
      "Reached street-connected children at railway stations, footpaths, temples and markets across Surat \u2014 awareness, day-care centers, health check-ups and rehabilitation through partner organizations.",
    highlight: "2,900+ street children reached",
  },
];

export const LEADERSHIP = [
  { name: "Mamta Desai", role: "Trustee & President" },
  { name: "Mohanbhai Dhabuwala", role: "Trustee & Secretary" },
  { name: "Yuti Desai", role: "Trustee \u2014 Strategic Initiatives" },
  { name: "Shrungi Desai", role: "Trustee & Pro Bono Advocate" },
];

export const TEAM = [
  { name: "Bhupendra Borad", role: "Project Manager" },
  { name: "Hitesh Chaudhari", role: "Project Manager" },
  { name: "Rajesh Purohit", role: "Monitoring & Evaluation" },
  { name: "Shailesh Vekariya", role: "Monitoring & Evaluation" },
  { name: "Neha Patel", role: "Monitoring & Evaluation" },
  { name: "Suananda Chaudhari", role: "Program Counsellor" },
  { name: "Ajay Chaudhary", role: "Program Counsellor" },
  { name: "Bhaviniben Joshi", role: "Social Worker" },
  { name: "Sunitaben Patel", role: "Social Worker" },
  { name: "Gayatriben Bhavsar", role: "Vocational Instructor" },
  { name: "Aashishkumar Patel", role: "Treasurer" },
  { name: "Bharatbhai Patel", role: "Clerk" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Shramjivi Mahila Kalyan Trust has consistently worked with a true spirit of service, resilience, and women\u2019s empowerment. Their dedication towards social and economic upliftment is truly inspiring.",
    name: "Subhash Patel",
    title: "Cluster Prevention Officer, DISHA DAPCU, Surat",
  },
  {
    quote:
      "Their dedicated outreach, culturally sensitive approach, and strong support in HIV prevention, testing and treatment linkages have made them a valuable public health partner in the region.",
    name: "Irshad Shaikh",
    title: "Cluster Prevention Officer, DISHA DAPCU, Surat",
  },
  {
    quote:
      "Their willingness to offer the premises as a goodwill community support facility reflects their strong commitment towards public health and smooth implementation of our outreach activities in Surat.",
    name: "Aditi Buchake",
    title: "Research Officer-Field, ICMR-NITVAR, Pune",
  },
  {
    quote:
      "Joining the sewing training program at Shramjivi gave me confidence, skills, and a new sense of independence. I am grateful to the organization for empowering women like me.",
    name: "Kashish Kazi",
    title: "Sewing Program Student",
  },
];

export const FUTURE_SCOPE = [
  {
    title: "Digital Saheli",
    tag: "Planned 2026+",
    description:
      "A 3-month community learning program training women in smartphones, UPI, government portals (DigiLocker, Umang, e-Shram) and online safety. Each trained woman becomes a peer resource in her neighbourhood.",
  },
  {
    title: "Community Daycare & Child Safety",
    tag: "Planned",
    description:
      "A safe, supervised environment for children of labour-class working parents \u2014 within Shramjivi Sevalaya \u2014 protecting against abuse, neglect and child labour while enabling dignified livelihoods.",
  },
  {
    title: "Two New FSW TI Projects",
    tag: "2026\u201327, upon NACP approval",
    description:
      "Expanding HIV prevention work under NACP with two new Targeted Intervention projects focused on Female Sex Workers \u2014 coordinated from Shramjivi Sevalaya, scaling impact across South Gujarat.",
  },
];

export const DONATION_PRESETS = [500, 1000, 2500, 5000, 10000, 25000];

export const PARTNERS = [
  "National AIDS Control Organisation",
  "Gujarat State AIDS Control Society",
  "Surat Municipal Corporation",
  "Dept. of Women & Child Development, Gujarat",
  "ICMR-NITVAR, Pune",
  "Surat Labour Department",
  "Akshay Patra Foundation",
  "Madhyan Bhojan Yojana",
];

export const GALLERY = [
  "https://images.pexels.com/photos/37495850/pexels-photo-37495850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.unsplash.com/flagged/photo-1577604981316-298e453a19dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGNvbW11bml0eXxlbnwwfHx8fDE3ODEwMjI5MzJ8MA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1601689892697-b64daa00ff6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHw0fHxJbmRpYSUyMGNvbW11bml0eXxlbnwwfHx8fDE3ODEwMjI5MzJ8MA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1627895139551-1329f16953cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwyfHxJbmRpYSUyMGNvbW11bml0eXxlbnwwfHx8fDE3ODEwMjI5MzJ8MA&ixlib=rb-4.1.0&q=85",
  "https://images.pexels.com/photos/17293003/pexels-photo-17293003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.unsplash.com/photo-1603185030522-05d4497bb180?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGNoaWxkcmVufGVufDB8fHx8MTc4MTAyMjk0OHww&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwyfHxJbmRpYSUyMGNoaWxkcmVufGVufDB8fHx8MTc4MTAyMjk0OHww&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1466027397211-20d0f2449a3f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxzZXdpbmclMjBtYWNoaW5lfGVufDB8fHx8MTc4MTAyMjk0M3ww&ixlib=rb-4.1.0&q=85",
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1636986905406-758b0e280f49?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwzfHx3b21lbiUyMGVtcG93ZXJtZW50fGVufDB8fHx8MTc4MTAyMjk0OHww&ixlib=rb-4.1.0&q=85";
