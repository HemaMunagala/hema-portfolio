import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Hema Munagala | Software Engineer",
    template: "%s | Hema Munagala",
  },
  description:
    "Software Engineer focused on backend automation, relational data integrity, and production-ready full-stack platforms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <SiteNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}