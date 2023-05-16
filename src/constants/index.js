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
    cpp,
    c,
    python,
    vscode,
    githubdark,
    recipe,
    mymeet,
    doccollab
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
      id: "projects",
      title: "Portfolio",
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Blockchain Enthusiast",
      icon: creator,
    },
    {
      title: "Good Learner & Tech Lover",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "CPP",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "vscode",
      icon: vscode,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Github",
      icon: githubdark,
    },
  ];
  
  const experiences = [
    {
      title: "MERN Stack Developer",
      company_name: "All Friends Studio",
      icon: typescript,
      iconBg: "#383E56",
      date: "Oct 2022 - April 2023",
      points: [
        "Worked on a backend engine which was coded in typescript.",
        "Created a scraper and collect data of US county officials and created APIs of iCollaboratingt colaborated with the US-based client directly.",
        " Created a full-stack web app for employees of AFS to get time conversion and maintain the clock according to the client time and handle all tasks with real-time updates in the dashboard using node js and sockets.",
      ],
    },
    {
      title: "Node Js Developer",
      company_name: "Cheesecake Digital Agency",
      icon: nodejs,
      iconBg: "#E6DEDD",
      date: "Jul 2022 - Aug 2022",
      points: [
        "Developed backend of a mobile app named 'Dropwown', It was a Influencer Hiring Platform and app is live on playstore.",
        "Created many APIs and re-structured whole backend and coded it in TypeScript.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shayadri Foundation",
      icon: web,
      iconBg: "#383E56",
      date: "Aug 2021 - Oct 2021",
      points: [
        "I handled and created Shayadri Foundations’ website using WordPress.",
        "Created a static website in HTML, CSS, and JS for the sub-organization IWS.",
        "Helped that NGO in expading their reach in Online market.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Priyansh proved me wrong.",
      name: "Maneet Singh",
      designation: "CEO",
      company: "All Friends Studio",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Priyansh does.",
      name: "Shivam Tyagi",
      designation: "Manager",
      company: "All Friends Studio",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Priyansh optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Vanshika Gupta",
      designation: "Convener",
      company: "Trinity Cyber Forum",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "My-Meet",
      description:
        "This web app is like google meet it works on WebSockets implemented using Socket.io and Express. When a user joins the app it creates a unique URL and can share that link with friends to join the meet where they can do video meet and chat.",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "Socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: mymeet,
      source_code_link: "https://github.com/priyanshkulshrestha/My-meet",
    },
    {
      name: "Doc-Collab",
      description:
        "Web application that work likes google docs where you can create a document and can edit it with your friends remotely and changes will be updated on run time. This web app is created using MERN Stack and Socket.io",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: doccollab,
      source_code_link: "https://github.com/priyanshkulshrestha/Doc-collab",
    },
    {
      name: "Recipe Finder",
      description:
        "It is a fully responsive react app where you can search for any dish and its recipe by its name. I have implemented debouncing in the search box. This is developed using React & Styled Components.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Styled-Components",
          color: "green-text-gradient",
        },
        {
          name: "API-Integration",
          color: "pink-text-gradient",
        },
      ],
      image: recipe,
      source_code_link: "https://github.com/priyanshkulshrestha/Recipe-finder",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };