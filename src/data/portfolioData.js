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
      link: "/assets/your_cv.pdf",
    },
  },

  // My Core Skills
  skills: {
    title: "My Core Skillset",
    categories: [
      {
        id: 1,
        name: "Front-end Development",
        icon: "SquareCode",
        colorClass: "text-primary",
        items: [
          { name: "React.js", badgeClass: "badge-primary" },
          { name: "Next.js", badgeClass: "badge-secondary" },
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
        icon: "Server",
        colorClass: "text-success",
        items: [
          { name: "Node.js", badgeClass: "badge-primary" },
          { name: "Express.js", badgeClass: "badge-secondary" },
          { name: "MongoDB", badgeClass: "badge-accent" },
          { name: "PostgreSQL", badgeClass: "badge-info" },
          { name: "RESTful APIs", badgeClass: "badge-success" },
          { name: "Authentication", badgeClass: "badge-warning" },
        ],
      },
      {
        id: 3,
        name: "Soft Skills & Tools",
        icon: "WrenchScrewdriverIcon",
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
      {
        id: 2,
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
        link: "/projects",
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

