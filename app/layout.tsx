import "./globals.css";
import { Lisu_Bosa } from "next/font/google";
import Navbar from "./components/Navbar"; // ✅ Make sure this is correct

const lisuBosa = Lisu_Bosa({
  variable: "--font-lisu-bosa",
  subsets: ["latin"],
  weight: ["400"], // Ensure correct weight
});

export const metadata = {
  title: "Paradise Dental",
  description: "Dentistry made easy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lisuBosa.variable} antialiased`}>
        <Navbar />  {/* ✅ Add Navbar here to fix the error */}
        {children}
      </body>
    </html>
  );
}
