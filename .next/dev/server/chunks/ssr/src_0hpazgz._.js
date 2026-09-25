module.exports = [
"[project]/src/components/BookingForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function BookingForm({ initialServiceId }) {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    function handleSubmit(e) {
        e.preventDefault();
        // Belum tersambung ke backend. Sambungkan endpoint di sini,
        // misalnya lewat API route Next.js atau layanan seperti Resend/Formspree,
        // untuk benar-benar menyimpan atau mengirim data booking ini.
        setStatus("submitted");
    }
    if (status === "submitted") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-line p-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-display text-2xl italic text-paper",
                    children: [
                        "Terima kasih, ",
                        name || "sudah",
                        " mengirim permintaan booking!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm text-paper-dim",
                    children: "Saya akan balas lewat email dalam 1–2 hari kerja untuk konfirmasi jadwal."
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Nama",
                        htmlFor: "name",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "name",
                            name: "name",
                            required: true,
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            className: "focus-ring w-full border border-line bg-transparent px-3 py-2 text-paper outline-none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Email",
                        htmlFor: "email",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "email",
                            name: "email",
                            type: "email",
                            required: true,
                            className: "focus-ring w-full border border-line bg-transparent px-3 py-2 text-paper outline-none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Nomor WhatsApp",
                        htmlFor: "phone",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "phone",
                            name: "phone",
                            type: "tel",
                            className: "focus-ring w-full border border-line bg-transparent px-3 py-2 text-paper outline-none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Tanggal yang diinginkan",
                        htmlFor: "date",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "date",
                            name: "date",
                            type: "date",
                            className: "focus-ring w-full border border-line bg-transparent px-3 py-2 text-paper outline-none [color-scheme:dark]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "Layanan",
                htmlFor: "service",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    id: "service",
                    name: "service",
                    defaultValue: initialServiceId ?? "",
                    required: true,
                    className: "focus-ring w-full border border-line bg-transparent px-3 py-2 text-paper outline-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            disabled: true,
                            children: "Pilih layanan"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["services"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: s.id,
                                className: "bg-ink",
                                children: s.title
                            }, s.id, false, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "Ceritakan proyek kamu",
                htmlFor: "message",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    id: "message",
                    name: "message",
                    rows: 5,
                    required: true,
                    className: "focus-ring w-full border border-line bg-transparent px-3 py-2 text-paper outline-none"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "focus-ring self-start rounded-full bg-paper px-6 py-3 text-sm text-ink transition-transform hover:scale-[1.02]",
                children: "Kirim permintaan booking"
            }, void 0, false, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BookingForm.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function Field({ label, htmlFor, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        htmlFor: htmlFor,
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-paper-dim",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BookingForm.tsx",
        lineNumber: 128,
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

//# sourceMappingURL=src_0hpazgz._.js.map