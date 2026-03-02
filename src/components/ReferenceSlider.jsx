import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function ReferenceSlider({ references }) {
  return (
    <div className="mb-20">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        breakpoints={{
          375: { slidesPerView: 1 },
          425: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1440: { slidesPerView: 5 },
          2560: { slidesPerView: 7 },
        }}
      >
        {references.map((ref, index) => (
          <SwiperSlide key={`${ref.id}-${index}`}>
            <div
              className="
              bg-white 
              rounded-2xl 
              w-50 
              h-50 
              border border-white/60
              flex items-center justify-center
              transition-transform 
              duration-500
              hover:scale-125
              "
            >
              <img
                src={ref.image}
                alt={ref.referenceName}
                className="max-h-20 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
