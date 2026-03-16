import { MessageCircleCheck } from "lucide-react";
import heroBg from "../images/hero-bg.jpeg";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center  "
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30"></div>

      <div className="relative z-10 max-w-5xl text-center px-6">
        <h2 className="font-bold text-2xl md:text-4xl mb-6 text-[#fafafaa1] ">
          ÖZ BANDIRMA NAKLİYAT
        </h2>
        <h1 className="font-bold text-4xl md:text-6xl mb-6 ">
          Geniş Taşıyıcı Ağı ile Lojistik Çözümler
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Güvenilir taşıyıcı iş ortaklarımız ve güçlü operasyon ağımızla kara ve
          denizyolu taşımacılığı süreçlerinizi planlıyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/905423449120?text=Merhaba%20nakliye%20teklifi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 inline-flex gap-2 items-center bg-white text-gray-800 font-semibold rounded-lg hover:bg-black/60 hover:text-white transition cursor-pointer"
          >
            <MessageCircleCheck size={20} />
            WhatsApp ile İletişime Geç
          </a>
        </div>
      </div>
    </section>
  );
}
