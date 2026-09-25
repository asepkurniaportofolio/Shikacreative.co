import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm text-paper-dim sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-6">
          <a
            className="focus-ring rounded hover:text-paper"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
          <span>{profile.instagram}</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
