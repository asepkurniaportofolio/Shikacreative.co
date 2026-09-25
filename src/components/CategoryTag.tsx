import { categories, type CategoryId } from "@/lib/data";

export default function CategoryTag({ id }: { id: CategoryId }) {
  const category = categories.find((c) => c.id === id)!;
  return (
    <span className="inline-flex items-center gap-2 text-xs text-paper-dim">
      <span
        className="h-2 w-2 rounded-full"
        style={{ background: category.colorVar }}
        aria-hidden
      />
      {category.label}
    </span>
  );
}
