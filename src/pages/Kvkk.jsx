import { Link } from "react-router";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import heroBg from "../images/hero-bg.jpeg";

export default function Kvkk() {
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
            <span className="text-xs mb-4 text-gray-300 ">
              <Link to="/" className="hover:text-white/80 cursor-pointer">
                Ana Sayfa
              </Link>
              <span className="mx-2">{">"}</span>
              <span className="text-red-900"> KVKK Aydınlatma Metni</span>
            </span>
            <h2 className="font-bold text-4xl md:text-6xl mb-6 text-white">
              KVKK Aydınlatma Metni
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-gray-700 space-y-10">
          <div>
            <h3 className="text-3xl font-bold text-[#3C303F] mb-4">
              Öz Bandırma Nakliyat Lojistik Kişisel Verilerin Korunması ve
              İşlenmesi Aydınlatma Metni
            </h3>

            <p className="leading-relaxed">
              <strong>Öz Bandırma Nakliyat Lojistik</strong> olarak 6698 sayılı
              Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında kişisel
              verilerinizin korunmasına önem vermekteyiz. Bu aydınlatma metni,
              web sitemiz aracılığıyla toplanan kişisel verilerin hangi
              amaçlarla işlendiği ve haklarınız hakkında sizi bilgilendirmek
              amacıyla hazırlanmıştır.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">1. Veri Sorumlusu</h4>
            <p className="leading-relaxed">
              İşbu aydınlatma metni kapsamında veri sorumlusu:
            </p>

            <p className="mt-3 leading-relaxed">
              <strong>Öz Bandırma Nakliyat Lojistik</strong>
              <br />
              Web Sitesi: https://www.ozbandirmanakliyat.com
              <br />
              E-posta: ozbandirmanakliyat10@gmail.com
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">
              2. İşlenen Kişisel Veriler
            </h4>

            <ul className="list-disc pl-6 space-y-1">
              <li>Ad ve soyad</li>
              <li>Telefon numarası</li>
              <li>E-posta adresi</li>
              <li>IP adresi</li>
              <li>Site kullanım bilgileri</li>
              <li>İletişim formu aracılığıyla gönderilen mesajlar</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">
              3. Kişisel Verilerin İşlenme Amaçları
            </h4>

            <ul className="list-disc pl-6 space-y-1">
              <li>Teklif ve bilgi taleplerinin yanıtlanması</li>
              <li>Lojistik ve taşımacılık hizmetlerinin sunulması</li>
              <li>Müşteri ilişkilerinin yürütülmesi</li>
              <li>Web sitesinin güvenliğinin sağlanması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">
              4. Kişisel Verilerin Aktarılması
            </h4>

            <p className="leading-relaxed">
              Kişisel verileriniz aşağıdaki taraflara KVKK hükümleri
              çerçevesinde aktarılabilir:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Yetkili kamu kurum ve kuruluşlarına</li>
              <li>Hizmet sağlayıcı iş ortaklarımıza</li>
              <li>Kanunen yetkili özel kişilere</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">
              5. Veri Toplama Yöntemi ve Hukuki Sebep
            </h4>

            <p className="leading-relaxed">
              Kişisel verileriniz aşağıdaki yollarla otomatik veya otomatik
              olmayan yöntemlerle toplanabilir:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Web sitesi iletişim formları</li>
              <li>E-posta iletişimi</li>
              <li>Çerezler ve analiz araçları</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">
              6. KVKK Kapsamındaki Haklarınız
            </h4>

            <p className="leading-relaxed">
              KVKK’nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse bilgi talep etme</li>
              <li>Verilerin düzeltilmesini veya silinmesini isteme</li>
              <li>İşlenmesine itiraz etme</li>
            </ul>

            <p className="mt-4">
              KVKK’nın 11. maddesi kapsamındaki haklarınıza ilişkin
              taleplerinizi
              <span className="font-semibold">
                ozbandirmanakliyat10@gmail.com
              </span>{" "}
              adresine iletebilirsiniz.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
