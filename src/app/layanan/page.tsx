import Link from "next/link";
import { categories, services } from "@/lib/data";

export default function LayananPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-4xl italic text-paper">Layanan</h1>
      <p className="mt-3 max-w-md text-paper-dim">
        Bisa dipesan satuan, atau digabung kalau proyek kamu butuh beberapa
        keahlian sekaligus.
      </p>

      <div className="mt-12 flex flex-col gap-14">
        {categories.map((category) => {
          const categoryServices = services.filter(
            (s) => s.category === category.id
          );
          return (
            <div key={category.id}>
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: category.colorVar }}
                  aria-hidden
                />
                <h2 className="font-display text-2xl text-paper">
                  {category.label}
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {categoryServices.map((service) => (
                  <div
                    key={service.id}
                    className="flex flex-col justify-between border border-line p-5"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-paper">{service.title}</h3>
                        <span className="shrink-0 text-sm text-paper-dim">
                          {service.startingPrice}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-paper-dim">
                        {service.description}
                      </p>
                      <ul className="mt-4 flex flex-col gap-1 text-xs text-paper-dim">
                        {service.deliverables.map((d) => (
                          <li key={d}>· {d}</li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`/booking?service=${service.id}`}
                      className="focus-ring mt-5 inline-block rounded-full border border-line px-4 py-2 text-center text-xs text-paper transition-colors hover:border-paper-dim"
                    >
                      Booking layanan ini
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
