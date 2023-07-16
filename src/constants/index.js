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

    doccollab,
    hastebin,
    hulu,
    recipe,
    mymeet,
    myChatroom,
    secureTransfer,
    sociopedia,
    tesla,
    todo,

    maneet,
    shivam,
    vanshika,
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
        "Created a scraper and collect data of US county officials and created APIs of it & colaborated with the US-based client directly.",
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
        "Priyansh carries a very professional attitude towards his work and while his duration with All Friends Studio, he was skillfully handing a couple of projects. He's a keen learner and does the job, before you even know it.",
      name: "Maneet Singh",
      designation: "CEO",
      company: "All Friends Studio",
      image: maneet,
      link: ""
    },
    {
      testimonial:
        "Priyansh is a very hardworking and dedicated person, he truly cares about their clients. Javascript concepts are very clear to him and he is very good at problem-solving. ",
      name: "Shivam Tyagi",
      designation: "Manager",
      company: "All Friends Studio",
      image: shivam,
    },
    {
      testimonial:
        "Priyansh is a good team leader, as President of TCF he manages his team very well and organized many amazing events. He is a good team player and always ready to help others.",
      name: "Vanshika Gupta",
      designation: "Convener",
      company: "Trinity Cyber Forum",
      image: vanshika,
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
      name: "Sociopedia",
      description:
        "This is a MERN-stack social-media web app. Where users can post text, and images & like them they can follow and unfollow others. In this app features like authentification and private routing are implemented neatly.",
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
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "React JS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
        },
      ],
      image: sociopedia,
      source_code_link: "https://github.com/priyanshkulshrestha/sociopedia",
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
      name: "My-Chatroom",
      description:
        "This web application can be used for chatting with your friends here people can join the room and chat with the joined users, chats will update in run time. This chat app is based on web sockets using Socket.io",
      tags: [
        {
          name: "Node",
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
        {
          name: "Socket.io",
          color: "blue-text-gradient",
        },
      ],
      image: myChatroom,
      source_code_link: "https://github.com/priyanshkulshrestha/My-Chatroom",
    },
    {
      name: "My Hastebin",
      description:
        "This is a full-stack web app can be used for sharing code templates, where one person can write or paste a code and share it with friends by sharing a unique URL.",
      tags: [
        {
          name: "Node",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "EJS",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
      ],
      image: hastebin,
      source_code_link: "https://github.com/priyanshkulshrestha/hastebin",
    },
    {
      name: "Recipe Finder",
      description:
        "It is a fully responsive react app where you can search for any dish and its recipe by its name. I have implemented debouncing in the search box.",
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
    {
      name: "Secure-Transfer",
      description:
      "It is a password protected file sharing system. where one person can put a file and share it protectedly with friends by sharing a unique URL.",
      tags: [
        {
          name: "Node",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "EJS",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Multer",
          color: "green-text-gradient",
        }
      ],
      image: secureTransfer,
      source_code_link: "https://github.com/priyanshkulshrestha/Secure-Transfer",
    },
    {
      name: "Hulu 2.0",
      description:
      "It is a fully responsive clone of Hulu Website home page, here I used TMDB api for the data and implementd filters based on genres. This is designed using Tailwind CSS.",
      tags: [
        {
          name: "Next JS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "API-Integration",
          color: "pink-text-gradient",
        },
      ],
      image: hulu,
      source_code_link: "https://github.com/priyanshkulshrestha/Hulu-Clone",
    },
    {
      name: "Tesla-Clone",
      description:
      "It is a fully responsive react clone of Tesla Website home page. This is designed using Styled Components.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Styled-Components",
          color: "green-text-gradient",
        },
      ],
      image: tesla,
      source_code_link: "https://github.com/priyanshkulshrestha/Tesla-Clone",
    },
    {
      name: "To-Do App",
      description:
        "It is a fully responsive Todo list web app. This is developed using HTML, CSS, & Vanila Javascript. Here i used local storage to store tasks so they don't disapper after closing app.",
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
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/priyanshkulshrestha/Todo-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };