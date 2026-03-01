import { references } from "../data/references";

export default function References() {
  return (
    <section id="references" className="bg-neutral-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center font-bold text-2xl md:text-4xl mb-16">
          Referanslarımız
        </h2>
        {references.map((ref) => (
          <div>
            <img
              src={ref.image}
              alt={ref.referenceName}
              className="max-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
