import type { Metadata } from "next";
import "@fontsource-variable/jetbrains-mono/index.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alex Chen — Data Scientist",
    template: "%s | Alex Chen — Data Scientist",
  },
  description:
    "Data scientist specializing in machine learning, statistical modeling, and turning complex datasets into actionable business insights.",
  openGraph: {
    title: "Alex Chen — Data Scientist",
    description:
      "Data scientist specializing in machine learning, statistical modeling, and turning complex datasets into actionable business insights.",
    url: "https://alexchen.dev",
    siteName: "Alex Chen Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen — Data Scientist",
    description:
      "Data scientist specializing in machine learning, statistical modeling, and turning complex datasets into actionable business insights.",
  },
  metadataBase: new URL("https://alexchen.dev"),
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
