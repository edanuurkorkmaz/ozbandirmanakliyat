export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('src/images/hero-bg.jpeg')",
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
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition cursor-pointer">
            Teklif Al
          </button>
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition cursor-pointer">
            İletişime Geç
          </button>
        </div>
      </div>
    </section>
  );
}
