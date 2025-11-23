import { useState } from "react";
import homeIcon from "../../assets/icons/home.svg";
import catalogIcon from "../../assets/icons/catalog.png";
import aboutIcon from "../../assets/icons/about.png";
import contactIcon from "../../assets/icons/contact.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-white shadow px-10 z-50">
      <div className="flex h-16 justify-between items-center px-10 max-w-10xl mx-auto">
        <h1 className="text-xl font-light">
          <span className="text-orange-400 font-bold">Linea</span>Cheff
        </h1>
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
            <a href="#">contacto</a>
          </li>
        </ul>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-2xl cursor-pointer"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div>
        {menuOpen && (
          <ul className="relative">
            <li className="cursor-pointer h-15 flex items-center justify-start gap-3">
              <img className="w-6" src={homeIcon} alt="home" />
              <a href="#">inicio</a>
            </li>
            <li className="cursor-pointer h-15 flex items-center justify-start gap-3">
              <img className="w-6" src={catalogIcon} alt="home" />
              <a href="#">catalogo</a>
            </li>
            <li className="cursor-pointer h-15 flex items-center justify-start gap-3">
              <img className="w-6" src={aboutIcon} alt="home" />
              <a href="#">nosotros</a>
            </li>
            <li className="cursor-pointer h-15 flex items-center justify-start gap-3">
              <img className="w-6" src={contactIcon} alt="home" />
              <a href="#">contacto</a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
