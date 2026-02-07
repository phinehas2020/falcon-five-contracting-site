export type ServiceItem = {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  emergencyChecklist: string[];
  commonProblems: string[];
  relatedKeywords: string[];
  faqs: Array<{ question: string; answer: string }>;
  image?: string;
};

export type LocationItem = {
  slug: string;
  city: string;
  region: string;
  summary: string;
  neighborhoods: string[];
  nearby: string[];
};

export type BlogPostItem = {
  slug: string;
  title: string;
  description: string;
  targetKeyword: string;
  outline: string[];
};

const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "(254) 555-0105";
const phoneDigits = phoneDisplay.replace(/[^+\d]/g, "");

export const siteConfig = {
  businessName: "Falcon Five",
  legalName: "Falcon Five Contracting",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.falconfivecontracting.com",
  phoneDisplay,
  phoneHref: process.env.NEXT_PUBLIC_PHONE_HREF ?? `tel:${phoneDigits}`,
  email: process.env.NEXT_PUBLIC_EMAIL ?? "dispatch@falconfivecontracting.com",
  emergencyResponse: "24/7 emergency dispatch",
  primaryAddress: {
    streetAddress: process.env.NEXT_PUBLIC_STREET ?? "123 Main St",
    addressLocality: process.env.NEXT_PUBLIC_CITY ?? "Waco",
    addressRegion: process.env.NEXT_PUBLIC_REGION ?? "TX",
    postalCode: process.env.NEXT_PUBLIC_ZIP ?? "76710",
    addressCountry: "US",
  },
  geo: {
    latitude: 31.5493,
    longitude: -97.1467,
  },
  areas: [
    "Waco",
    "Hewitt",
    "Bellmead",
    "Belmade",
    "Woodway",
    "Robinson",
    "Lorena",
    "China Spring",
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const services: ServiceItem[] = [
  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    shortDescription:
      "24/7 leak, burst pipe, no-water, and overflow response across Greater Waco.",
    fullDescription:
      "When water is moving where it should not, Falcon Five responds fast with emergency plumbing diagnostics and repair. We isolate the issue, protect the structure, and repair the root cause so your home or building can recover quickly.",
    emergencyChecklist: [
      "Shut off the main water valve if flooding is active.",
      "Turn off power to affected zones if water is near outlets.",
      "Move valuables and electronics away from standing water.",
      "Call Falcon Five for immediate dispatch and containment.",
    ],
    commonProblems: [
      "Burst or frozen pipe repairs",
      "Overflowing toilets and blocked main lines",
      "Water heater leaks and emergency replacement",
      "Slab leak identification and isolation",
    ],
    relatedKeywords: [
      "emergency plumber waco tx",
      "24 hour plumber hewitt",
      "burst pipe repair bellmead",
    ],
    faqs: [
      {
        question: "How fast can Falcon Five arrive for emergency plumbing?",
        answer:
          "Dispatch is prioritized for active leaks and major backups. We triage your call immediately and route the nearest available technician.",
      },
      {
        question: "Do you handle residential and commercial emergencies?",
        answer:
          "Yes. Falcon Five handles both home and light-commercial plumbing emergencies throughout the Waco metro area.",
      },
      {
        question: "Can you help with documentation?",
        answer:
          "Yes. We document issue origin, mitigation steps, and repair notes so your adjuster has clear records.",
      },
    ],
    image: "/images/service-plumbing.png",
  },
  {
    slug: "air-conditioning-repair",
    name: "Air Conditioning Repair",
    shortDescription:
      "Emergency and same-day AC repair for homes and businesses in Central Texas heat.",
    fullDescription:
      "Falcon Five provides troubleshooting, repair, and system stabilization for AC failures. We identify the failure point, explain options clearly, and restore cooling with a long-term reliability focus.",
    emergencyChecklist: [
      "Check thermostat power and set mode to cool.",
      "Replace clogged return filter if visibly dirty.",
      "Clear debris around the outdoor condenser unit.",
      "Call Falcon Five if the system is blowing warm air or short-cycling.",
    ],
    commonProblems: [
      "Warm air from vents",
      "Frozen evaporator coils",
      "Capacitor and contactor failures",
      "Refrigerant leak diagnostics",
    ],
    relatedKeywords: [
      "ac repair waco tx",
      "emergency ac repair hewitt tx",
      "hvac service bellmead",
    ],
    faqs: [
      {
        question: "Do you offer emergency AC service after hours?",
        answer:
          "Yes. We provide after-hours cooling response for urgent failures when safety or habitability is affected.",
      },
      {
        question: "Will you recommend repair versus replacement honestly?",
        answer:
          "Always. We explain remaining system life, repair probability, and efficiency tradeoffs before recommending replacement.",
      },
      {
        question: "Do you service both split systems and package units?",
        answer:
          "Yes. Our team services common residential and light-commercial cooling equipment types.",
      },
    ],
    image: "/images/service-ac.png",
  },
  {
    slug: "water-heater-repair-installation",
    name: "Water Heater Repair & Installation",
    shortDescription:
      "Tank and tankless water heater diagnostics, repair, and replacement with code-safe installs.",
    fullDescription:
      "From no-hot-water emergencies to proactive upgrades, Falcon Five handles water heater service end-to-end. We verify fuel/electrical safety, water quality impact, and sizing so your new system matches demand.",
    emergencyChecklist: [
      "Shut off fuel/power source if there is a leaking tank.",
      "Close the cold-water supply valve to the unit.",
      "Avoid standing water near electrical components.",
      "Call for rapid diagnosis before tank failure escalates.",
    ],
    commonProblems: [
      "Pilot/ignition issues",
      "Element and thermostat failures",
      "Sediment buildup and reduced capacity",
      "Pressure relief valve leakage",
    ],
    relatedKeywords: [
      "water heater repair waco",
      "tankless water heater install hewitt",
      "emergency hot water repair bellmead",
    ],
    faqs: [
      {
        question: "Can you install tankless systems?",
        answer:
          "Yes. We install and service both tank and tankless systems, including sizing and venting verification.",
      },
      {
        question: "How long does replacement usually take?",
        answer:
          "Most standard replacements can be completed same day once the correct unit and connections are confirmed.",
      },
      {
        question: "Do you haul away old water heaters?",
        answer:
          "Yes. We remove and dispose of old units after installation.",
      },
    ],
    image: "/images/service-water-heater.png",
  },
  {
    slug: "drain-sewer-services",
    name: "Drain & Sewer Services",
    shortDescription:
      "Drain clearing, camera inspections, and sewer line troubleshooting for recurring clogs.",
    fullDescription:
      "Slow drains and repeat backups usually point to root causes deeper than a single fixture. Falcon Five uses inspection-first diagnostics to solve recurring drain and sewer issues with fewer repeat visits.",
    emergencyChecklist: [
      "Stop using fixtures connected to the backed-up line.",
      "Avoid chemical drain cleaners before inspection.",
      "Check whether multiple fixtures are backing up.",
      "Call for drain camera diagnostics and targeted clearing.",
    ],
    commonProblems: [
      "Kitchen and bathroom branch line clogs",
      "Main sewer line backups",
      "Root intrusion and pipe offset",
      "Recurring slow-drain conditions",
    ],
    relatedKeywords: [
      "drain cleaning waco",
      "sewer camera inspection hewitt",
      "main line clog bellmead",
    ],
    faqs: [
      {
        question: "Do you provide sewer camera inspections?",
        answer:
          "Yes. Camera inspections help verify exact blockage location and avoid unnecessary excavation.",
      },
      {
        question: "Can high-pressure jetting damage old pipes?",
        answer:
          "We assess line condition first, then choose the safest clearing method for the pipe material and age.",
      },
      {
        question: "Do you offer maintenance for chronic drain issues?",
        answer:
          "Yes. We can set preventive service intervals for high-use or historically problematic lines.",
      },
    ],
    image: "/images/service-drain.png",
  },
  {
    slug: "general-contractor-services",
    name: "General Contractor Services",
    shortDescription:
      "Coordinated residential and light-commercial repairs, upgrades, and project punch-list execution.",
    fullDescription:
      "Falcon Five supports broader contracting work tied to plumbing, cooling, and building functionality. We coordinate trades, keep scope clear, and prioritize code-compliant outcomes.",
    emergencyChecklist: [
      "Describe safety concerns and affected systems.",
      "Share photos or videos for rapid scope triage.",
      "Isolate damaged areas if possible.",
      "Book on-site assessment for timeline and cost planning.",
    ],
    commonProblems: [
      "Emergency repair coordination",
      "Mechanical room updates",
      "Post-leak restoration support",
      "Property improvement punch lists",
    ],
    relatedKeywords: [
      "general contractor waco tx",
      "property repair hewitt",
      "contracting services bellmead",
    ],
    faqs: [
      {
        question: "What size projects do you take on?",
        answer:
          "Falcon Five handles focused repairs through mid-size residential and light-commercial scope packages.",
      },
      {
        question: "Can you coordinate multiple trades on one job?",
        answer:
          "Yes. We coordinate sequence, scheduling, and handoffs so each trade can execute without conflicts.",
      },
      {
        question: "Do you provide written scopes and timelines?",
        answer:
          "Yes. Every project starts with clear scope, assumptions, and execution milestones.",
      },
    ],
    image: "/images/service-contracting.png",
  },
];

export const locations: LocationItem[] = [
  {
    slug: "waco-tx",
    city: "Waco",
    region: "TX",
    summary:
      "Central dispatch hub for emergency plumbing and AC calls with full-service coverage across city neighborhoods.",
    neighborhoods: ["Downtown Waco", "North Waco", "South Waco", "Baylor Area"],
    nearby: ["Woodway", "Bellmead", "Robinson"],
  },
  {
    slug: "hewitt-tx",
    city: "Hewitt",
    region: "TX",
    summary:
      "Rapid response support for AC failures and plumbing emergencies throughout Hewitt residential zones.",
    neighborhoods: ["Sunflower Ridge", "Midway Area", "Warren Acres"],
    nearby: ["Woodway", "Lorena", "Waco"],
  },
  {
    slug: "bellmead-tx",
    city: "Bellmead",
    region: "TX",
    summary:
      "Emergency contractor coverage with same-day dispatch focus for plumbing and cooling interruptions in Bellmead (often searched as Belmade).",
    neighborhoods: ["Loop 340 Corridor", "Old Dallas Road", "Bellmead Core"],
    nearby: ["Lacy Lakeview", "Waco", "Elm Mott"],
  },
  {
    slug: "woodway-tx",
    city: "Woodway",
    region: "TX",
    summary:
      "Residential system repair and preventive service support with emergency escalation routing.",
    neighborhoods: ["Woodway Estates", "Stonegate", "Ritchie Road Corridor"],
    nearby: ["Hewitt", "Waco", "Lorena"],
  },
  {
    slug: "robinson-tx",
    city: "Robinson",
    region: "TX",
    summary:
      "Fast diagnosis and repair services for cooling breakdowns and urgent plumbing disruptions.",
    neighborhoods: ["Old Robinson Road", "Kendrick Area", "Heritage Parkway"],
    nearby: ["Waco", "Hewitt", "Lorena"],
  },
  {
    slug: "lorena-tx",
    city: "Lorena",
    region: "TX",
    summary:
      "24-hour emergency service reach with practical repair-first solutions for homes and small businesses.",
    neighborhoods: ["Lorena Town Center", "Rosenthal", "Chambers Creek Area"],
    nearby: ["Hewitt", "Robinson", "Bruceville-Eddy"],
  },
  {
    slug: "china-spring-tx",
    city: "China Spring",
    region: "TX",
    summary:
      "Extended-area contractor support for plumbing and AC reliability in high-demand seasons.",
    neighborhoods: ["China Spring Road", "Wortham Bend", "Lakeview Area"],
    nearby: ["Waco", "Bosqueville", "Valley Mills"],
  },
];

export const blogPosts: BlogPostItem[] = [
  {
    slug: "emergency-plumbing-checklist-waco",
    title: "Emergency Plumbing Checklist for Waco Homeowners",
    description:
      "A practical response flow for active leaks, backups, and shutoff decisions before your technician arrives.",
    targetKeyword: "emergency plumber waco checklist",
    outline: [
      "How to isolate water flow safely",
      "When to shut down electrical circuits",
      "What photos to capture for faster diagnosis",
      "How to reduce water damage before dispatch arrives",
    ],
  },
  {
    slug: "why-ac-freezes-up-in-texas",
    title: "Why Your AC Freezes Up in Central Texas (And What to Do)",
    description:
      "Understand evaporator freeze causes and what actions avoid compressor damage.",
    targetKeyword: "ac frozen coil waco tx",
    outline: [
      "Low airflow vs low refrigerant symptoms",
      "Filter and blower checks homeowners can do",
      "Safe thaw sequence before service",
      "When frozen coils require professional repair",
    ],
  },
  {
    slug: "bellmead-plumbing-red-flags",
    title: "5 Plumbing Red Flags Bellmead Homeowners Shouldn’t Ignore",
    description:
      "Early warning signs that small plumbing issues are about to become expensive emergencies.",
    targetKeyword: "plumbing repair bellmead tx",
    outline: [
      "Water pressure changes",
      "Recurring drain odor and gurgling",
      "Unexpected water bill spikes",
      "Moisture near slab edges or walls",
    ],
  },
  {
    slug: "hewitt-hvac-repair-vs-replace",
    title: "Hewitt HVAC: Repair or Replace? A Practical Decision Guide",
    description:
      "A framework to compare repair cost, age, efficiency, and reliability risk.",
    targetKeyword: "hewitt tx hvac repair or replace",
    outline: [
      "Age-to-repair ratio decision model",
      "Energy cost impact in hot seasons",
      "Parts availability risk",
      "When replacement saves money long-term",
    ],
  },
  {
    slug: "water-heater-life-expectancy-waco",
    title: "How Long Do Water Heaters Last in Waco Water Conditions?",
    description:
      "Expected lifespan and maintenance factors for tank and tankless systems.",
    targetKeyword: "water heater replacement waco tx",
    outline: [
      "Sediment effects on tank lifespan",
      "Annual maintenance steps",
      "Anode rod checks and warning signs",
      "Planning a proactive replacement timeline",
    ],
  },
  {
    slug: "contractor-response-time-guide",
    title: "What Real Emergency Response Time Should Look Like",
    description:
      "How dispatch workflow, technician routing, and call triage impact your wait time.",
    targetKeyword: "24 hour contractor response waco",
    outline: [
      "How call triage determines priority",
      "Difference between ETA and arrival window",
      "What to ask during emergency intake",
      "How to prepare the property for quick work",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

