import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-6xl font-bold text-ink">404</h1>
      <p className="text-xl text-ink/70">[page not found]</p>
      <p className="text-center text-ink/60">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-4 inline-block border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
      >
        [return home]
      </Link>
    </div>
  );
}
