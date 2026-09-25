"use client";

import { useState } from "react";
import { categories, portfolioItems, type CategoryId } from "@/lib/data";
import CategoryTag from "@/components/CategoryTag";

export default function PortfolioGrid({
  initialFilter,
}: {
  initialFilter?: CategoryId;
}) {
  const [active, setActive] = useState<CategoryId | "all">(
    initialFilter ?? "all"
  );

  const filtered =
    active === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        <FilterButton
          label="Semua"
          isActive={active === "all"}
          onClick={() => setActive("all")}
        />
        {categories.map((c) => (
          <FilterButton
            key={c.id}
            label={c.short}
            colorVar={c.colorVar}
            isActive={active === c.id}
            onClick={() => setActive(c.id)}
          />
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((item) => {
          const category = categories.find((c) => c.id === item.category)!;
          return (
            <article
              key={item.slug}
              className="group rounded-none border border-line p-6 transition-colors hover:border-paper-dim"
            >
              <div
                className="mb-4 h-1 w-10"
                style={{ background: category.colorVar }}
                aria-hidden
              />
              <h3 className="font-display text-xl leading-snug text-paper">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-paper-dim">{item.summary}</p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-xs text-paper-dim">
                <CategoryTag id={item.category} />
                <span>
                  {item.role} · {item.year}
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-paper-dim">Belum ada karya di kategori ini.</p>
      )}
    </div>
  );
}

function FilterButton({
  label,
  colorVar,
  isActive,
  onClick,
}: {
  label: string;
  colorVar?: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`focus-ring flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-colors ${
        isActive
          ? "border-paper bg-paper text-ink"
          : "border-line text-paper-dim hover:border-paper-dim hover:text-paper"
      }`}
    >
      {colorVar && (
        <span
          className="h-2 w-2 rounded-full"
          style={{ background: colorVar }}
          aria-hidden
        />
      )}
      {label}
    </button>
  );
}
