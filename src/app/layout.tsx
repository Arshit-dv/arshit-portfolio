import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | Computer Science & AI Portfolio`,
  description: `${PERSONAL_INFO.name} - Computer Science undergraduate specializing in Software Engineering, AI & Machine Learning, and Data Science.`,
  keywords: [
    "Computer Science",
    "Software Engineer",
    "Machine Learning",
    "AI Developer",
    "Data Science",
    "Next.js",
    "TypeScript",
    "Python",
    "C++"
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Arshit-dv",
    title: `${PERSONAL_INFO.name} | Software Engineer & AI Specialist`,
    description: PERSONAL_INFO.aboutMe,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Computer Science Portfolio`,
    description: PERSONAL_INFO.aboutMe,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PERSONAL_INFO.name,
    "jobTitle": "Software Engineer & Data Scientist",
    "description": PERSONAL_INFO.aboutMe,
    "knowsAbout": [
      "Software Engineering",
      "Computer Science",
      "Machine Learning",
      "Data Science",
      "Algorithms",
      "Distributed Systems"
    ],
    "sameAs": [
      PERSONAL_INFO.github,
      PERSONAL_INFO.linkedin,
      PERSONAL_INFO.codechef,
      PERSONAL_INFO.leetcode,
      PERSONAL_INFO.codeforces
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-[#09090b] text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
