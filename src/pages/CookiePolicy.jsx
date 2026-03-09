import { Link } from "react-router";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function CookiePolicy() {
  return (
    <>
      <Navbar />
      <section className="relative h-180 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/src/images/hero-bg.jpeg')",
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
              <span className="text-red-900">Çerez Politikası</span>
            </span>

            <h2 className="font-bold text-4xl md:text-6xl mb-6 text-white">
              Çerez Politikası
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-gray-700 space-y-10">
          <div>
            <h3 className="text-3xl font-bold text-[#3C303F] mb-4">
              Öz Bandırma Nakliyat Lojistik – Çerez Politikası
            </h3>

            <p className="leading-relaxed">
              Web sitemiz, kullanıcı deneyimini geliştirmek, site performansını
              analiz etmek ve hizmetlerimizi iyileştirmek amacıyla çerezler
              kullanmaktadır. Çerezler, ziyaret ettiğiniz web siteleri
              tarafından cihazınıza kaydedilen küçük veri dosyalarıdır.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">1. Çerez Nedir?</h4>

            <p className="leading-relaxed">
              Çerezler, internet sitesinin düzgün çalışmasını sağlamak ve
              kullanıcı tercihlerini hatırlamak amacıyla tarayıcınız
              aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">
              2. Kullanılan Çerez Türleri
            </h4>

            <div className="space-y-4">
              <div>
                <p className="font-semibold">Zorunlu Çerezler</p>
                <p className="text-sm">
                  Web sitesinin düzgün çalışması için gereklidir.
                </p>
              </div>

              <div>
                <p className="font-semibold">Performans ve Analiz Çerezleri</p>
                <p className="text-sm">
                  Site kullanımını analiz ederek hizmetlerimizi geliştirmemizi
                  sağlar.
                </p>
              </div>

              <div>
                <p className="font-semibold">Fonksiyonel Çerezler</p>
                <p className="text-sm">
                  Kullanıcı tercihlerini hatırlayarak siteyi kişiselleştirir.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">
              3. Çerezlerin Yönetimi
            </h4>

            <p className="leading-relaxed">
              Tarayıcı ayarlarınızı değiştirerek çerezleri kabul edebilir,
              reddedebilir veya silebilirsiniz.
            </p>

            <p className="mt-3 leading-relaxed">
              Tarayıcı ayarları üzerinden çerezleri devre dışı bırakmanız
              durumunda web sitesinin bazı bölümleri düzgün çalışmayabilir.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">
              4. Politika Güncellemeleri
            </h4>

            <p className="leading-relaxed">
              Çerez politikası zaman zaman güncellenebilir. Güncellenen metin
              web sitesinde yayımlandığı anda yürürlüğe girer.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
