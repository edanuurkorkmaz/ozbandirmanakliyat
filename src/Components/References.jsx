import { references } from "../data/references.js";
import ReferenceSlider from "./ReferenceSlider.jsx";

export default function References() {
  return (
    <section id="references" className="bg-neutral-100 py-20">
      <div className="relative flex flex-col items-center">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-4xl text-[#3C303F] md:text-6xl mt-20 mb-12">
            Birlikte değer ürettiğimiz markalar
          </h4>

          <p className="text-black/30 text-xl mb-20">
            Müşterilerimizin lojistik süreçlerini derinlemesine analiz ederek,
            her projede operasyonel verimlilik ve zamanında teslimat hedeflerine
            ulaşmalarını destekliyoruz. Akıllı çözümlerimiz ve dijital
            araçlarımız sayesinde, şeffaf iletişim ve veri odaklı yaklaşım ile
            güvene dayalı, uzun vadeli iş birlikleri inşa ediyoruz.
          </p>
        </div>
      </div>
      <ReferenceSlider references={references} />
    </section>
  );
}
