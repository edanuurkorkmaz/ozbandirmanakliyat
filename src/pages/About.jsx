import { Link } from "react-router";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import heroBg from "../images/hero-bg.jpeg";
import aboutImage from "../images/container.png";
import { Gem, Rocket, View } from "lucide-react";

export default function About() {
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
          <span className="text-xs mb-4 text-gray-300">
            <Link to="/" className="hover:text-white/80 cursor-pointer">
              Ana Sayfa
            </Link>
            <span className="mx-2">{">"}</span>
            <span className="text-red-900">Hakkımızda</span>
          </span>

          <h2 className="font-bold text-4xl md:text-6xl mb-6">Hakkımızda</h2>
        </div>
      </section>

      <section className="py-20 bg-neutral-100 ">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          <div className=" rounded-xl hover:shadow-lg transition flex justify-center text-center items-center gap-5 p-4">
            <div className="bg-white p-5 flex-col items-center justify-items-center ">
              <View className="text-[#3C303F] mb-2" size={80} />
              <h3 className="text-2xl font-bold mb-3 text-[#3C303F]">
                Vizyonumuz
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Lojistik komisyonculuk alanında güvenilirliği, hız ve verimlilik
                ile birleştirerek Türkiye genelinde tercih edilen öncü çözüm
                ortaklarından biri olmak. Teknolojiyi ve sektörel gelişmeleri
                yakından takip ederek, üretici ve taşıyıcılar arasında en doğru
                eşleşmeyi sağlayan güçlü bir lojistik ağı oluşturmak.
              </p>
            </div>
            <div className="bg-white p-5  flex-col items-center justify-items-center">
              <Rocket className="text-[#3C303F] mb-2" size={80} />
              <h3 className="text-2xl font-bold mb-3 text-[#3C303F]">
                Misyonumuz
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Yük sahipleri ile taşıyıcıları en doğru şekilde buluşturarak,
                sevkiyat süreçlerini hızlı, güvenilir ve maliyet avantajlı hale
                getirmek. Şeffaf iletişim, doğru planlama ve sürdürülebilir iş
                ortaklıkları ile müşterilerimize katma değer sağlayan lojistik
                çözümler sunmak.
              </p>
            </div>
            <div className="bg-white  p-5  flex-col items-center justify-items-center">
              <Gem className="text-[#3C303F] mb-2" size={80} />
              <h3 className="text-2xl font-bold mb-3 text-[#3C303F]">
                Değerlerimiz
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Güven, şeffaflık ve profesyonellik temel değerlerimizi
                oluşturur. Üretici ve taşıyıcılar arasında dürüst ve açık
                iletişimle süreçleri doğru planlar, verimli çözümler sunarız.
                Müşteri odaklı yaklaşımımızla her işte değer yaratmayı ve uzun
                vadeli iş birlikleri kurmayı hedefleriz.
              </p>
            </div>
          </div>
          <div className="flex gap-6 justify-center items-center">
            <img
              className="rounded-xl object-cover w-full h-105"
              src={aboutImage}
              alt="konteyner"
            />
            <div>
              <h3 className=" font-bold text-[#3C303F] text-2xl md:text-4xl mb-8">
                Hikayemiz
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Bandırma merkezli lojistik komisyonculuk hizmeti sunan firmamız,
                üretici firmalar ile taşıyıcılar arasında güvenilir bir köprü
                oluşturarak yüklerin en doğru, hızlı ve ekonomik şekilde
                taşınmasını sağlamaktadır.
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                Fabrikalardan çıkan ürünlerin doğru araçlarla, doğru zamanda ve
                doğru rotalarla sevk edilmesi için profesyonel planlama yapar;
                sürecin her aşamasını titizlikle yönetiriz. Geniş taşıyıcı
                ağımız sayesinde müşterilerimize esnek ve sürdürülebilir
                lojistik çözümler sunmaktayız.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Lojistik sektöründeki saha tecrübemizle başladığımız bu
                yolculukta, üretici firmaların taşıma süreçlerinde yaşadığı
                zorlukları yakından gözlemledik. Bu ihtiyaçtan yola çıkarak,
                taşıma sürecini organize eden, hızlandıran ve maliyetleri
                optimize eden bir yapı kurduk.
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                Bugün, birçok fabrika ve tedarikçi için güvenilir bir çözüm
                ortağı olarak, yük organizasyonu ve taşıyıcı koordinasyonu
                alanında aktif olarak hizmet vermeye devam ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
