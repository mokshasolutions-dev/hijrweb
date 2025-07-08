import type { Metadata } from "next";
import {  Manrope, Poppins, Roboto, Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";


// Headings: Poppins, Inter, Manrope, Rubik
// Body: Inter, Roboto, Nunito, Open Sans
// Tailwind font classes: font-sans, font-semibold, etc.

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300"],
  subsets: ["cyrillic"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300"],
  subsets: ["latin"],
});
// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
// const rubik = Rubik({
//   variable: "--font-rubik",
//   subsets: ["latin"],
// });
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});
// const nunito = Nunito({
//   variable: "--font-nunito",
//   subsets: ["latin"],
// });
// const catamaran = Catamaran({
//   variable: "--font-catamaran",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Hijr | Healthcare International Jobs Recruitment ",
  description: "Healthcare International Jobs Recruitment",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${poppins.variable}  ${ubuntu.variable} ${roboto.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
