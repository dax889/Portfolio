import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-orange-400 font-semibold"
      : "hover:text-orange-400 transition";

  return (
    <nav
      className={`fixed w-full z-50 transition duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <h1 className="text-xl font-bold text-orange-400">
          Dax<span className="text-white">.dev</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <a href="#about" className="hover:text-orange-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-orange-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-orange-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-orange-400 transition">
            Contact
          </a>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Resume
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">

            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-orange-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-orange-400"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] text-white flex flex-col items-center gap-6 py-6">

          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <a
            href="/resume.pdf"
            download
            className="bg-orange-500 px-4 py-2 rounded-lg"
          >
            Resume
          </a>

          <div className="flex gap-6 text-2xl">
            <FaGithub />
            <FaLinkedin />
          </div>

        </div>
      )}
    </nav>
  );
}