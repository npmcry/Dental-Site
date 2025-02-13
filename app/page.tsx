"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quality from "./components/Quality";
import ServicesGrid from "./components/ServicesGrid";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Quality />
      <ServicesGrid />
      <Footer />
    </>
  );
}
