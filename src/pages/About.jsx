import { useEffect, useState } from "react";

const About = () => {

  return (
    <div>
      <section id="about" class="py-16 md:py-24 bg-base-200 text-base-content">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl lg:text-5xl font-extrabold text-center mb-12 animate__animated animate__fadeInUp">
            About Me: My Journey & What I Bring
          </h2>

          <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-20">
            <div class="w-full lg:w-1/3 flex justify-center lg:justify-end animate__animated animate__fadeInLeft">
              <img
                src="/assets/your-working-pic.jpg"
                alt="Nguyễn Đình Lương working"
                class="rounded-2xl shadow-2xl w-full max-w-md object-cover transform transition-transform duration-500 hover:scale-105"
                style="aspect-ratio: 1/1; object-fit: cover;"
              />
            </div>
            <div class="w-full lg:w-2/3 text-lg leading-relaxed text-center lg:text-left animate__animated animate__fadeInRight">
              <p class="mb-4">
                Chào bạn! Tôi là{" "}
                <strong class="text-primary">Nguyễn Đình Lương</strong>,
                một nhà phát triển web đầy nhiệt huyết với niềm tin mãnh liệt
                rằng công nghệ có sức mạnh thay đổi thế giới. Hành trình của tôi
                bắt đầu từ sự tò mò về cách các ứng dụng web được xây dựng, và
                nhanh chóng phát triển thành một đam mê không ngừng nghỉ trong
                việc kiến tạo những giải pháp kỹ thuật số tối ưu.
              </p>
              <p class="mb-4">
                Trong suốt quá trình làm việc và học hỏi, tôi luôn đặt trải
                nghiệm người dùng và hiệu suất lên hàng đầu. Tôi không chỉ tập
                trung vào việc viết code sạch và hiệu quả mà còn chú trọng đến
                việc thiết kế giao diện trực quan, dễ sử dụng. Tôi liên tục cập
                nhật các công nghệ mới như{" "}
                <span class="font-semibold text-secondary">
                  React, Next.js và Tailwind CSS
                </span>{" "}
                để đảm bảo sản phẩm của mình luôn hiện đại và cạnh tranh.
              </p>
              <p>
                Tôi đang tìm kiếm một môi trường làm việc sáng tạo, nơi tôi có
                thể đóng góp khả năng giải quyết vấn đề của mình vào các dự án ý
                nghĩa và học hỏi từ những người đồng nghiệp tài năng. Hãy cùng
                nhau tạo ra những sản phẩm web tuyệt vời!
              </p>
              <a
                href="#contact"
                class="btn btn-secondary mt-6 animate__animated animate__bounceIn"
              >
                Let's Connect!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="mb-20">
            <h3 class="text-3xl lg:text-4xl font-bold text-center mb-10 animate__animated animate__fadeInUp">
              My Core Skills
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="card bg-base-100 shadow-xl p-8 transform transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInLeft">
                <h4 class="card-title text-base-content mb-6 text-2xl font-semibold border-b pb-3 border-base-content/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 mr-3 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Front-end Development
                </h4>
                <div class="flex flex-wrap gap-3">
                  <div class="badge badge-primary badge-lg">React.js</div>
                  <div class="badge badge-secondary badge-lg">Next.js</div>
                  <div class="badge badge-accent badge-lg">Tailwind CSS</div>
                  <div class="badge badge-info badge-lg">DaisyUI</div>
                  <div class="badge badge-success badge-lg">
                    JavaScript (ES6+)
                  </div>
                  <div class="badge badge-warning badge-lg">TypeScript</div>
                  <div class="badge badge-error badge-lg">HTML5/CSS3</div>
                </div>
              </div>

              <div class="card bg-base-100 shadow-xl p-8 transform transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp">
                <h4 class="card-title text-base-content mb-6 text-2xl font-semibold border-b pb-3 border-base-content/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 mr-3 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-4-4h.01M17 16h.01"
                    />
                  </svg>
                  Back-end & Databases
                </h4>
                <div class="flex flex-wrap gap-3">
                  <div class="badge badge-primary badge-lg">Node.js</div>
                  <div class="badge badge-secondary badge-lg">Express.js</div>
                  <div class="badge badge-accent badge-lg">MongoDB</div>
                  <div class="badge badge-info badge-lg">PostgreSQL</div>
                  <div class="badge badge-success badge-lg">RESTful APIs</div>
                  <div class="badge badge-warning badge-lg">Authentication</div>
                </div>
              </div>

              <div class="card bg-base-100 shadow-xl p-8 transform transition-transform duration-300 hover:-translate-y-2 animate__animated animate__fadeInRight">
                <h4 class="card-title text-base-content mb-6 text-2xl font-semibold border-b pb-3 border-base-content/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 mr-3 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  Soft Skills & Tools
                </h4>
                <div class="flex flex-wrap gap-3">
                  <div class="badge badge-outline badge-lg">
                    Problem-Solving
                  </div>
                  <div class="badge badge-outline badge-lg">Teamwork</div>
                  <div class="badge badge-outline badge-lg">Communication</div>
                  <div class="badge badge-outline badge-lg">Adaptability</div>
                  <div class="badge badge-outline badge-lg">Git & GitHub</div>
                  <div class="badge badge-outline badge-lg">Figma</div>
                  <div class="badge badge-outline badge-lg">VS Code</div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-20">
            <h3 class="text-3xl lg:text-4xl font-bold text-center mb-10 animate__animated animate__fadeInUp">
              My Journey So Far
            </h3>
            <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li class="animate__animated animate__fadeInUp animate__delay-0-5s">
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-6 w-6 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end timeline-box bg-base-100 shadow-xl p-6 mb-10">
                  <div class="font-bold text-xl text-primary mb-2">
                    Web Developer Intern - FPT Software
                  </div>
                  <div class="text-sm text-base-content/70 mb-3">
                    Jan 2024 - Jun 2024
                  </div>{" "}
                  <p class="text-base-content">
                    Tham gia phát triển module Front-end cho hệ thống quản lý
                    khách hàng bằng React và Redux. Hỗ trợ tối ưu hóa hiệu suất
                    và cải thiện UI/UX dưới sự hướng dẫn của team leader. Đã học
                    hỏi sâu về quy trình làm việc Agile/Scrum.
                  </p>
                </div>
                <hr />
              </li>
              <li class="animate__animated animate__fadeInUp animate__delay-0-7s">
                <hr />
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-6 w-6 text-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-start md:text-end timeline-box bg-base-100 shadow-xl p-6 mb-10">
                  <div class="font-bold text-xl text-secondary mb-2">
                    Bachelor of Computer Science - Đại học FPT
                  </div>
                  <div class="text-sm text-base-content/70 mb-3">
                    Sep 2020 - May 2024
                  </div>
                  <p class="text-base-content">
                    Hoàn thành chương trình cử nhân ngành Khoa học Máy tính. Tập
                    trung vào phát triển phần mềm và thuật toán. Đồ án tốt
                    nghiệp đạt điểm A với đề tài xây dựng ứng dụng web phân tích
                    dữ liệu.
                  </p>
                </div>
                <hr />
              </li>
              <li class="animate__animated animate__fadeInUp animate__delay-0-9s">
                <hr />
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-6 w-6 text-accent"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end timeline-box bg-base-100 shadow-xl p-6 mb-10">
                  <div class="font-bold text-xl text-accent mb-2">
                    Freelance Web Developer
                  </div>
                  <div class="text-sm text-base-content/70 mb-3">From 2022</div>
                  <p class="text-base-content">
                    Thực hiện các dự án web nhỏ cho khách hàng cá nhân, bao gồm
                    website giới thiệu sản phẩm và landing page. Nâng cao kỹ
                    năng làm việc độc lập và quản lý dự án.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div class="text-center text-base-content mb-16 animate__animated animate__fadeInUp">
            <h3 class="text-3xl lg:text-4xl font-bold mb-6">Beyond the Code</h3>
            <p class="max-w-3xl mx-auto leading-relaxed text-lg">
              Ngoài công việc lập trình, tôi rất thích [Sở thích 1, ví dụ: chơi
              bóng đá để giữ gìn sức khỏe và tinh thần đồng đội]. Tôi cũng là
              một người đam mê [Sở thích 2, ví dụ: nhiếp ảnh phong cảnh], giúp
              tôi nhìn thế giới với một góc nhìn mới mẻ và rèn luyện sự tỉ mỉ.
              Việc có một cuộc sống cân bằng giúp tôi nạp năng lượng, tăng cường
              khả năng sáng tạo và duy trì hiệu suất cao trong công việc.
            </p>
            <div class="flex justify-center gap-6 mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-info"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M17 20v-2c0-.134-.01-.265-.029-.395M12 12h.01M10 3.058l4 11.644m-1.28-1.28h.01M4 11a1 1 0 100 2h1a1 1 0 100-2H4zm15-4a1 1 0 100 2h1a1 1 0 100-2H19z"
                />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-info"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-info"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"
                />
              </svg>{" "}
            </div>
          </div>

          <div class="text-center mt-16 animate__animated animate__fadeInUp animate__delay-1s">
            <h3 class="text-3xl lg:text-4xl font-bold text-base-content mb-8">
              Ready to Build Something Amazing Together?
            </h3>
            <p class="text-lg text-base-content mb-8">
              Tôi luôn tìm kiếm những cơ hội mới để đóng góp và phát triển. Đừng
              ngần ngại liên hệ nếu bạn có dự án hoặc cơ hội nào phù hợp!
            </p>
            <div class="flex flex-wrap justify-center gap-6">
              <a
                href="#projects"
                class="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-all duration-300"
                // onClick={(e) => {
                //   e.preventDefault();
                //   document
                //     .getElementById("projects")
                //     .scrollIntoView({ behavior: "smooth" });
                // }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Explore My Projects
              </a>
              <a
                href="#contact"
                class="btn btn-outline btn-lg shadow-lg hover:shadow-xl transition-all duration-300"
                // onClick={(e) => {
                //   e.preventDefault();
                //   document
                //     .getElementById("contact")
                //     .scrollIntoView({ behavior: "smooth" });
                // }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
