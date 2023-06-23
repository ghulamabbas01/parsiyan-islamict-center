import React from "react";
import Container from "./Container";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-auto">
      <div className="hero-img relative flex justify-center items-center">
        <div className="relative hero-image">
          <Image
            src="/hero-img.jpg"
            alt="hero-img"
            className="hero-image"
            layout="fill"
          />
        </div>
        <div className="hero-text absolute text-center ">
          <h3 className="text-lg font-oswald text-green-400">
            Bismillah Hir Rahman Nir Rahim
          </h3>
          <h1 className="md:text-5xl text-2xl mt-2 md:mt-7 font-bold text-white">
            Welcome to the Parsiyan Islamict Center
          </h1>
          <p className="md:w-[800px] px-4  m-auto text-gray-300 md:mt-6 mt-2">
            Masjid Aisha is not just a mosque for prayers, rather it is a
            community center for all. The Center is committed to preserving an
            Islamic identity, building and supporting a viable Muslim community,
            promoting a comprehensive Islamic way of life based on the Holy
            Quran and the Sunnah of Prophet Muhammad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
