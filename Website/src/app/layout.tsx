import type { Metadata } from "next";
import "@fontsource-variable/jetbrains-mono/index.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data Science Portfolio",
  description: "Professional data science portfolio showcasing projects, skills, and experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
