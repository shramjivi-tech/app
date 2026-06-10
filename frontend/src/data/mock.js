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
  phone: "+91 96387 44958",
  phoneRaw: "+919638744958",
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
    image:
      "https://images.unsplash.com/photo-1648964388258-e71b58683ed0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGhlYWx0aGNhcmV8ZW58MHx8fHwxNzgxMDIyOTM4fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Imran",
    program: "Health & Well-Being",
    title: "Creating Awareness Through Peer Leadership",
    excerpt:
      "A young daily-wage worker with limited awareness about HIV. After participating in awareness sessions, he adopted safer practices and encouraged friends and co-workers to do the same.",
    image:
      "https://images.unsplash.com/photo-1603185030522-05d4497bb180?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGNoaWxkcmVufGVufDB8fHx8MTc4MTAyMjk0OHww&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Nainya",
    program: "Women Empowerment",
    title: "Restored Her Choice and Protection",
    excerpt:
      "Shramjivi facilitated counseling and legal proceedings that enabled Nainya to safely return to Nari Suraksha Gruh after her divorce \u2014 ensuring her dignity and continued support.",
    image:
      "https://images.unsplash.com/flagged/photo-1577604981316-298e453a19dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGNvbW11bml0eXxlbnwwfHx8fDE3ODEwMjI5MzJ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Lata Ben",
    program: "Women Empowerment",
    title: "From Crisis to Stability and Purpose",
    excerpt:
      "Approached Shramjivi during a difficult phase, secured legal aid and monthly maintenance for her daughter. Today she has served the Trust for over 25 years \u2014 from seeker to leader.",
    image:
      "https://images.unsplash.com/photo-1636986905406-758b0e280f49?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwzfHx3b21lbiUyMGVtcG93ZXJtZW50fGVufDB8fHx8MTc4MTAyMjk0OHww&ixlib=rb-4.1.0&q=85",
  },
  {
    name: "Sunita Ben",
    program: "Livelihood",
    title: "A New Beginning Through Skills",
    excerpt:
      "Sole earner of her family, Sunita joined the sewing program and gradually built a steady income through garment making \u2014 supporting her household independently.",
    image:
      "https://images.pexels.com/photos/27872045/pexels-photo-27872045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Bhavini Joshi",
    program: "Legacy \u2014 Computer Training",
    title: "From Learner to Leader",
    excerpt:
      "Joined Shramjivi\u2019s computer training program to learn basic digital skills. Today she leads the counseling support team at Shramjivi Sevalaya, Surat.",
    image:
      "https://images.unsplash.com/photo-1643199187247-b3b6009bf0bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwyfHxjb21wdXRlciUyMHRyYWluaW5nJTIwY2xhc3N8ZW58MHx8fHwxNzgxMDgxMjMzfDA&ixlib=rb-4.1.0&q=85",
  },
];

