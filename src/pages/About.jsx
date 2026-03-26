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

      <section className="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full">
          <span className="text-xs md:text-sm mb-4 text-gray-300 block">
            <Link to="/" className="hover:text-white/80">
              Ana Sayfa
            </Link>
            <span className="mx-2">{">"}</span>
            <span className="text-red-900">Hakkımızda</span>
          </span>

          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl">
            Hakkımızda
          </h2>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12 md:space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition">
              <View className="text-[#3C303F] mb-4 mx-auto" size={60} />
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#3C303F]">
                Vizyonumuz
              </h3>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                Lojistik komisyonculuk alanında güvenilirliği, hız ve verimlilik
                ile birleştirerek Türkiye genelinde tercih edilen öncü çözüm
                ortaklarından biri olmak.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition">
              <Rocket className="text-[#3C303F] mb-4 mx-auto" size={60} />
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#3C303F]">
                Misyonumuz
              </h3>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                Yük sahipleri ile taşıyıcıları en doğru şekilde buluşturarak,
                sevkiyat süreçlerini hızlı ve güvenilir hale getirmek.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-lg transition">
              <Gem className="text-[#3C303F] mb-4 mx-auto" size={60} />
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#3C303F]">
                Değerlerimiz
              </h3>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                Güven, şeffaflık ve profesyonellik temel değerlerimizi
                oluşturur.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <img
              className="rounded-xl object-cover w-full h-62.5 md:h-87.5 lg:h-100"
              src={aboutImage}
              alt="konteyner"
            />

            <div className="text-center lg:text-left">
              <h3 className="font-bold text-[#3C303F] text-2xl md:text-3xl lg:text-4xl mb-6">
                Hikayemiz
              </h3>

              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                Bandırma merkezli lojistik komisyonculuk hizmeti sunan firmamız,
                üretici firmalar ile taşıyıcılar arasında güvenilir bir köprü
                oluşturmaktadır.
              </p>

              <p className="text-sm md:text-base text-neutral-600 leading-relaxed mt-4">
                Fabrikalardan çıkan ürünlerin doğru araçlarla sevk edilmesi için
                profesyonel planlama yaparız.
              </p>

              <p className="text-sm md:text-base text-neutral-600 leading-relaxed mt-4">
                Geniş taşıyıcı ağımız sayesinde müşterilerimize esnek çözümler
                sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
