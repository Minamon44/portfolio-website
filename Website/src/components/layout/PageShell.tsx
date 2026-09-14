import { Navigation } from "./Navigation";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content" className="pt-0">
        {children}
      </main>
    </div>
  );
}
