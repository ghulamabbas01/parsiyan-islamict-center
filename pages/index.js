import Hero from "@/components/Hero";
import PrayerTimes from "@/components/PrayerTimes";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <PrayerTimes />
      </main>
    </>
  );
}
