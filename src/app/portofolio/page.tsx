import PortfolioGrid from "@/components/PortfolioGrid";
import type { CategoryId } from "@/lib/data";

const validCategories: CategoryId[] = ["video", "design", "fashion", "dev"];

export default async function PortofolioPage({
  searchParams,
}: PageProps<"/portofolio">) {
  const params = await searchParams;
  const filterParam = Array.isArray(params.filter)
    ? params.filter[0]
    : params.filter;
  const initialFilter = validCategories.includes(filterParam as CategoryId)
    ? (filterParam as CategoryId)
    : undefined;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-4xl italic text-paper">Portofolio</h1>
      <p className="mt-3 max-w-md text-paper-dim">
        Kumpulan proyek dari empat medium yang saya kerjakan.
      </p>
      <div className="mt-10">
        <PortfolioGrid initialFilter={initialFilter} />
      </div>
    </section>
  );
}
