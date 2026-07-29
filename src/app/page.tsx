import { Metadata } from "next";
import Banner from "./components/home/hero";
import Table from "./components/home/table";
import Features from "./components/home/features";
import Simple from "./components/home/simple";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
  title: "Kerodevs | AI Automation, ERPNext & Custom Software Development Company",
  description:
    "Kerodevs is a leading software development company providing AI Automation, ERPNext Implementation, Custom Software Development, Web Development, Mobile App Development, UI/UX Design, Digital Marketing, SEO, and Business Automation solutions.",

  keywords: [
    "Kerodevs",
    "AI Automation",
    "ERPNext",
    "Frappe",
    "Custom Software Development",
    "Web Development",
    "React Development",
    "Next.js Development",
    "Python Development",
    "FastAPI",
    "MERN Stack",
    "Business Automation",
    "CRM Development",
    "ERP Development",
    "Mobile App Development",
    "UI UX Design",
    "SEO Services",
    "Digital Marketing",
    "Software Company Pakistan",
    "IT Company Pakistan",
  ],

  authors: [{ name: "Kerodevs" }],
  creator: "Kerodevs",
  publisher: "Kerodevs",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Kerodevs | AI Automation & Software Development Company",
    description:
      "Helping businesses grow with AI Automation, ERPNext, Custom Software, Websites, Mobile Apps, SEO and Digital Marketing.",
    url: "https://www.kerodevs.com",
    siteName: "Kerodevs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.kerodevs.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kerodevs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kerodevs | AI Automation & Software Development",
    description:
      "Empowering businesses with AI Automation, ERPNext, Web Development and Custom Software.",
    images: ["https://www.kerodevs.com/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.kerodevs.com",
  },
};

export default function Home() {
  return (
    <main>
      <Banner />
      <Table />
      <Features />
      <Simple />
      
      <ContactForm />
    </main>
  );
}