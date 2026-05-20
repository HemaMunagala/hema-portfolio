import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.summary,
  metadataBase: new URL(site.website),
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description: site.summary,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.summary,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="page-shell antialiased">
        <SiteNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
