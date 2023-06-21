import Hero from "@/components/Hero";
import PrayerTimes from "@/components/PrayerTimes";
import { Inter } from "next/font/google";
import Donate from "./Donate";

export default function Home() {
  return (
    <>
      <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <main>
          <Hero />
          <PrayerTimes />
          <Donate />
        </main>
      </div>
    </>
  );
}
