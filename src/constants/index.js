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
    tour,
    introThumb,
    koreaThumb,
    dalle,
    chessy,
    comingsoon,

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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
        name: "Express",
        icon: ex,
      },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      title: "Korea International School",
      company_name: "Student",
      icon: kis,
      iconBg: "#E6DEDD",
      date: "August 2019 - May 2021",
      points: [
        "Completed a total of 10 unique AP Courses graduating with a GPA of 3.91/4.0",
        "Coursework includes the following AP Courses: World History, English Language, Capstone Seminar, CS A, English Literature, Capstone Research, Statistics, Calculus AB, Calculus BC, Physics I.",
        "Activities and Societies: Vice President Student Council / Creative Officer - (3 years), Student Phoenix Representative(1 of 11), Author of Childrens English Book, NHS Officer.",
       
      ],
    },
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
        "Co-founded on-campus delivery service that provides grocery items at up to 29 % cheaper prices than traditional delivery services such as UberEats and InstaCart, operating on an order early, group order model.",
        "Gamefies the grocery shopping experience, by notifying customers in real time that their grocery price just went down due to high order demand within their vicinity.",
        "In development of app MVP, and selected to compete in exclusive hackathon in partnership with Contrary Capital, receiving funds of $50K+ in Stripe, AWS, etc. credits, gaining investor eyes from the likes of AIPI Solutions NYC.",
        "Landing page: www.grocereats.com",
        
      ],
    },
    {
      title: "Tour.Video",
      company_name: "Full Stack SWE Developer",
      icon: tour,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Co-Lassify",
      description:
        "Web application that utilizes the Classify functionality of the Co:here API to categorize tasks into the following categories: Homework, Interview, Meetings, Class, Recruiting. API personally trained of 100+ unique data inputs",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "RESTAPI",
          color: "green-text-gradient",
        },
        {
          name: "MERN Stack",
          color: "pink-text-gradient",
        },
      ],
      image: comingsoon,
      source_code_link: "https://github.com/",
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
      description:
        "Apple-Style Commercial of myself",
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
      description:
        "Tried filming a music video to one of my favorite songs",
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
      description:
        "Documented a little boys night out in South Korea",
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