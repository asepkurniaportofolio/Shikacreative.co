import Link from "next/link";
import Image from "next/image";
import { featuredFilm, portfolioItems, profile } from "@/lib/data";
import CategoryTag from "@/components/CategoryTag";

export default function Home() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div className="relative z-10">
            <p className="eyebrow">Shika Creative / {profile.location}</p>
            <p className="mt-16 max-w-xs text-sm leading-6 text-paper-dim sm:mt-24">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/portofolio" className="focus-ring rounded-full bg-paper px-5 py-3 text-sm text-ink transition-transform hover:scale-[1.02]">
                Lihat karya
              </Link>
              <Link href="/booking" className="focus-ring rounded-full border border-line px-5 py-3 text-sm text-paper transition-colors hover:border-paper-dim">
                Mulai proyek
              </Link>
            </div>
          </div>

          <div className="relative min-h-[25rem] border-l border-line pl-6 sm:min-h-[31rem] sm:pl-12 lg:grid lg:grid-cols-[1fr_42%] lg:gap-8">
            <div className="relative z-10">
              <div className="film-mark" aria-hidden="true">SC</div>
              <p className="eyebrow"><span className="jp-label">作品紹介</span> / Film 01</p>
              <h1 className="mt-8 max-w-xl font-display text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.88] tracking-[-0.04em] text-paper">
                {featuredFilm.title}
              </h1>
              <div className="mt-8 flex items-end justify-between gap-6 border-t border-line pt-4">
                <div>
                  <p className="font-display text-xl italic text-paper">{featuredFilm.romanizedTitle}</p>
                  <p className="mt-2 text-sm text-paper-dim">{featuredFilm.subtitle}</p>
                </div>
                <span className="hidden text-right text-xs uppercase tracking-[0.18em] text-paper-dim sm:block">{featuredFilm.genre}</span>
              </div>
            </div>
            <Image
              src="https://shiori-kagawa.vercel.app/poster.jpg"
              alt="Poster film Eien ni Anata no Mono"
              width={720}
              height={960}
              className="film-poster"
            />
          </div>
        </div>
        <div className="film-glow" aria-hidden="true" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="eyebrow"><span className="jp-label">献呈</span> / Tentang film</p>
          <p className="mt-5 max-w-xs font-display text-2xl italic leading-snug text-paper">{featuredFilm.credit}</p>
        </div>
        <div>
          <p className="max-w-2xl font-display text-3xl leading-tight text-paper sm:text-5xl">{featuredFilm.description}</p>
          <Link href="/portofolio" className="focus-ring mt-8 inline-flex rounded-full border border-line px-5 py-3 text-sm text-paper transition-colors hover:border-paper-dim">
            Jelajahi karya <span className="ml-3" aria-hidden>↗</span>
          </Link>
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow"><span className="jp-label">記録</span> / Arsip kreatif</p>
            <h2 className="mt-3 font-display text-3xl italic text-paper">Karya terbaru</h2>
          </div>
          <Link
            href="/portofolio"
            className="focus-ring rounded text-sm text-paper-dim hover:text-paper"
          >
            Semua karya →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {featured.map((item) => (
            <article key={item.slug} className="work-card border border-line p-5">
              <span className="text-xs text-paper-dim">0{featured.indexOf(item) + 1} / {item.year}</span>
              <h3 className="mt-12 font-display text-lg leading-snug text-paper">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-paper-dim">{item.summary}</p>
              <div className="mt-4">
                <CategoryTag id={item.category} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line px-6 py-20 sm:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <h2 className="max-w-lg font-display text-4xl leading-tight text-paper sm:text-6xl">
            Ide yang baik layak mendapat ruang untuk tumbuh.
          </h2>
          <Link
            href="/booking"
            className="focus-ring shrink-0 rounded-full bg-paper px-6 py-3 text-sm text-ink transition-transform hover:scale-[1.02]"
          >
            Ceritakan proyek kamu
          </Link>
        </div>
      </section>
    </>
  );
}
