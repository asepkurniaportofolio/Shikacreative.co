"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/data";

export default function BookingForm({
  initialServiceId,
}: {
  initialServiceId?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Belum tersambung ke backend. Sambungkan endpoint di sini,
    // misalnya lewat API route Next.js atau layanan seperti Resend/Formspree,
    // untuk benar-benar menyimpan atau mengirim data booking ini.
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="border border-line p-8 text-center">
        <p className="font-display text-2xl italic text-paper">
          Terima kasih, {name || "sudah"} mengirim permintaan booking!
        </p>
        <p className="mt-3 text-sm text-paper-dim">
          Saya akan balas lewat email dalam 1–2 hari kerja untuk konfirmasi
          jadwal.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nama" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="focus-ring w-full border border-line bg-transparent px-3 py-2 text-paper outline-none"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="focus-ring w-full border border-line bg-transparent px-3 py-2 text-paper outline-none"
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nomor WhatsApp" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            className="focus-ring w-full border border-line bg-transparent px-3 py-2 text-paper outline-none"
          />
        </Field>
        <Field label="Tanggal yang diinginkan" htmlFor="date">
          <input
            id="date"
            name="date"
            type="date"
            className="focus-ring w-full border border-line bg-transparent px-3 py-2 text-paper outline-none [color-scheme:dark]"
          />
        </Field>
      </div>

      <Field label="Layanan" htmlFor="service">
        <select
          id="service"
          name="service"
          defaultValue={initialServiceId ?? ""}
          required
          className="focus-ring w-full border border-line bg-transparent px-3 py-2 text-paper outline-none"
        >
          <option value="" disabled>
            Pilih layanan
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.id} className="bg-ink">
              {s.title}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Ceritakan proyek kamu" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="focus-ring w-full border border-line bg-transparent px-3 py-2 text-paper outline-none"
        />
      </Field>

      <button
        type="submit"
        className="focus-ring self-start rounded-full bg-paper px-6 py-3 text-sm text-ink transition-transform hover:scale-[1.02]"
      >
        Kirim permintaan booking
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm text-paper-dim">{label}</span>
      {children}
    </label>
  );
}
