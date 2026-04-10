import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uğur Demiröz — Product Builder",
  description: "Building apps & products people use. iOS, web, and beyond.",
  openGraph: {
    title: "Uğur Demiröz — Product Builder",
    description: "Building apps & products people use.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="noise">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
