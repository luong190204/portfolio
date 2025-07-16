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
    image: "/assets/profile-pic.png", // Đường dẫn đến ảnh của bạn
    alt: "Nguyễn Đình Lương working on a project",
    paragraphs:
      "Chào bạn! Tôi là Nguyễn Đình Lương, một nhà phát triển web đầy nhiệt huyết với niềm tin mãnh liệt rằng công nghệ có sức mạnh thay đổi thế giới. Hành trình của tôi bắt đầu từ sự tò mò về cách các ứng dụng web được xây dựng, và nhanh chóng phát triển thành một đam mê không ngừng nghỉ trong việc kiến tạo những giải pháp kỹ thuật số tối ưu.",

    ctaButton: {
      text: "Explore My Projects",
      link: "/project",
      icon: "ArrowRight",
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
        colorClass: "text-secondary",
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
          "Tôi hiện đang theo học ngành Công nghệ Thông tin, chuyên sâu về phát triển phần mềm và hệ thống thông tin. Trong quá trình học, tôi đã nghiên cứu và thực hành các kỹ thuật lập trình, xây dựng ứng dụng, và tối ưu hóa thuật toán. ",
        icon: "GraduationCap",
        colorClass: "text-secondary",
      },
    ],
  },

  // Phần Sở thích/Cá tính (Beyond the Code)
  interests: {
    title: "Beyond the Code",
    paragraph:
      "Ngoài công việc lập trình, tôi rất thích chơi bóng đá để giữ gìn sức khỏe và tinh thần đồng đội. Tôi cũng là một người đam mê nhiếp ảnh phong cảnh, giúp tôi nhìn thế giới với một góc nhìn mới mẻ và rèn luyện sự tỉ mỉ. Việc có một cuộc sống cân bằng giúp tôi nạp năng lượng, tăng cường khả năng sáng tạo và duy trì hiệu suất cao trong công việc.",
    icons: [
      { name: "AcademicCapIcon", colorClass: "text-info", size: "h-10 w-10" }, // Football/Soccer
      { name: "CameraIcon", colorClass: "text-info", size: "h-10 w-10" }, // Camera/Photography
      { name: "BookOpenIcon", colorClass: "text-info", size: "h-10 w-10" }, // Book/Reading
    ],
  },

  // Lời kêu gọi hành động (Final CTA)
  finalCta: {
    title: "Ready to Build Something Amazing Together?",
    paragraph:
      "Tôi luôn tìm kiếm những cơ hội mới để đóng góp và phát triển. Đừng ngần ngại liên hệ nếu bạn có dự án hoặc cơ hội nào phù hợp!",
    buttons: [
      {
        text: "Explore My Projects",
        link: "#projects",
        styleClass: "btn-primary",
        icon: "BriefcaseIcon",
      },
      {
        text: "Get in Touch",
        link: "#contact",
        styleClass: "btn-outline",
        icon: "ChatBubbleBottomCenterTextIcon",
      },
    ],
  },
};

