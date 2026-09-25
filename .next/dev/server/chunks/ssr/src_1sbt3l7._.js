module.exports = [
"[project]/src/components/CategoryTag.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryTag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
;
;
function CategoryTag({ id }) {
    const category = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].find((c)=>c.id === id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-2 text-xs text-paper-dim",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-2 w-2 rounded-full",
                style: {
                    background: category.colorVar
                },
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryTag.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            category.label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CategoryTag.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/PortfolioGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategoryTag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CategoryTag.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function PortfolioGrid({ initialFilter }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialFilter ?? "all");
    const filtered = active === "all" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioItems"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioItems"].filter((item)=>item.category === active);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterButton, {
                        label: "Semua",
                        isActive: active === "all",
                        onClick: ()=>setActive("all")
                    }, void 0, false, {
                        fileName: "[project]/src/components/PortfolioGrid.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterButton, {
                            label: c.short,
                            colorVar: c.colorVar,
                            isActive: active === c.id,
                            onClick: ()=>setActive(c.id)
                        }, c.id, false, {
                            fileName: "[project]/src/components/PortfolioGrid.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PortfolioGrid.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 sm:grid-cols-2",
                children: filtered.map((item)=>{
                    const category = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].find((c)=>c.id === item.category);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "group rounded-none border border-line p-6 transition-colors hover:border-paper-dim",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 h-1 w-10",
                                style: {
                                    background: category.colorVar
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioGrid.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-xl leading-snug text-paper",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioGrid.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-paper-dim",
                                children: item.summary
                            }, void 0, false, {
                                fileName: "[project]/src/components/PortfolioGrid.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 flex flex-wrap items-center justify-between gap-2 text-xs text-paper-dim",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategoryTag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        id: item.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PortfolioGrid.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            item.role,
                                            " · ",
                                            item.year
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PortfolioGrid.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PortfolioGrid.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.slug, true, {
                        fileName: "[project]/src/components/PortfolioGrid.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/PortfolioGrid.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-paper-dim",
                children: "Belum ada karya di kategori ini."
            }, void 0, false, {
                fileName: "[project]/src/components/PortfolioGrid.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PortfolioGrid.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
function FilterButton({ label, colorVar, isActive, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `focus-ring flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-colors ${isActive ? "border-paper bg-paper text-ink" : "border-line text-paper-dim hover:border-paper-dim hover:text-paper"}`,
        children: [
            colorVar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-2 w-2 rounded-full",
                style: {
                    background: colorVar
                },
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/PortfolioGrid.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PortfolioGrid.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "featuredFilm",
    ()=>featuredFilm,
    "portfolioItems",
    ()=>portfolioItems,
    "profile",
    ()=>profile,
    "services",
    ()=>services
]);
const categories = [
    {
        id: "video",
        label: "Video editing",
        short: "Video",
        colorVar: "var(--accent-video)",
        description: "Motion, ritme, dan cerita — dari konten sosial sampai film pendek."
    },
    {
        id: "design",
        label: "Desain grafis",
        short: "Desain",
        colorVar: "var(--accent-design)",
        description: "Identitas visual, layout, dan sistem desain yang konsisten."
    },
    {
        id: "fashion",
        label: "Fashion design",
        short: "Fashion",
        colorVar: "var(--accent-fashion)",
        description: "Dari sketsa moodboard sampai koleksi siap produksi."
    },
    {
        id: "dev",
        label: "Web development",
        short: "Web",
        colorVar: "var(--accent-dev)",
        description: "Website cepat, rapi, dan gampang diurus sendiri."
    }
];
const portfolioItems = [
    {
        slug: "senja-di-kota",
        title: "Senja di Kota — video musik indie",
        category: "video",
        year: "2025",
        role: "Editor & colorist",
        summary: "Video musik untuk band indie lokal, dipotong mengikuti tempo lagu dengan grading warm-desaturated.",
        tools: [
            "Premiere Pro",
            "DaVinci Resolve"
        ]
    },
    {
        slug: "ombak-brand-film",
        title: "Ombak Coffee — brand film",
        category: "video",
        year: "2024",
        role: "Editor",
        summary: "Film pendek profil brand kopi lokal untuk peluncuran toko kedua.",
        tools: [
            "Premiere Pro",
            "After Effects"
        ]
    },
    {
        slug: "kertas-identity",
        title: "Kertas Studio — identitas visual",
        category: "design",
        year: "2025",
        role: "Brand designer",
        summary: "Logo, palet warna, dan sistem tipografi untuk studio percetakan independen.",
        tools: [
            "Figma",
            "Illustrator"
        ]
    },
    {
        slug: "arisan-poster-series",
        title: "Seri poster festival musik Arisan",
        category: "design",
        year: "2024",
        role: "Graphic designer",
        summary: "6 poster event dengan satu sistem grid yang bisa dipakai ulang tiap edisi.",
        tools: [
            "Illustrator",
            "Photoshop"
        ]
    },
    {
        slug: "musim-koleksi",
        title: "Musim — koleksi ready-to-wear",
        category: "fashion",
        year: "2025",
        role: "Fashion designer",
        summary: "Koleksi 12 look terinspirasi tekstil pesisir, dari moodboard sampai pola produksi.",
        tools: [
            "Sketsa tangan",
            "Clo3D"
        ]
    },
    {
        slug: "rimba-capsule",
        title: "Rimba — capsule collection",
        category: "fashion",
        year: "2024",
        role: "Fashion designer",
        summary: "Capsule collection 6 piece dengan material daur ulang untuk brand lokal.",
        tools: [
            "Sketsa tangan",
            "Pattern making"
        ]
    },
    {
        slug: "warung-kita-web",
        title: "Warung Kita — situs pemesanan",
        category: "dev",
        year: "2025",
        role: "Front-end developer",
        summary: "Website pemesanan katering dengan menu dinamis dan formulir booking event.",
        tools: [
            "Next.js",
            "Tailwind CSS"
        ]
    },
    {
        slug: "portofolio-galeri",
        title: "Situs galeri untuk fotografer",
        category: "dev",
        year: "2024",
        role: "Front-end developer",
        summary: "Portofolio galeri ringan dengan waktu muat cepat dan tampilan lightbox.",
        tools: [
            "Next.js",
            "Framer Motion"
        ]
    }
];
const services = [
    {
        id: "video-sosial",
        category: "video",
        title: "Edit video konten sosial",
        description: "Reels, TikTok, atau YouTube Shorts yang dipotong rapi mengikuti ritme.",
        startingPrice: "Rp350rb / video",
        deliverables: [
            "Rough cut untuk revisi",
            "Color grading dasar",
            "Subtitle & caption"
        ]
    },
    {
        id: "video-brand",
        category: "video",
        title: "Brand film & dokumenter pendek",
        description: "Video profil brand atau dokumentasi acara durasi 2–5 menit.",
        startingPrice: "Rp2.5jt / video",
        deliverables: [
            "Struktur cerita",
            "Color grading penuh",
            "2x revisi"
        ]
    },
    {
        id: "identitas-visual",
        category: "design",
        title: "Identitas visual",
        description: "Logo, palet warna, tipografi, dan panduan penggunaan singkat.",
        startingPrice: "Rp1.5jt / brand",
        deliverables: [
            "3 konsep logo",
            "Brand guideline ringkas",
            "File source"
        ]
    },
    {
        id: "desain-cetak",
        category: "design",
        title: "Desain materi cetak & digital",
        description: "Poster, feed sosial media, atau materi campaign lainnya.",
        startingPrice: "Rp200rb / desain",
        deliverables: [
            "2x revisi",
            "File siap cetak & digital"
        ]
    },
    {
        id: "koleksi-fashion",
        category: "fashion",
        title: "Perancangan koleksi",
        description: "Dari moodboard, sketsa, sampai pola siap produksi untuk brand kamu.",
        startingPrice: "Rp3jt / koleksi kecil",
        deliverables: [
            "Moodboard & sketsa",
            "Pola dasar",
            "Rekomendasi material"
        ]
    },
    {
        id: "konsultasi-fashion",
        category: "fashion",
        title: "Konsultasi desain",
        description: "Sesi konsultasi untuk menajamkan arah desain koleksi yang sedang berjalan.",
        startingPrice: "Rp500rb / sesi",
        deliverables: [
            "Sesi 90 menit",
            "Catatan & rekomendasi tertulis"
        ]
    },
    {
        id: "web-profil",
        category: "dev",
        title: "Website profil / portofolio",
        description: "Situs beberapa halaman untuk personal brand atau usaha kecil.",
        startingPrice: "Rp2jt / situs",
        deliverables: [
            "Desain responsif",
            "Formulir kontak/booking",
            "Deploy & domain setup"
        ]
    },
    {
        id: "web-toko",
        category: "dev",
        title: "Situs booking / katalog produk",
        description: "Website dengan katalog, filter, dan formulir pemesanan.",
        startingPrice: "Rp4jt / situs",
        deliverables: [
            "Katalog dinamis",
            "Formulir pemesanan",
            "Panduan pakai singkat"
        ]
    }
];
const profile = {
    name: "Shika Creative",
    tagline: "Cerita yang tinggal lebih lama.",
    intro: "Ruang kreatif milik Shiori Kagawa untuk film, visual, dan cerita-cerita personal yang ingin dirawat dengan penuh perhatian.",
    location: "Bandung, Indonesia",
    email: "halo@shikacreative.id",
    instagram: "@shika.creative"
};
const featuredFilm = {
    title: "永遠にあなたのもの",
    romanizedTitle: "Eien ni Anata no Mono",
    subtitle: "Untuk Shiori dengan penuh cinta.",
    description: "Sebuah film tentang dua perjalanan, kenangan yang tertinggal, dan janji yang belum sempat dituntaskan.",
    genre: "Drama / Romance",
    credit: "A film dedicated to Shiori Kagawa"
};
}),
];

//# sourceMappingURL=src_1sbt3l7._.js.map