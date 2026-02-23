export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#">
            <img
              className="w-30 cursor-pointer"
              src="/src/Images/ÖBN.png"
              alt="Öz Bandırma Nakliyat Logosu"
            />
          </a>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex gap-8 px-8 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-gray-200">
            <li className="hover:text-white cursor-pointer">Ana Sayfa</li>
            <li className="hover:text-white cursor-pointer">Hakkımızda</li>
            <li className="hover:text-white cursor-pointer">Hizmetlerimiz</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </nav>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl cursor-pointer bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition">
          İletişime Geç
          <span>→</span>
        </button>
      </div>
    </header>
  );
}
