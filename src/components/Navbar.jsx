import { Briefcase, Home, Mail, Moon, Sun, User } from "lucide-react";
import React from "react";
import { useThemeStore } from "../store/useThemeStore";

const Navbar = () => {

  const { theme, toggleTheme } = useThemeStore();

  const navLinks = [
    { id: "HomePage", icon: Home, label: "Home" },
    { id: "About", icon: User, label: "About" },
    { id: "Project", icon: Briefcase, label: "Projects" },
    { id: "Contact", icon: Mail, label: "Contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="z-10">
      <div className="relative flex flex-col items-center justify-center">
        <button
          onClick={toggleTheme}
          className="absolute right-10 top-6 lg:right-14 lg:top-6 cursor-pointer z-50"
        >
          {theme === "light" ? (
            <Moon className="w-6 h-6" />
          ) : (
            <Sun className="w-6 h-6" />
          )}
        </button>
      </div>
      <nav
        className="fixed inset-x-0 top-0 p-2 shadow-lg 
                flex justify-center  
                lg:top-1/2 lg:right-4 lg:inset-x-auto lg:translate-y-[-50%] lg:flex-col lg:rounded-box z-20"
      >
        <ul className="menu flex flex-row gap-10 lg:flex-col lg:gap-4 lg:space-y-10 bg-base-100 rounded-box">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
                  scrollToSection(link.id);
                }}
                className="flex flex-col items-center justify-center p-2"
              >
                <link.icon className="w-6 h-6 text-base-content " />
                <span className="hidden lg:inline-block text-sm">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
