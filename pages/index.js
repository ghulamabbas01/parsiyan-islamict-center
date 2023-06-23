import Hero from "@/components/Hero";
import PrayerTimes from "@/components/PrayerTimes";
import { Inter } from "next/font/google";
import Donate from "./Donate";
import Services from "./Services";
import About from "./About";
import Help from "@/components/Help";
import LandingAbout from "@/components/LandingAbout";

export default function Home() {
  return (
    <>
      <div className="">
        <main>
          <Hero />
          <PrayerTimes />
          {/* <Services /> */}
          {/* <LandingAbout /> */}
          <Help />
        </main>
      </div>
    </>
  );
}
