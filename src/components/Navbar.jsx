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
          {/* Checkbox ẩn để điều khiển trạng thái */}
          <input
            type="checkbox"
            checked={theme === "dark"} // Nếu theme là 'dark' thì checkbox được checked
            onChange={toggleTheme}
            // Thêm className "theme-controller" để DaisyUI biết đây là bộ điều khiển theme
            className="theme-controller"
          />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM18.36,6.64a1,1,0,0,0,0-1.41L17.65,4.5a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41l.71.71A1,1,0,0,0,18.36,6.64ZM20,11H19a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-1.64,5.36a1,1,0,0,0,0,1.41l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L18.36,16.36ZM12,18a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V19A1,1,0,0,0,12,18ZM7.05,6.05A1,1,0,0,0,6.34,5.34L5.63,4.63a1,1,0,0,0-1.41,1.41l.71.71A1,1,0,0,0,7.05,6.05Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
          </svg>
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
