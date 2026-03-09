import {
  MapPin,
  PhoneIcon,
  MailIcon,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-2 py-14 grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:justify-items-center">
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">
            Öz Bandırma Nakliyat
          </h2>
          <p className="text-sm leading-relaxed">
            Türkiye genelinde güvenilir taşımacılık ve lojistik çözümleri
            sunarak müşterilerimizin operasyonlarını hızlı ve güvenli şekilde
            yönetmelerine destek oluyoruz.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4"> Hizmetler</h3>
          <ul className="space-y-2 text-sm">
            <li>Karayolu Taşımacılığı</li>
            <li>Denizyolu Taşımacılığı</li>
            <li>Depolama, Antrepo Hizmetleri</li>
            <li>Lojistik Destek Hizmetleri</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Hızlı Linkler</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="hover:text-white" to="/">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/hakkimizda">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/hizmetler">
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/iletisim">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <PhoneIcon size={16} className="shrink-0" />
                <span> +90 542 344 91 20</span>
              </li>
              <li className="flex items-center  gap-2">
                <MailIcon size={16} className="shrink-0" />
                <span> ozbandirmanakliyat10@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-700 mt-5">
            <h3 className="text-white font-semibold mb-4 mt-5">
              Bizi Takip Edin
            </h3>
            <ul className="space-y-2 flex gap-5 text-sm">
              <li className="flex items-center gap-2">
                <a
                  className="hover:text-white"
                  target="_blank"
                  href="https://www.facebook.com/oz.bandirma.nakliyat.lojistik/"
                >
                  <Facebook size={22} className="shrink-0" />
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  className="hover:text-white"
                  target="_blank"
                  href="https://www.linkedin.com/company/%C3%B6z-band%C4%B1rma-nakliyat/"
                >
                  <Linkedin size={22} className="shrink-0" />
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  className="hover:text-white"
                  target="_blank"
                  href="https://www.instagram.com/ozbandirmanakliyatlojistik/"
                >
                  <Instagram size={22} className="shrink-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Konum</h3>

          <div className="rounded-xl overflow-hidden border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.2011375508737!2d28.002378589948545!3d40.31569338819449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b5d50b84ccbf5d%3A0xbefa013765637047!2s%C3%96z%20Band%C4%B1rma%20Nakliyat%20Lojistik!5e0!3m2!1str!2str!4v1773046756908!5m2!1str!2str"
              loading="lazy"
              className="w-full h-40"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-3 text-sm flex items-start gap-2">
            <MapPin size={16} className="shrink-0" />
            Bandırma / Balıkesir
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p>
            © {new Date().getFullYear()} Öz Bandırma Nakliyat. Tüm hakları
            saklıdır.
          </p>

          <div className="flex gap-6">
            <Link to="/kvkk-aydinlatma-metni" className="hover:text-white">
              KVKK
            </Link>

            <Link to="/gizlilik-politikasi" className="hover:text-white">
              Gizlilik Politikası
            </Link>

            <Link to="/cerez-politikasi" className="hover:text-white">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
