import "./globals.css";
import { Lisu_Bosa } from "next/font/google";
import Navbar from "./components/Navbar";
// TODO: Enable when setting up authentication
// import { SessionProvider } from "next-auth/react";

const lisuBosa = Lisu_Bosa({
  variable: "--font-lisu-bosa",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Paradise Dental",
  description: "Dentistry made easy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lisuBosa.variable} antialiased`}>
        <Navbar />
        {/* TODO: Enable SessionProvider when setting up authentication */}
        {children}
      </body>
    </html>
  );
}
