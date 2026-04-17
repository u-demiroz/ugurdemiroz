import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uğur Demiröz",
  description: "Kaptan pilot, geliştirici ve içerik üreticisi.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
