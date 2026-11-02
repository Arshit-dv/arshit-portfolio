import type { Metadata } from "next";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} — The Developer's Chronicle`,
  description: `${PERSONAL_INFO.name} - Computer Science undergraduate specializing in Software Engineering, AI & Machine Learning, and Data Science. A developer's chronicle of projects, experiments, and technical discoveries.`,
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
    title: `${PERSONAL_INFO.name} — The Developer's Chronicle`,
    description: PERSONAL_INFO.aboutMe,
    siteName: `${PERSONAL_INFO.name} — Chronicle`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} — The Developer's Chronicle`,
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
      PERSONAL_INFO.kaggle,
      PERSONAL_INFO.codechef,
      PERSONAL_INFO.leetcode,
      PERSONAL_INFO.codeforces
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