export const LEGACY_PROGRAMS = [
  {
    title: "Computer Training Program",
    period: "2008 \u2014 2018",
    body:
      "Short-term courses in Windows, MS Office, Tally, CorelDRAW, Photoshop and DTP at highly subsidized fees. 512 students trained across various courses, primarily benefiting women.",
    highlight: "512 students trained",
    image:
      "https://images.unsplash.com/photo-1643199187247-b3b6009bf0bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwyfHxjb21wdXRlciUyMHRyYWluaW5nJTIwY2xhc3N8ZW58MHx8fHwxNzgxMDgxMjMzfDA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "National Child Labour Program",
    period: "2006\u20132009 & 2017\u20132021",
    body:
      "Implemented across 7 schools in Kosad, Shriram Nagar, Patidar and Chhaprabhatha. Children received uniforms, books, midday meals (Akshay Patra) and financial stipends.",
    highlight: "260+ children mainstreamed into formal education",
    image:
      "https://images.pexels.com/photos/20556421/pexels-photo-20556421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Street Children Outreach & HIV Awareness",
    period: "2001 onwards",
    body:
      "Reached street-connected children at railway stations, footpaths, temples and markets across Surat \u2014 awareness, day-care centers, health check-ups and rehabilitation through partner organizations.",
    highlight: "2,900+ street children reached",
    image:
      "https://images.pexels.com/photos/15119089/pexels-photo-15119089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const AWARDS = [
  {
    title: "Recognition by NACO",
    year: "2024",
    body:
      "Acknowledged for sustained, community-driven HIV prevention work under NACP among migrant and high-risk populations across Surat.",
    image:
      "https://images.unsplash.com/photo-1773212902273-278c261a4c98?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxJbmRpYW4lMjBhd2FyZCUyMGNlcmVtb255fGVufDB8fHx8MTc4MTA4MTIyNnww&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Community Partner of the Year",
    year: "2023",
    body:
      "Honoured by Surat District AIDS Prevention & Control Unit (DAPCU) for outstanding collaboration and grassroots reach.",
    image:
      "https://images.unsplash.com/photo-1764874299025-d8b2251f307d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxJbmRpYW4lMjBhd2FyZCUyMGNlcmVtb255fGVufDB8fHx8MTc4MTA4MTIyNnww&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Women Empowerment Excellence",
    year: "2022",
    body:
      "Felicitated for over 25 years of consistent women empowerment programming, counseling, legal aid, and livelihood training in South Gujarat.",
    image:
      "https://images.unsplash.com/photo-1764408721535-2dcb912db83e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwzfHxJbmRpYW4lMjBhd2FyZCUyMGNlcmVtb255fGVufDB8fHx8MTc4MTA4MTIyNnww&ixlib=rb-4.1.0&q=85",
  },
];

export const LEADERSHIP = [
  {
    name: "Mamta Desai",
    role: "Trustee & President",
    image: "",
  },
  {
    name: "Mohanbhai Dhabuwala",
    role: "Trustee & Secretary",
    image: "",
  },
  {
    name: "Yuti Desai",
    role: "Trustee \u2014 Strategic Initiatives",
    image: "",
  },
  {
    name: "Shrungi Desai",
    role: "Trustee & Pro Bono Advocate",
    image: "",
  },
];

export const TEAM_GROUPS = [
  {
    label: "Project Management & Monitoring",
    members: [
      { name: "Bhupendra Borad", role: "Project Manager" },
      { name: "Hitesh Chaudhari", role: "Project Manager" },
      { name: "Rajesh Purohit", role: "M&E / Accountant" },
      { name: "Shailesh Vekariya", role: "M&E / Accountant" },
      { name: "Neha Patel", role: "M&E / Accountant" },
    ],
  },
  {
    label: "Counseling & Social Work",
    members: [
      { name: "Suananda Chaudhari", role: "Program Counsellor" },
      { name: "Ajay Chaudhary", role: "Program Counsellor" },
      { name: "Bhaviniben Joshi", role: "Social Worker" },
      { name: "Sunitaben Patel", role: "Social Worker" },
      { name: "Meenaben Patel", role: "Assistant Social Worker" },
      { name: "Kanishaben Barot", role: "Assistant Social Worker" },
      { name: "Gayatriben Bhavsar", role: "Vocational Instructor" },
    ],
  },
  {
    label: "Field Outreach",
    members: [
      { name: "Rabindra Rout", role: "Outreach Worker" },
      { name: "Navin Gajjar", role: "Outreach Worker" },
      { name: "Brijesh Solanki", role: "Outreach Worker" },
      { name: "Hillol Mallick", role: "Outreach Worker" },
      { name: "Digamber Sahoo", role: "Outreach Worker" },
      { name: "Ugrasen Pradhan", role: "Outreach Worker" },
    ],
  },
  {
    label: "Administration & Support",
    members: [
      { name: "Seemaben Jariwala", role: "Computer Operator" },
      { name: "Dikshitaben Patel", role: "Computer Operator" },
      { name: "Aashishkumar Patel", role: "Treasurer" },
      { name: "Bharatbhai Patel", role: "Clerk" },
      { name: "Lataben Khandekar", role: "Peon" },
      { name: "Anil Patel", role: "Peon" },
    ],
  },
  {
    label: "Peer Educators",
    members: [
      { name: "Ramkrishna Maharana", role: "Peer Educator" },
      { name: "Gaur Hari Bisoi", role: "Peer Educator" },
      { name: "Ratikant", role: "Peer Educator" },
      { name: "Uttam Rath", role: "Peer Educator" },
      { name: "Jitu Padhiyari", role: "Peer Educator" },
      { name: "Dusmant Jaina", role: "Peer Educator" },
      { name: "Fakir Imran Shah", role: "Peer Educator" },
      { name: "Harinarayan Saini", role: "Peer Educator" },
      { name: "Faruk Shah", role: "Peer Educator" },
      { name: "Chandra Sen", role: "Peer Educator" },
      { name: "Charandeep Sinh", role: "Peer Educator" },
      { name: "Shrikant Sahoo", role: "Peer Educator" },
      { name: "Sarafat Hussen Ansari", role: "Peer Educator" },
      { name: "Khalil Shah", role: "Peer Educator" },
      { name: "Khursid Khan", role: "Peer Educator" },
      { name: "Dhanjay Rout", role: "Peer Educator" },
      { name: "Mukesh Rashiya", role: "Peer Educator" },
      { name: "Ashish Vekariya", role: "Peer Educator" },
    ],
  },
];

// Keep TEAM as flat list for any existing references
export const TEAM = TEAM_GROUPS.flatMap((g) => g.members);

export const TESTIMONIALS = [
  {
    quote:
      "Shramjivi Mahila Kalyan Trust has consistently worked with a true spirit of service, resilience, and women\u2019s empowerment. Their dedication towards social and economic upliftment is truly inspiring.",
    name: "Subhash Patel",
    title: "Cluster Prevention Officer, DISHA DAPCU, Surat",
    image:
      "https://images.pexels.com/photos/7580837/pexels-photo-7580837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    quote:
      "Their dedicated outreach, culturally sensitive approach, and strong support in HIV prevention, testing and treatment linkages have made them a valuable public health partner in the region.",
    name: "Irshad Shaikh",
    title: "Cluster Prevention Officer, DISHA DAPCU, Surat",
    image:
      "https://images.pexels.com/photos/7580940/pexels-photo-7580940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    quote:
      "Their willingness to offer the premises as a goodwill community support facility reflects their strong commitment towards public health and smooth implementation of our outreach activities in Surat.",
    name: "Aditi Buchake",
    title: "Research Officer-Field, ICMR-NITVAR, Pune",
    image:
      "https://images.pexels.com/photos/34061448/pexels-photo-34061448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    quote:
      "Joining the sewing training program at Shramjivi gave me confidence, skills, and a new sense of independence. I am grateful to the organization for empowering women like me.",
    name: "Kashish Kazi",
    title: "Sewing Program Student",
    image:
      "https://images.pexels.com/photos/37145167/pexels-photo-37145167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
  { name: "National AIDS Control Organisation", short: "NACO", color: "#1f5b8a" },
  { name: "Gujarat State AIDS Control Society", short: "GSACS", color: "#0f6f3e" },
  { name: "Surat Municipal Corporation", short: "SMC", color: "#7a3b14" },
  { name: "Dept. of Women & Child Development, Gujarat", short: "WCD Gujarat", color: "#8a2858" },
  { name: "ICMR-NITVAR, Pune", short: "ICMR-NITVAR", color: "#1c3a5e" },
  { name: "Surat Labour Department", short: "Labour Dept.", color: "#4f3b0a" },
  { name: "Akshay Patra Foundation", short: "Akshay Patra", color: "#a14a17" },
  { name: "DISHA DAPCU, Surat", short: "DISHA DAPCU", color: "#1b5d56" },
];

export const FUNDING_FLOW = {
  totalNote: "Indicative split of how each current program is funded.",
  programs: [
    {
      name: "Health & Well-Being",
      sub: "HIV Targeted Interventions (NACP-V)",
      segments: [
        { label: "Government Grant", value: 80, color: "#336d2a" },
        { label: "Organizational Support", value: 20, color: "#ea8a2e" },
      ],
    },
    {
      name: "Women Empowerment & Support",
      sub: "Counseling, Legal Aid, Crisis Support",
      segments: [
        { label: "Mandatory Organizational Contribution", value: 60, color: "#ea8a2e" },
        { label: "Additional Organizational Support", value: 40, color: "#c97719" },
      ],
    },
    {
      name: "Livelihood & Skill Development",
      sub: "Sewing & Tailoring Training",
      segments: [
        { label: "Organizational Support", value: 100, color: "#ea8a2e" },
      ],
    },
    {
      name: "Other Management & Maintenance",
      sub: "Sevalaya operations & overheads",
      segments: [
        { label: "Organizational Support", value: 100, color: "#ea8a2e" },
      ],
    },
  ],
};

export const QR_CODE_URL =
  "https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=8&color=336d2a&bgcolor=ffffff&data=" +
  encodeURIComponent(
    "upi://pay?pa=shra7698327@barodampay&pn=Shramjivi%20Mahila%20Kalyan%20Trust&cu=INR"
  );

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
