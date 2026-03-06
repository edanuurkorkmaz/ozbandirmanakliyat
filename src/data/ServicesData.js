import truck from "../images/truck.jpg";
import ship from "../images/ship.jpg";
import depo from "../images/depo.jpg";

export const services = [
  {
    id: 1,
    title: "Karayolu Taşımacılığı",
    subtitle:
      "Türkiye genelinde şehirler arası güvenli karayolu taşımacılığı hizmeti sunuyoruz.",
    description:
      "Müşterilerimizin yüklerini, anlaşmalı taşıyıcı ağımız üzerinden en uygun araç ve güzergâh planlamasıyla organize ediyoruz. Taşıma sürecini baştan sona takip ederek yüklerin zamanında ve güvenli şekilde teslim edilmesini sağlıyoruz.",
    image: truck,
    includes: [
      "Komple ve parsiyel taşımacılık",
      "Ağır yük taşımacılığı",
      "Kısa ve uzun mesafe sevkiyat",
      "Planlı teslimat süreçleri",
    ],
  },
  {
    id: 2,
    title: "Denizyolu Taşımacılığı",
    subtitle:
      "Büyük hacimli yükler için ekonomik ve güvenilir denizyolu taşımacılığı çözümleri sunuyoruz.",
    description:
      "Denizyolu taşımalarında yüklerinize uygun konteyner ve taşıma planlamasını yaparak süreci profesyonel şekilde organize ediyoruz. Liman operasyonları ve sevkiyat süreçleri koordineli şekilde yönetilir.",
    image: ship,
    includes: [
      "Konteyner taşımacılığı",
      "Liman operasyon yönetimi",
      "Ulusal ve uluslararası sevkiyat planlama",
      "Büyük hacimli yük taşımacılığı",
    ],
  },
  {
    id: 3,
    title: "Depolama, Antrepo ve Lojistik Destek Hizmetleri",
    subtitle: "Esnek depolama ve sevkiyat destek çözümleri",
    description:
      "İhtiyaca göre anlaşmalı depo alanları üzerinden hizmet sunuyor; sevkiyat öncesi tüm lojistik süreçlerin planlı ve güvenli şekilde yönetilmesini sağlıyoruz. Operasyonel ihtiyaçlara uygun depolama çözümleriyle ürünlerinizi güvenle muhafaza ederken, dağıtım süreçlerinin daha verimli ilerlemesine destek oluyoruz.",
    image: depo,
    includes: [
      "Kısa ve uzun süreli depo organizasyonu",
      "Antrepo ve gümrüklü depolama hizmetleri",
      "Kuru depolama çözümleri",
      "Sevkiyat öncesi yük planlama",
      "Stok ve yük yönlendirme desteği",
      "Güvenli depolama çözümleri",
    ],
  },
];
