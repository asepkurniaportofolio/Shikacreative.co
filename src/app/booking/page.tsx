import BookingForm from "@/components/BookingForm";

const steps = [
  { title: "Ajukan", detail: "Isi formulir dengan detail proyek dan tanggal yang kamu mau." },
  { title: "Konfirmasi", detail: "Saya balas via email untuk konfirmasi jadwal dan detail harga." },
  { title: "Kerjakan", detail: "Proyek dikerjakan sesuai timeline yang disepakati." },
  { title: "Revisi & kirim", detail: "Revisi sesuai paket, lalu file final dikirim." },
];

export default async function BookingPage({
  searchParams,
}: PageProps<"/booking">) {
  const params = await searchParams;
  const serviceParam = Array.isArray(params.service)
    ? params.service[0]
    : params.service;

  return (
    <section className="mx-auto grid max-w-5xl gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <h1 className="font-display text-4xl italic text-paper">Booking</h1>
        <p className="mt-3 text-paper-dim">
          Ceritakan proyek kamu, saya balas dalam 1–2 hari kerja.
        </p>

        <ol className="mt-10 flex flex-col gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="font-display text-lg italic text-paper-dim">
                {i + 1}
              </span>
              <div>
                <p className="text-paper">{step.title}</p>
                <p className="mt-1 text-sm text-paper-dim">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <BookingForm initialServiceId={serviceParam} />
    </section>
  );
}
