export type CategoryId = "video" | "design" | "fashion" | "dev";

export interface Category {
  id: CategoryId;
  label: string;
  short: string;
  colorVar: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "video",
    label: "Video editing",
    short: "Video",
    colorVar: "var(--accent-video)",
    description: "Motion, ritme, dan cerita — dari konten sosial sampai film pendek.",
  },
  {
    id: "design",
    label: "Desain grafis",
    short: "Desain",
    colorVar: "var(--accent-design)",
    description: "Identitas visual, layout, dan sistem desain yang konsisten.",
  },
  {
    id: "fashion",
    label: "Fashion design",
    short: "Fashion",
    colorVar: "var(--accent-fashion)",
    description: "Dari sketsa moodboard sampai koleksi siap produksi.",
  },
  {
    id: "dev",
    label: "Web development",
    short: "Web",
    colorVar: "var(--accent-dev)",
    description: "Website cepat, rapi, dan gampang diurus sendiri.",
  },
];

export interface PortfolioItem {
  slug: string;
  title: string;
  category: CategoryId;
  year: string;
  role: string;
  summary: string;
  tools: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "senja-di-kota",
    title: "Senja di Kota — video musik indie",
    category: "video",
    year: "2025",
    role: "Editor & colorist",
    summary:
      "Video musik untuk band indie lokal, dipotong mengikuti tempo lagu dengan grading warm-desaturated.",
    tools: ["Premiere Pro", "DaVinci Resolve"],
  },
  {
    slug: "ombak-brand-film",
    title: "Ombak Coffee — brand film",
    category: "video",
    year: "2024",
    role: "Editor",
    summary: "Film pendek profil brand kopi lokal untuk peluncuran toko kedua.",
    tools: ["Premiere Pro", "After Effects"],
  },
  {
    slug: "kertas-identity",
    title: "Kertas Studio — identitas visual",
    category: "design",
    year: "2025",
    role: "Brand designer",
    summary:
      "Logo, palet warna, dan sistem tipografi untuk studio percetakan independen.",
    tools: ["Figma", "Illustrator"],
  },
  {
    slug: "arisan-poster-series",
    title: "Seri poster festival musik Arisan",
    category: "design",
    year: "2024",
    role: "Graphic designer",
    summary: "6 poster event dengan satu sistem grid yang bisa dipakai ulang tiap edisi.",
    tools: ["Illustrator", "Photoshop"],
  },
  {
    slug: "musim-koleksi",
    title: "Musim — koleksi ready-to-wear",
    category: "fashion",
    year: "2025",
    role: "Fashion designer",
    summary:
      "Koleksi 12 look terinspirasi tekstil pesisir, dari moodboard sampai pola produksi.",
    tools: ["Sketsa tangan", "Clo3D"],
  },
  {
    slug: "rimba-capsule",
    title: "Rimba — capsule collection",
    category: "fashion",
    year: "2024",
    role: "Fashion designer",
    summary: "Capsule collection 6 piece dengan material daur ulang untuk brand lokal.",
    tools: ["Sketsa tangan", "Pattern making"],
  },
  {
    slug: "warung-kita-web",
    title: "Warung Kita — situs pemesanan",
    category: "dev",
    year: "2025",
    role: "Front-end developer",
    summary: "Website pemesanan katering dengan menu dinamis dan formulir booking event.",
    tools: ["Next.js", "Tailwind CSS"],
  },
  {
    slug: "portofolio-galeri",
    title: "Situs galeri untuk fotografer",
    category: "dev",
    year: "2024",
    role: "Front-end developer",
    summary: "Portofolio galeri ringan dengan waktu muat cepat dan tampilan lightbox.",
    tools: ["Next.js", "Framer Motion"],
  },
];

export interface Service {
  id: string;
  category: CategoryId;
  title: string;
  description: string;
  startingPrice: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "video-sosial",
    category: "video",
    title: "Edit video konten sosial",
    description: "Reels, TikTok, atau YouTube Shorts yang dipotong rapi mengikuti ritme.",
    startingPrice: "Rp350rb / video",
    deliverables: ["Rough cut untuk revisi", "Color grading dasar", "Subtitle & caption"],
  },
  {
    id: "video-brand",
    category: "video",
    title: "Brand film & dokumenter pendek",
    description: "Video profil brand atau dokumentasi acara durasi 2–5 menit.",
    startingPrice: "Rp2.5jt / video",
    deliverables: ["Struktur cerita", "Color grading penuh", "2x revisi"],
  },
  {
    id: "identitas-visual",
    category: "design",
    title: "Identitas visual",
    description: "Logo, palet warna, tipografi, dan panduan penggunaan singkat.",
    startingPrice: "Rp1.5jt / brand",
    deliverables: ["3 konsep logo", "Brand guideline ringkas", "File source"],
  },
  {
    id: "desain-cetak",
    category: "design",
    title: "Desain materi cetak & digital",
    description: "Poster, feed sosial media, atau materi campaign lainnya.",
    startingPrice: "Rp200rb / desain",
    deliverables: ["2x revisi", "File siap cetak & digital"],
  },
  {
    id: "koleksi-fashion",
    category: "fashion",
    title: "Perancangan koleksi",
    description: "Dari moodboard, sketsa, sampai pola siap produksi untuk brand kamu.",
    startingPrice: "Rp3jt / koleksi kecil",
    deliverables: ["Moodboard & sketsa", "Pola dasar", "Rekomendasi material"],
  },
  {
    id: "konsultasi-fashion",
    category: "fashion",
    title: "Konsultasi desain",
    description: "Sesi konsultasi untuk menajamkan arah desain koleksi yang sedang berjalan.",
    startingPrice: "Rp500rb / sesi",
    deliverables: ["Sesi 90 menit", "Catatan & rekomendasi tertulis"],
  },
  {
    id: "web-profil",
    category: "dev",
    title: "Website profil / portofolio",
    description: "Situs beberapa halaman untuk personal brand atau usaha kecil.",
    startingPrice: "Rp2jt / situs",
    deliverables: ["Desain responsif", "Formulir kontak/booking", "Deploy & domain setup"],
  },
  {
    id: "web-toko",
    category: "dev",
    title: "Situs booking / katalog produk",
    description: "Website dengan katalog, filter, dan formulir pemesanan.",
    startingPrice: "Rp4jt / situs",
    deliverables: ["Katalog dinamis", "Formulir pemesanan", "Panduan pakai singkat"],
  },
];

export const profile = {
  name: "Shika Creative",
  tagline: "Cerita yang tinggal lebih lama.",
  intro:
    "Ruang kreatif milik Shiori Kagawa untuk film, visual, dan cerita-cerita personal yang ingin dirawat dengan penuh perhatian.",
  location: "Bandung, Indonesia",
  email: "halo@shikacreative.id",
  instagram: "@shika.creative",
};

export const featuredFilm = {
  title: "永遠にあなたのもの",
  romanizedTitle: "Eien ni Anata no Mono",
  subtitle: "Untuk Shiori dengan penuh cinta.",
  description:
    "Sebuah film tentang dua perjalanan, kenangan yang tertinggal, dan janji yang belum sempat dituntaskan.",
  genre: "Drama / Romance",
  credit: "A film dedicated to Shiori Kagawa",
};
