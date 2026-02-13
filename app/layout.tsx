import type { Metadata } from "next";
import { Red_Hat_Display, Paytone_One } from "next/font/google";
import "@/resources/styles/globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { LanguageProvider } from "@/context/LanguageProvider";

// Define the fonts with custom CSS variable names
const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const paytoneOne = Paytone_One({
  variable: "--font-paytone-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Art of Ville Lähetkangas",
  description: "Portfolio of character artist Ville Lähetkangas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${paytoneOne.variable} ${redHatDisplay.variable} `}>
        <LanguageProvider>
          <Header />
          {/*Spacer to prevent header from causing a slight initial scroll*/}
          <div style={{ height: "20px" }}></div>
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
