import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

export default function MobileNavbar({ isOpen, setIsOpen }) {
  return (
    <div>
      {!isOpen && (
        <button
          className="lg:hidden z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="text-white" />
        </button>
      )}

      {isOpen && (
        <>
          <nav className="fixed top-0 right-0 h-screen w-72 bg-black/50 backdrop-blur-md text-white transform transition-transform duration-300 z-40 ">
            <button
              className="absolute top-17 right-6 z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              <X className="text-white" />
            </button>
            <ul className="flex flex-col my-25 gap-8 p-10 text-lg">
              <li className="hover:text-white">
                <Link to="/">Ana Sayfa</Link>
              </li>
              <li className="hover:text-white">
                <Link to="/kurumsal">Kurumsal</Link>
              </li>
              <li className="hover:text-white">
                <HashLink smooth href="/#hizmetlerimiz">
                  Hizmetlerimiz
                </HashLink>
              </li>
              <li className="hover:text-white">
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <button className="items-center gap-2 px-5 py-2.5 my-10 rounded-xl bg-black border border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition">
                  İletişime Geç
                  <span>→</span>
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
