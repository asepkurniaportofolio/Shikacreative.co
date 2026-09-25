# Portofolio — Rana Oktaviani (contoh)

Website portofolio multi-disiplin: video editing, desain grafis, fashion design, dan web development. Dibuat dengan Next.js (App Router), TypeScript, dan Tailwind CSS.

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur penting

- `src/lib/data.ts` — semua konten (profil, kategori, portofolio, layanan). Edit di sini dulu untuk ganti isi.
- `src/app/page.tsx` — halaman beranda / profil
- `src/app/portofolio/page.tsx` — halaman portofolio (bisa difilter lewat `?filter=video|design|fashion|dev`)
- `src/app/layanan/page.tsx` — halaman layanan & harga
- `src/app/booking/page.tsx` + `src/components/BookingForm.tsx` — form booking

## Yang masih perlu kamu lakukan

1. **Ganti nama, foto profil, dan isi konten** di `src/lib/data.ts` sesuai data kamu sendiri.
2. **Sambungkan form booking ke backend.** Sekarang form di `BookingForm.tsx` cuma nampilin pesan sukses di layar (belum benar-benar mengirim/menyimpan data). Untuk versi produksi, kamu bisa:
   - Buat API route di `src/app/api/booking/route.ts` yang menyimpan data ke database (misalnya lewat Supabase, Postgres, atau Google Sheets API), atau
   - Kirim email notifikasi lewat layanan seperti Resend, atau
   - Pakai form handler pihak ketiga seperti Formspree kalau mau yang paling cepat.
3. **Ganti gambar placeholder** — saat ini kartu portofolio belum pakai gambar asli, hanya teks. Tambahkan `next/image` dengan foto asli tiap karya kalau sudah ada asetnya.
4. **Deploy** — paling gampang lewat [Vercel](https://vercel.com/new), tinggal push ke GitHub lalu import repo-nya.

## Font

Font (Fraunces & Space Grotesk) di-self-host lewat paket `@fontsource`, jadi tidak perlu koneksi ke Google Fonts saat build.
