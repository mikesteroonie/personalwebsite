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
  tunetrap,
  rush,
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
      "In studies for a Bachelor of Science in Computer Science with an expected graduation of May 2025",
      "Emphatic about building, brainstorming, and actualizing ideas through mediums like cinematography and code.",
      "Activities and Societies:",
      "Alpha Kappa Psi Professional Business Fraternity, V1 Entrepreneurship, Korean Student Association, Film Club.",
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
      "Fully architected web app, user onboarding flow, and sorting of grocery items based on user preferences utilizing Shopify payment system with Stripe API",
      "Shipped MVP, and selected to compete in an exclusive Contrary Capital hackathon, receiving funds of $50K+ in Stripe, AWS, etc. credits resulting in 140+ beta test user list",
      "Landing Page down due to domain payment issues, will be up next semester!",
    ],
  },
  {
    title: "The Orca Network - (Venture-backed by Foundation Capital)",
    company_name: "Full Stack SWE Intern",
    icon: orca,
    iconBg: "#E6DEDD",
    date: "July 2023 - August 2023",
    points: [
      "Implemented React / JavaScript / MySQL full-stack user dashboard connecting startups with investors used by 8700+ startup founders and 300+ investors daily—optimized data querying with Go reducing load times by 18%",
      "Engineered a C++ live recommendation engine for investors viewing startups tailored to their investment theses, achieving 50ms response times and boosting investor engagement by 35%",
      "Developed C++ internal analytics tool, allowing for data-oriented approaches to new features resulting in increased $1.05 million term sheet investments for customers over 12 weeks",
      "Deployed and managed containerization of AWS EC2 instances with Kubernetes, enhancing system scalability and performance in 25 different availability zones across North America",
      "Spearheaded SEO optimization endeavors creating sitemaps for individual startup profiles optimized for site crawler–reorganized codebase increasing Lighthouse scores by 19%, surging conversion rate by 240% in 6 weeks",
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
      "Sourcing deals and performing due diligence on weekly basis and engaging in weekly syncs to reconvene and streamline dealflow processes",
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
    name: "TuneTrap",
    description:
      "Next-generation of social media, building a profile not around photos(Instagram), not around text(Twitter), but around MUSIC TASTE.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "blue-text-gradient",
      },
    ],
    image: tunetrap,
    source_code_link: "https://github.com/mikesteroonie/tunetrap",
  },
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
    name: "Business Fraternity Rush Video",
    description: "Hired to Film + Edit a Rush Video...indulge",
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
    image: rush,
    source_code_link: "https://youtu.be/7CYz2NB4b-8",
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
