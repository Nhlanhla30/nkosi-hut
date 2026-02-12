import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nkosihut.co.za"),
  title: {
    default: "Nkosi Hut | Digital Solutions & Web Development Agency — South Africa",
    template: "%s | Nkosi Hut",
  },
  description:
    "Nkosi Hut is a South African tech agency specializing in website development, mobile applications, UI/UX design, and cloud solutions. Let's build your digital future.",
  keywords: [
    "web development",
    "mobile apps",
    "UI/UX design",
    "cloud solutions",
    "South Africa",
    "tech agency",
    "Nkosi Hut",
    "software development",
    "digital solutions",
    "Johannesburg",
  ],
  authors: [{ name: "Nkosi Hut" }],
  creator: "Nkosi Hut",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://nkosihut.co.za",
    siteName: "Nkosi Hut",
    title: "Nkosi Hut | Digital Solutions & Web Development Agency",
    description:
      "South African tech agency specializing in websites, mobile apps, UI/UX design, and cloud solutions.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nkosi Hut - Digital Solutions Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nkosi Hut | Digital Solutions & Web Development Agency",
    description:
      "South African tech agency specializing in websites, mobile apps, UI/UX design, and cloud solutions.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nkosi Hut",
  url: "https://nkosihut.co.za",
  logo: "https://nkosihut.co.za/images/logo-color.svg",
  description:
    "South African tech agency specializing in website development, mobile applications, UI/UX design, and cloud solutions.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ZA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@nkosihut.co.za",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-display">
        {/* Background Effects */}
        <div className="bg-grid fixed inset-0 z-0 pointer-events-none" />
        <div className="fixed -top-[200px] -right-[200px] z-0 h-[600px] w-[600px] rounded-full bg-brand-primary opacity-15 blur-[120px] pointer-events-none" />
        <div className="fixed -bottom-[200px] -left-[200px] z-0 h-[600px] w-[600px] rounded-full bg-brand-accent-dark opacity-[0.08] blur-[120px] pointer-events-none" />

        <Navbar />
        <main className="relative z-[1]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
