import { Link } from "react-router";
import Navbar from "../components/Navbar.jsx";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <section className="relative h-180 flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('src/images/hero-bg.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30"></div>
        <div className="" >
          <div>
            <span className="absolute text-xs ">
              <Link to="/" className="hover:text-white/80 cursor-pointer">
                Ana Sayfa >
              </Link>
              <span className="text-red-900"> Blog</span>
            </span>
              <h2>Lojistik Dünyasından Bilgiler ve Rehberler</h2>
              <p>Taşımacılık, depolama ve lojistik süreçlerine dair merak ettiğiniz tüm konuları blogumuzda bulabilirsiniz. Öz Bandırma Nakliyat olarak; sektördeki deneyimimizi paylaşarak nakliye süreçleri, güvenli taşımacılık yöntemleri, doğru planlama ve operasyon yönetimi gibi başlıklarda bilgilendirici içerikler sunuyoruz.

Amacımız; müşterilerimizin lojistik süreçlerini daha bilinçli, daha planlı ve daha verimli yönetmelerine katkı sağlamaktır.</p>
          </div>
        </div>
      </section>
    </>
  );
}
