export default function Services() {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-bold text-xl md:text-3xl mb-12 text-[#fafafaa1]">
          HİZMETLERİMİZ
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-yellow-500 transition">
            <h3 className="text-lg font-semibold text-white mb-3">
              Karayolu Taşımacılığı
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Öz Bandırma Nakliyat olarak şehir içi ve şehirler arası karayolu
              taşımacılığı hizmetlerimizle yüklerinizi güvenli, hızlı ve
              zamanında teslim ediyoruz. Modern araç filomuz ve deneyimli
              ekibimiz sayesinde farklı tonaj ve ölçülerdeki yükler profesyonel
              şekilde taşınmaktadır.
            </p>
          </li>
          <li className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-yellow-500 transition">
            <h3 className="text-lg font-semibold text-white mb-3">
              Denizyolu Taşımacılığı
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Bandırma’nın stratejik liman avantajını kullanarak denizyolu
              taşımacılığı çözümleri sunuyoruz. Büyük hacimli ve uzun mesafeli
              yükler için ekonomik ve güvenilir lojistik planlaması yaparak
              süreçleri baştan sona yönetiyoruz.
            </p>
          </li>
          <li className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-yellow-500 transition">
            <h3 className="text-lg font-semibold text-white mb-3">
              Depolama Hizmetleri
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Kısa ve uzun süreli depolama ihtiyaçlarınız için güvenli depo
              alanları sağlıyoruz. Ürünleriniz düzenli, kontrollü ve korunaklı
              ortamlarda saklanarak sevkiyata hazır halde tutulur.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
