import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ae,
  premierepro,
  ex,
  kis,
  michigan,
  grocereats,
  orca,
  introThumb,
  koreaThumb,
  dalle,
  chessy,
  comingsoon,
  soma,
  buildspace,
  cohere,
  python,
  c,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Adobe Premiere Pro",
    icon: premierepro,
  },
  {
    name: "Adobe After Effects",
    icon: ae,
  },
];

const experiences = [
  {
    title: "University of Michigan",
    company_name: "BS in Computer Science",
    icon: michigan,
    iconBg: "#E6DEDD",
    date: "August 2021 - Present",
    points: [
      "Enrolled in Honors College with a 3.3/4.0 GPA",
      "Emphatic about building, brainstorming, and actualizing ideas through mediums like cinematography and code.",
      "Activities and Societies:",
      "Alpha Kappa Psi Professional Business Fraternity, V1 Entrepreneurship, Korean Student Association.",
    ],
  },
  {
    title: "GrocerEats",
    company_name: "Co-Founder",
    icon: grocereats,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "Co-founded on-campus delivery service that provides grocery items at up to 19 % cheaper prices than traditional delivery services such as UberEats and InstaCart, operating on an order early, group order model.",
      "Gamefies the grocery shopping experience, by notifying customers in real time that their grocery price just went down due to high order demand within their vicinity.",
      "In development of app MVP, and selected to compete in exclusive hackathon in partnership with Contrary Capital, receiving funds of $50K+ in Stripe, AWS, etc. credits",
      "Landing page: www.mygrocereats.com",
    ],
  },
  {
    title: "The Orca Network - (Venuture-backed by Foundation Capital)",
    company_name: "Full Stack SWE Developer",
    icon: orca,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Collaborated alongside CTO and synced with advisors such as Head of Product at Instagram to develop network effect flywheel referral feature--worked in React, Go, MySQL, AWS.",
      "Spearheaded design and fully implemented user dashboard for both startups and investors, ultimately leading to a 22% increased user engagment rate--used by 4000+ startup founders and 80+ investors daily",
      "Lead multiple SEO optimization endeavors creating sitemaps for individual startup profiles for Google to index, and re-organized startup code base to increase Google Lighthouse scores by 19%, thus hiking introductions between founders and investors by 2400% in 6 weeks",
      "Fully re-designed and fully re-implemented landing page--performed A/B testing on two iterations where option A would utilize Zapier pipelines to automatically generate a startup profile, thus leading to a 9% increased conversion above the fold as opposed to 6.4% for option B ",
    ],
  },
  {
    title: "Soma Capital",
    company_name: "Venture Fellow",
    icon: soma,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Underwent training alongside Soma Capital analysts to source startups and perform due diligence on a weekly basis given educational materials from the venture firm--done in collaboration alongside Soma Fellow scouts",
      "Collaborating with fellows listening into founder calls with YC F/W 2023 batch and reviewing pitch decks",
      "Sourcing deals and performing due diligence on weekly basis and having weekly syncs to reconvene and streamline dealflow processes",
    ],
  },
  {
    title: "Buildspace",
    company_name: "Season 4 Affiliate",
    icon: buildspace,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Accepted into Nights and Weekends Program",
      "Building the future...",
      "15,000 applicants",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "YouTube Thumbnail Generator",
    description:
      "A web application that utilizes the DALL-E 2 API to generate YouTube thumbnails based on a prompt of what your video is about.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "DALL-E 2",
        color: "pink-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/mikesteroonie/YTthumbnailGen",
  },
  {
    name: "Lyri-Search",
    description:
      "Python script that performs customized semantic search on artist Drake discography based on query to look for lyrics with similar sentiment. Made as a means for more fun communication between friends.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "cohere",
        color: "green-text-gradient",
      },
      {
        name: "AI/ML",
        color: "pink-text-gradient",
      },
    ],
    image: cohere,
    source_code_link: "https://github.com/mikesteroonie/lyricsearch",
  },
  {
    name: "Chess Social Media",
    description:
      "A full stack web application with full CRUD functionality that allows people to share their favorite chess openings.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chessy,
    source_code_link: "https://github.com/mikesteroonie/chessForum",
  },
];

const videos = [
  {
    name: "Self Introduction",
    description: "Apple-Style Commercial of myself",
    tags: [
      {
        name: "Premiere Pro",
        color: "blue-text-gradient",
      },
      {
        name: "After Effects",
        color: "green-text-gradient",
      },
      {
        name: "Apple",
        color: "pink-text-gradient",
      },
    ],
    image: introThumb,
    source_code_link: "https://youtu.be/HrW3JzemxhQ",
  },
  {
    name: "Music Video of Trip to Puerto Rico",
    description: "Tried filming a music video to one of my favorite songs",
    tags: [
      {
        name: "Premiere Pro",
        color: "blue-text-gradient",
      },
      {
        name: "Cinematography",
        color: "green-text-gradient",
      },
      {
        name: "Puerto Rico",
        color: "pink-text-gradient",
      },
    ],
    image: comingsoon,
    source_code_link: "https://github.com/",
  },
  {
    name: "South Korea Vlog",
    description: "Documented a little boys night out in South Korea",
    tags: [
      {
        name: "Premiere Pro",
        color: "blue-text-gradient",
      },
      {
        name: "South Korea",
        color: "green-text-gradient",
      },
      {
        name: "Vlog",
        color: "pink-text-gradient",
      },
    ],
    image: koreaThumb,
    source_code_link: "https://youtu.be/V7sRTW2-IM0",
  },
];

export { services, technologies, experiences, testimonials, projects, videos };
