import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IP Checker - What's My Public IP Address",
  description:
    "Instantly check your current public IP address with our simple and fast IP checker tool. Made for fun, no judging!",
  keywords: "IP address, public IP, IP checker, what is my IP",
  authors: [{ name: "Thilina Rathnayaka (Edward Hyde)" }],
  openGraph: {
    title: "IP Checker - What's My Public IP Address",
    description:
      "Instantly check your current public IP address. Made for fun, no judging!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-zinc-950`}>{children}</body>
    </html>
  );
}
