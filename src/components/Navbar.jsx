import { Briefcase, Home, Mail, Moon, Sun, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useThemeStore } from "../store/useThemeStore";
import PageTransitionOverlay from "../components/PageTransitionOverlay";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showTransition, setShowTransition] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  const handleNavigate = (path) => {
    if (path === location.pathname) return;

    setShowTransition(true);
    navigate(path); // chuyển trang ngay
  };

  const navLinks = [
    { id: "HomePage", path: "/", icon: Home, label: "Home" },
    { id: "About", path: "/about", icon: User, label: "About" },
    { id: "Project", path: "/project", icon: Briefcase, label: "Projects" },
    { id: "Contact", path: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <div className="z-10 bg-base-100">
      {showTransition && (
        <PageTransitionOverlay onFinish={() => setShowTransition(false)} />
      )}

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 lg:top-8 lg:right-14 z-50">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={toggleTheme}
          />
          <Sun className="swap-on  w-6 h-6" />
          <Moon className="swap-off  w-6 h-6" />
        </label>
      </div>

      {/* Navbar */}
      <nav
        className="fixed inset-x-0 top-0 p-2 shadow-lg 
              flex justify-center  
              lg:top-1/2 lg:right-4 lg:inset-x-auto lg:translate-y-[-50%] lg:flex-col lg:rounded-box z-20"
      >
        <ul className="menu flex flex-row gap-10 lg:flex-col lg:gap-4 lg:space-y-10 bg-base-100 rounded-box">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavigate(link.path)}
                className="flex flex-col items-center justify-center p-2 "
              >
                <link.icon className="w-6 h-6 text-base-content" />
                <span className="hidden lg:inline-block text-sm">
                  {link.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

};

export default Navbar;
