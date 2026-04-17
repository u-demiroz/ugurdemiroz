import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uğur Demiröz",
  description: "I build products at the intersection of mobile, web and automation.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
