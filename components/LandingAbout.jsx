import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

const LandingAbout = () => {
  return (
    <div className="md:pt-[100px] pb-10  ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          <div className="relative w-full md:h-[450px] h-[350px]">
            <Image
              src="/about.png"
              alt="ch"
              layout="fill"
              className="text-green-600"
            />
          </div>
          <div>
            <h5 className="font-semibold text-green-600 ">About</h5>
            <h1 className="font-bold text-3xl py-3 ">
              Welcome to Parsiyan Islamic Center for Muslims
            </h1>
            <p>
              Parsiyan Cultural Association is a non-profit organization that
              aims to promote and preserve the cultural heritage of the Parsi
              community. It organizes various events and activities throughout
              the year, including cultural festivals, educational seminars, and
              social gatherings. The association also provides support and
              resources for Parsi youth to connect with their roots and learn
              about their history and traditions.{" "}
            </p>
            <div className="bg-green-600 text-white p-2.5 w-[150px] rounded-sm text-center my-3">
              <Link
                href="/About"
                className="flex item-center justify-center font-semibold"
              >
                View Details
                <span class="material-symbols-outlined">chevron_right</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LandingAbout;
