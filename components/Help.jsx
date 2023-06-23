import Image from "next/image";
import Link from "next/link";
import React from "react";

const Help = () => {
  return (
    <div className=" md:pt-[100px] pb-20 ">
      <div className="relative w-full h-[400px] flex justify-center items-center flex-col">
        <Image
          src="/help-img.jpg"
          alt="help"
          layout="fill"
          className="text-green-600"
        />
        <div
          className="absolute text-center
        "
        >
          <h5 className=" font-semibold text-green-600">Support Us</h5>
          <h1 className="text-white font-bold text-2xl md:text-5xl md:my-3">
            We Need Your Help
          </h1>
          <p className="text-white md:my-3 md:w-[800px] p-4 md:p-0">
            I am writing to you today on behalf of Parsiyan Cultural
            Association, a non-profit organization that provides support and
            assistance to individuals and families in our community who are in
            need of burial expenses and other essential services. Not to mention
            the operational cost to run the Islamic center.
          </p>
          <div className="bg-green-600 text-white  hover:bg-green-700 p-2.5 w-[150px] rounded-sm text-center my-3 mx-auto">
            <Link
              href="/Donate"
              className="flex item-center justify-center font-semibold"
            >
              Donate Now
              <span class="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
