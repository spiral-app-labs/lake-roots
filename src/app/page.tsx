"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import ThreeExperiences from "@/components/ThreeExperiences";
import Stats from "@/components/Stats";
import FeaturedDishes from "@/components/FeaturedDishes";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Market from "@/components/Market";
import Events from "@/components/Events";
import Location from "@/components/Location";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InfoBar />
      <ThreeExperiences />
      <Stats />
      <FeaturedDishes />
      <Menu />
      <Reviews />
      <Market />
      <Events />
      <Location />
      <Social />
      <Footer />
    </main>
  );
}
