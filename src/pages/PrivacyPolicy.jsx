import { Link } from "react-router";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import heroBg from "../images/hero-bg.jpeg";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <section className="relative h-180 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        ></div>

        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div>
            <span className="text-xs mb-4 text-gray-300">
              <Link to="/" className="hover:text-white/80 cursor-pointer">
                Ana Sayfa
              </Link>
              <span className="mx-2">{">"}</span>
              <span className="text-red-900">Gizlilik Politikası</span>
            </span>

            <h2 className="font-bold text-4xl md:text-6xl mb-6 text-white">
              Gizlilik Politikası
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-gray-700 space-y-10">
          <div>
            <h3 className="text-3xl font-bold text-[#3C303F] mb-4">
              Öz Bandırma Nakliyat Lojistik – Gizlilik Politikası
            </h3>

            <p className="leading-relaxed">
              Öz Bandırma Nakliyat Lojistik olarak web sitemizi ziyaret eden
              kullanıcılarımızın gizliliğini korumayı ve kişisel verilerin
              güvenliğini sağlamayı taahhüt ederiz.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">1. Toplanan Bilgiler</h4>

            <p className="leading-relaxed">
              Web sitemizi ziyaret ettiğinizde aşağıdaki bilgiler toplanabilir:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>IP adresi</li>
              <li>Tarayıcı ve cihaz bilgileri</li>
              <li>Ziyaret edilen sayfalar</li>
              <li>İletişim formu bilgileri</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">
              2. Bilgilerin Kullanımı
            </h4>

            <p className="leading-relaxed">
              Toplanan bilgiler aşağıdaki amaçlarla kullanılabilir:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Hizmetlerimizi geliştirmek</li>
              <li>Ziyaretçi deneyimini iyileştirmek</li>
              <li>Taleplere geri dönüş sağlamak</li>
              <li>Web sitesi güvenliğini sağlamak</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">3. Bilgi Güvenliği</h4>

            <p className="leading-relaxed">
              Kişisel verilerinizin korunması için teknik ve idari güvenlik
              önlemleri uygulanmaktadır.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">
              4. Üçüncü Taraf Bağlantılar
            </h4>

            <p className="leading-relaxed">
              Web sitemizde üçüncü taraf sitelere bağlantılar bulunabilir. Bu
              sitelerin gizlilik uygulamalarından firmamız sorumlu değildir.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">
              5. Politika Güncellemeleri
            </h4>

            <p className="leading-relaxed">
              Bu gizlilik politikası gerekli görüldüğünde güncellenebilir.
              Güncellenmiş metin web sitesinde yayımlandığı anda yürürlüğe
              girer.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
