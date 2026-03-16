import { Link } from "react-router";
import Logo from "../images/ÖBN.png";
import { useEffect, useState } from "react";

import MobileNavbar from "./MobileNavbar";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed flex items-center top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-[#1B1A1F] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 transition-all duration-300 grid grid-cols-3 items-center ${
          isSticky ? "py-2" : "py-5"
        }`}
      >
        <div className="flex justify-start">
          <Link to="/" reloadDocument>
            <img
              className={`cursor-pointer transition-all duration-300 ${
                isSticky ? "h-15" : "h-25"
              }`}
              src={Logo}
              alt="Öz Bandırma Nakliyat Logosu"
            />
          </Link>
        </div>
        <nav className="hidden lg:flex justify-center">
          <ul
            className={`flex rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-gray-200 transition-all duration-300 ${
              isSticky
                ? "gap-6 px-6 py-2 text-sm"
                : "gap-10 px-12 py-3 text-base"
            }`}
          >
            <li className="hover:text-white cursor-pointer text-nowrap ">
              <Link to="/" reloadDocument>
                Ana Sayfa
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link to="/kurumsal">Kurumsal</Link>
            </li>
            <li className="hover:text-white cursor-pointer scroll-smooth">
              <HashLink to="/#hizmetlerimiz">Hizmetlerimiz</HashLink>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-end">
          <button
            className={`hidden lg:flex items-center gap-2 rounded-xl cursor-pointer 
    bg-white/5 border border-white/10 backdrop-blur-md text-white 
    hover:bg-white/10 transition-all duration-300 ${
      isSticky ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-base"
    }`}
          >
            İletişime Geç
            <span>→</span>
          </button>
        </div>
      </div>
      <div
        className={`max-w-7xl px-6 md:mx-auto lg:mx-0 transition-all duration-300 grid grid-cols-2 items-center ${
          isSticky ? "py-2" : "py-5"
        }`}
      >
        <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}
