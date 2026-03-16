import {
  Facebook,
  Instagram,
  Linkedin,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import contactFormImage from "../images/contactFormImage.jpeg";

export default function ContactForm() {
  return (
    <section
      id="contactForm"
      className="bg-neutral-100 py-20 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 px-6">
        <div
          className="relative bg-cover bg-center rounded-xl px-8 py-16 overflow-hidden"
          style={{
            backgroundImage: `url(${contactFormImage})`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Bizimle İletişime Geçin
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Taşımacılık ve lojistik hizmetlerimiz hakkında detaylı bilgi almak
              veya teklif talebinde bulunmak için bizimle iletişime
              geçebilirsiniz.
            </p>
            <ul className="space-y-2 text-md text-white mt-10">
              <li className="flex items-center gap-2">
                <PhoneIcon size={16} className="shrink-0" />
                <span> +90 542 344 91 20</span>
              </li>
              <li className="flex items-center  gap-2">
                <MailIcon size={16} className="shrink-0" />
                <span> ozbandirmanakliyat10@gmail.com</span>
              </li>
            </ul>
            <div className="border-t border-gray-700 mt-5">
              <h3 className="text-white font-semibold mb-4 mt-5">
                Bizi Takip Edin
              </h3>
              <ul className="space-y-2  flex gap-5 text-sm">
                <li className="flex items-center bg-gray-700 rounded-full hover:bg-white hover:text-black text-white w-8 h-8 justify-center gap-2">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/oz.bandirma.nakliyat.lojistik/"
                  >
                    <Facebook size={22} className="shrink-0" />
                  </a>
                </li>
                <li className="flex items-center bg-gray-700 rounded-full text-white hover:bg-white hover:text-black w-8 h-8 justify-center  gap-2">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/%C3%B6z-band%C4%B1rma-nakliyat/"
                  >
                    <Linkedin size={22} className="shrink-0" />
                  </a>
                </li>
                <li className="flex items-center bg-gray-700 rounded-full text-white hover:bg-white hover:text-black w-8 h-8 justify-center gap-2">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/ozbandirmanakliyatlojistik/"
                  >
                    <Instagram size={22} className="shrink-0" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>

        <div className="bg-white rounded-xl px-8 py-16">
          <form className="max-w-xl space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#3C303F]">
                  Adınız
                </label>
                <input
                  type="text"
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#3C303F]">
                  Soyadınız
                </label>
                <input
                  type="text"
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#3C303F]">
                Şirket Adı / Bireysel
              </label>
              <input
                type="text"
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#3C303F]">
                Email
              </label>
              <input
                type="email"
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#3C303F]">
                Telefon Numaranız
              </label>
              <input
                type="tel"
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#3C303F]">
                Mesajınız
              </label>
              <textarea
                rows="4"
                className="mt-2 resize-none block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-indigo-500"
              />
            </div>

            <button className="w-full bg-[#3C303F] cursor-pointer hover:bg-gray-800 text-white py-3 rounded-md font-semibold transition">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
