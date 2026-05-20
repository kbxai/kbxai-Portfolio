import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kartik Bajaj — AI & Full-Stack Engineer",
  description: "Portfolio of Kartik Bajaj — Data Science undergrad at IIT Madras building end-to-end AI/ML systems and production full-stack applications.",
  keywords: ["Kartik Bajaj", "AI Engineer", "Full Stack Developer", "IIT Madras", "Machine Learning", "Portfolio"],
  authors: [{ name: "Kartik Bajaj" }],
  openGraph: {
    title: "Kartik Bajaj — AI & Full-Stack Engineer",
    description: "Data Science undergrad at IIT Madras building end-to-end AI/ML systems and production full-stack applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartik Bajaj — AI & Full-Stack Engineer",
    description: "Data Science undergrad at IIT Madras building end-to-end AI/ML systems and production full-stack applications.",
  },
  other: {
    "theme-color": "#050505",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
