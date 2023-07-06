import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-auto">
      <div className="hero-img relative flex justify-center items-center">
        <div className="relative hero-image">
          <Image src="/hero-banner.jpg" alt="hero-img" layout="fill" />
        </div>
        <div className="hero-text absolute text-center top-[40%] px-5 ">
          <h3 className="text-lg font-oswald text-green-400">
            Bismillah Hir Rahman Nir Rahim
          </h3>
          <h1 className="md:text-5xl text-2xl mt-2 md:mt-7 font-bold text-white">
            Welcome to the Parsiyan Cultural Assocation
          </h1>
          <p className="text-white w-300 md:w-[900px] m-auto my-4 ">
            Parsiyan Cultural Association is a non-profit organization that
            strives to preserve and promote the culture and rich traditions of
            our shared civilizational and cultural heritage. This association
            works with a steadfast determination to become a trusted platform
            for cultural and social exchange and participation.
          </p>
          <div className="bg-green-600 text-white p-2.5 w-[250px] rounded-sm text-center my-3 mx-auto  hover:bg-green-700">
            <Link
              href="/SignUp"
              className="flex item-center justify-center font-semibold"
            >
              To Become Member
              <span class="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
