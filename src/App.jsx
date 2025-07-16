import { Route, Routes } from "react-router-dom"

import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { useThemeStore } from "./store/useThemeStore";

const App = () =>  {

  const { theme } = useThemeStore();

  return (
    <div data-theme={theme} className="min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App
