import { Link } from "react-router";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="relative h-180 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('src/images/hero-bg.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div>
            <span className="text-xs mb-4 text-gray-300 ">
              <Link to="/" className="hover:text-white/80 cursor-pointer">
                Ana Sayfa
              </Link>
              <span className="mx-2">{">"}</span>
              <span className="text-red-900"> Hakkımızda</span>
            </span>
            <h2 className="font-bold text-4xl md:text-6xl mb-6 text-white">
              Hakkımızda
            </h2>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
