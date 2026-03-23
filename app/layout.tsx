import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sol-Ray Bob — Sun Science. Solar Philosophy. Daytime Living.",
  description:
    "Built for the ones who are ready to live in the light. Sun science, solar philosophy, and the tools to build a life in the light.",
  openGraph: {
    title: "Sol-Ray Bob",
    description: "Built for the ones who are ready to live in the light.",
    url: "https://solraybob.com",
    siteName: "solraybob.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@solraybob",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
