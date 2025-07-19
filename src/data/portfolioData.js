export const homePageData = {
  name: "Nguyen Dinh Luong",
  title: "Web Developer",
  tagline: "Crafting efficient and user-centric digital experiences.",
  description:
    "Hello! I'm Luong, a passionate web developer with a strong enthusiasm for technology—especially the world of the web. I strive to create websites that not only perform efficiently but also deliver meaningful value through optimized design and exceptional user experience. I'm constantly learning and applying new technologies to enhance my skills and build high-quality products that meet real user needs. I would love to connect with you!",
  image: "/assets/profile-pic.png",
};


export const aboutPageData = {
  title: "About Me & My Skillset",

  // Your Story
  briefIntro: {
    personalInfo: [
      { label: "First Name", value: "Luong" },
      { label: "Last Name", value: "Nguyen Dinh" },
      { label: "Birthday", value: "08/12/2004" },
      { label: "Sex", value: "Male" },
      { label: "Nation", value: "Viet Nam" },
      { label: "Address", value: "Thanh Xuan, Ha Noi" },
      { label: "Phone", value: "0977417022" },
      { label: "Language", value: "Vietnamese, English" },
      { label: "Git", value: "https://github.com/luong190204", isLink: true }, // Thêm cờ isLink
      { label: "Email", value: "dinhluong19002004@gmail.com", isLink: true },
    ],
    //Statistic Cards
    statisticCards: [
      { id: 1, value: "3", label: "PERSONAL PROJECTS", unit: "+" },
      { id: 2, value: "0", label: "YEARS OF EXPERIENCE", unit: "+" },
      { id: 3, value: "0", label: "CLIENTS", unit: "+" },
      { id: 4, value: "0", label: "AWARDS WON", unit: "+" },
    ],
    // Nút Download CV
    downloadCvButton: {
      text: "DOWNLOAD CV",
      link: "/assets/CV.pdf",
    },
  },

  // My Core Skills
  skills: {
    title: "My Core Skillset",
    categories: [
      {
        id: 1,
        name: "Front-end Development",
        icon: "Globe",
        colorClass: "text-primary",
        items: [
          { name: "React.js", badgeClass: "badge-primary" },
          { name: "Tailwind CSS", badgeClass: "badge-accent" },
          { name: "DaisyUI", badgeClass: "badge-info" },
          { name: "JavaScript (ES6+)", badgeClass: "badge-success" },
          { name: "TypeScript", badgeClass: "badge-warning" },
          { name: "HTML5/CSS3", badgeClass: "badge-error" },
        ],
      },
      {
        id: 2,
        name: "Back-end & Databases",
        icon: "Database",
        colorClass: "text-success",
        items: [
          { name: "SpringBoot", badgeClass: "badge-accent" },
          { name: "Node.js", badgeClass: "badge-primary" },
          { name: "Express.js", badgeClass: "badge-secondary" },
          { name: "MySQL", badgeClass: "badge-info" },
          { name: "MongoDB", badgeClass: "badge-error" },
          { name: "RESTful APIs", badgeClass: "badge-success" },
          { name: "Authentication", badgeClass: "badge-warning" },
        ],
      },
      {
        id: 3,
        name: "Soft Skills & Tools",
        icon: "Wrench",
        colorClass: "text-accent",
        items: [
          { name: "Problem-Solving", badgeClass: "badge-outline" },
          { name: "Teamwork", badgeClass: "badge-outline" },
          { name: "Communication", badgeClass: "badge-outline" },
          { name: "Adaptability", badgeClass: "badge-outline" },
          { name: "Git & GitHub", badgeClass: "badge-outline" },
          { name: "Figma", badgeClass: "badge-outline" },
          { name: "VS Code", badgeClass: "badge-outline" },
        ],
      },
    ],
  },

  //My Journey So Far
  journey: {
    title: "My Journey So Far",
    timelineEvents: [
      {
        id: 1,
        title: "Hanoi University of Business and Technology",
        date: "Oct 2022 - Present",
        description:
          "I am currently studying Information Technology, specializing in software development and information systems. During my studies, I have researched and practiced programming techniques, application building, and algorithm optimization.",
        icon: "GraduationCap",
        colorClass: "text-primary",
      },
    ],
  },

  // Lời kêu gọi hành động (Final CTA)
  finalCta: {
    title: "Ready to Build Something Amazing Together?",
    paragraph:
      "I am always looking for new opportunities to contribute and grow. Please feel free to contact me if you have a project or opportunity that fits!",
    buttons: [
      {
        text: "Explore My Projects",
        link: "/project",
        styleClass: "btn-primary",
      },
      {
        text: "Get in Touch",
        link: "/contact",
        styleClass: "btn-outline",
      },
    ],
  },
};

export const projectPageData = {
  title: "My Projects",
  description:
    "Explore some of my recent work showcasing a blend of functionality, design, and modern web technologies. Each project highlights my problem-solving skills and commitment to creating impactful digital solutions.",
  project: [
    {
      id: 1,
      name: "Real-time Chat Application (MERN Stack)",
      shortDescription:
        "A full-stack real-time chat application built with the MERN stack, featuring user authentication, online presence tracking, and instant messaging using Socket.io. The UI is designed with TailwindCSS and DaisyUI for a modern experience.",
      longDescription: `This is a full-stack real-time chat application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features user authentication and authorization with JWT, allowing users to securely log in and manage sessions. Real-time messaging is handled through Socket.io, enabling instant communication between users and displaying online/offline status. 
        The frontend is styled with TailwindCSS and enhanced using DaisyUI for a clean, responsive interface. The entire application is deployed on Render, with both frontend and backend integrated into a single server. This project demonstrates my understanding of full-stack development, WebSocket communication, authentication flows, and responsive UI design.
        `,
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "DaisyUI",
      ],
      features: [
        "Build real-time chat application with React and Node.js",
        "Integrate Socket.io, display online status, send real-time messages",
        "Authenticate users with JWT",
        "Design interface with TailwindCSS + DaisyUI",
      ],
      image: "/assets/projects/chatapp.png",
      screenshots: [
        "/assets/projects/chatapp_sigup.png",
        "/assets/projects/chatapp_login.png",
        "/assets/projects/chatapp_chat.png",
        "/assets/projects/chatapp_profile.png",
        "/assets/projects/chatapp_theme.png",
      ],
      demoLink: "https://fullstack-chat-app-2j3s.onrender.com",
      githubLink: "https://github.com/luong190204/fullstack-chat-app",
    },
    
  ],
};

export const contactPageData = {
  title: "Get In Touch",
  description:
    "Thank you for reading to the end. I hope that you have learned a little about me through this site. If you have any comments about this site or me, please use the form.",

  address: "Ha Noi",
  email: "dinhluong19002004@gmail.com",
  phone: "0977417022"

};
