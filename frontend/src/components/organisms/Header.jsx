import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../../assets/icons/home.svg";
import catalogIcon from "../../assets/icons/catalog.png";
import aboutIcon from "../../assets/icons/about.png";
import contactIcon from "../../assets/icons/contact.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 w-full bg-white shadow px-10 z-50">
      <div className="flex h-16 justify-between items-center px-10 max-w-10xl mx-auto">
        <Link to="/" className="text-xl font-light cursor-pointer">
          <span className="text-orange-400 font-bold">Linea</span>Cheff
        </Link>

        {isHome && (
          <ul className="hidden sm:flex gap-7">
            <li className="cursor-pointer hover:text-blue-400 transition duration-400 ease-in-out">
              <a href="#hero">inicio</a>
            </li>
            <li className="cursor-pointer hover:text-blue-400 transition duration-400 ease-in-out">
              <a href="#products">catalogo</a>
            </li>
            <li className="cursor-pointer hover:text-blue-400 transition duration-400 ease-in-out">
              <a href="#about-us">nosotros</a>
            </li>
            <li className="cursor-pointer hover:text-blue-400 transition duration-400 ease-in-out">
              <a href="#contact">contacto</a>
            </li>
          </ul>
        )}

        {isHome && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-2xl cursor-pointer"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        )}
      </div>

      {isHome && menuOpen && (
        <ul className="relative">
          <li className="cursor-pointer h-15 flex items-center justify-start gap-3">
            <img className="w-6" src={homeIcon} alt="home" />
            <a href="#hero">inicio</a>
          </li>
          <li className="cursor-pointer h-15 flex items-center justify-start gap-3">
            <img className="w-6" src={catalogIcon} alt="catalog" />
            <a href="#products">catalogo</a>
          </li>
          <li className="cursor-pointer h-15 flex items-center justify-start gap-3">
            <img className="w-6" src={aboutIcon} alt="about" />
            <a href="#about-us">nosotros</a>
          </li>
          <li className="cursor-pointer h-15 flex items-center justify-start gap-3">
            <img className="w-6" src={contactIcon} alt="contact" />
            <a href="#contact">contacto</a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
