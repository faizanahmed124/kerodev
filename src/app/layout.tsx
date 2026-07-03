import { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/scroll-to-top";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kerodevs.com"),
  title: {
    default: "Kerodevs | AI Automation & Software Development Company",
    template: "%s | Kerodevs",
  },
  description:
    "Kerodevs provides AI Automation, ERPNext Implementation, Web Development, Mobile Apps, SEO, Digital Marketing and Custom Software Solutions.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${syne.variable} bg-white`}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Header />
          {children}
          <Footer />
        </div>

        <Analytics />
        <ScrollToTop />
      </body>
    </html>
  );
}