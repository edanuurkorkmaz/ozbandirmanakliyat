import { services } from "../data/ServicesData";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <section className="bg-neutral-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center font-bold text-2xl md:text-4xl mb-16">
          HİZMETLERİMİZ
        </h2>

        {services.map((service) => (
          <div
            key={service.id}
            className="grid md:grid-cols-2 gap-12 items-center mb-24 relative"
          >
            <span className="absolute right-10 top-0 text-[120px] font-bold text-neutral-200 select-none">
              {service.id}
            </span>

            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl object-cover w-full h-105"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>

              <p className="text-neutral-600 mb-6">{service.description}</p>

              <h4 className="font-semibold mb-4">Dahil olan hizmetler:</h4>

              <ul className="space-y-3">
                {service.includes.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-neutral-700"
                  >
                    <Check size={18} className="text-neutral-800" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
