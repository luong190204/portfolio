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
        icon: "Globe",
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
        icon: "Database",
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
      name: "E-commerce: FASHION HAVEN",
      shortDescription:
        "A full-stack e-commerce application with secure authentication, product management, shopping cart, and payment gateway integration.",
      longDescription:
        "Phát triển một nền tảng thương mại điện tử hoàn chỉnh, cho phép người dùng đăng ký, đăng nhập an toàn, duyệt sản phẩm theo danh mục, thêm vào giỏ hàng và thực hiện thanh toán qua Stripe. Backend được xây dựng với Node.js/Express.js, API RESTful và database MongoDB. Frontend sử dụng ReactJS kết hợp với Tailwind CSS để tạo giao diện hiện đại, responsive. Đã triển khai tính năng tìm kiếm, bộ lọc sản phẩm, quản lý đơn hàng và hệ thống đánh giá sản phẩm.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Redux",
        "Stripe API",
      ],
      features: [
        "User authentication (JWT)",
        "Product catalog and filtering",
        "Shopping cart & order management",
        "Payment integration",
        "Admin dashboard for product management",
      ],
      image: "/assets/projects/image.png",
      screenshots: [
        "/assets/projects/image.png",
        "/assets/projects/image.png",
      ],
      demoLink: "https://fashion-haven-demo.vercel.app",
      githubLink: "https://github.com/yourusername/fashion-haven",
    },
    {
      id: 2,
      name: "Task Management App",
      shortDescription:
        "A responsive web application for managing tasks, tracking progress, and collaborating with team members.",
      longDescription:
        "Xây dựng ứng dụng quản lý công việc với khả năng tạo, chỉnh sửa, xóa và sắp xếp công việc theo trạng thái (To-Do, In Progress, Done). Hỗ trợ tính năng gán công việc cho thành viên, đặt deadline và thêm ghi chú. Sử dụng React Context API để quản lý trạng thái, Firebase cho backend (Firestore và Authentication). Giao diện thân thiện, dễ sử dụng trên cả desktop và mobile.",
      technologies: ["React.js", "Firebase (Firestore, Auth)", "Tailwind CSS"],
      features: [
        "Task creation, update, delete",
        "Status tracking",
        "User authentication",
        "Real-time updates",
        "Responsive design",
      ],
      image: "/assets/projects/image.png",
      screenshots: [
        "/assets/projects/taskflow-ss1.png",
        "/assets/projects/taskflow-ss2.png",
      ],
      demoLink: "https://taskflow-demo.vercel.app",
      githubLink: "https://github.com/yourusername/taskflow",
    },
    {
      id: 3,
      name: "Personal Blog Platform: DevLog",
      shortDescription:
        "A simple yet elegant blogging platform for sharing thoughts and articles with a markdown editor.",
      longDescription:
        "Thiết kế và triển khai một nền tảng blog cá nhân cho phép người dùng (hoặc quản trị viên) viết và xuất bản bài viết. Hỗ trợ trình soạn thảo Markdown, hiển thị bài viết nổi bật, phân loại theo tag/category. Sử dụng Next.js để tối ưu SEO và tốc độ tải trang, Contentful (hoặc headless CMS khác) làm backend cho nội dung. Giao diện tối giản, tập trung vào trải nghiệm đọc.",
      technologies: ["Next.js", "Markdown", "Contentful CMS", "Tailwind CSS"],
      features: [
        "Markdown editor support",
        "Category/tag filtering",
        "SEO friendly",
        "Responsive layout",
      ],
      image: "/assets/projects/image.png",
      screenshots: [],
      demoLink: "https://devlog-blog.vercel.app",
      githubLink: "https://github.com/yourusername/devlog",
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
