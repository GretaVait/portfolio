// Base
import type { Metadata } from "next";
import { Rubik, Xanh_Mono } from "next/font/google";

const xanh = Xanh_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-xanh",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Your next favourite front end developer",
  description: "Welcome to my humble home!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${xanh.variable} ${rubik.variable}`}>{children}</body>
    </html>
  );
}
