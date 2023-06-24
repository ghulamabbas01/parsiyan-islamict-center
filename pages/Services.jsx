import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
const Services = () => {
  return (
    <div className=" pt-[100px]  pb-10 ">
      <Container>
        <h1 className="font-bold text-5xl text-center my-10 ">
          Service of “Parsiyan” Cultural Association
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border border-green-500 rounded-md bg-green-100 p-5 Services-1 ">
            <div className="relative w-10 h-10">
              <Image
                src="/child-care-icon.svg"
                alt="about"
                layout="fill"
                className="text-green-600"
              />
            </div>
            <div className="absolute">
              <h2 className="font-bold my-3 text-white ">
                Cultural Association
              </h2>
              <p className="text-[14px] text-white">
                Teaching Islamic fundamentals of the Noble Qur'an and Tajweed in
                person and otherwise. Attendance (online) for adult children.
              </p>
            </div>
          </div>
          {/* Language */}
          <div className="border border-green-500 rounded-md bg-green-100 p-5 Services-2 ">
            <div className="relative w-10 h-10">
              <Image
                src="/language-translator-icon.svg"
                alt="ch"
                layout="fill"
                className="text-green-600"
              />
            </div>
            <div className="absolute">
              <h2 className="font-bold my-3 text-white ">Language</h2>
              <p className="text-[14px] text-white">
                Farsi and English language training programs (in person &
                online).
              </p>
            </div>
          </div>
          {/* Language */}
          <div className="border border-green-500 rounded-md bg-green-100 p-5 Services-3 ">
            <div className="relative w-10 h-10">
              <Image
                src="/young-businessman-icon.svg"
                alt="ch"
                layout="fill"
                className="text-green-600"
              />
            </div>
            <div className="absolute ">
              <h2 className="font-bold my-3 text-white ">Members</h2>
              <p className="text-[14px] text-white">
                In case of death of one of the members of the association,
                provision of a grave, burial, and during the administrative
                procedures of the dead body.
              </p>
            </div>
          </div>
          {/* Language */}
          <div className="border border-green-500 rounded-md bg-green-100 p-5 Services-4">
            <div className="relative w-10 h-10">
              <Image
                src="/answer-correct-icon.svg"
                alt="ch"
                layout="fill"
                className="text-green-600"
              />
            </div>
            <div className="absolute ">
              <h2 className="font-bold my-3 text-white ">Members</h2>
              <p className="text-[14px] text-white">
                The presence of members of the community in the good and evil
                ceremony of each other.
              </p>
            </div>
          </div>
          {/* Language */}
          <div className="border border-green-500 rounded-md bg-green-100 p-5 Services-5">
            <div className="relative w-10 h-10">
              <Image
                src="/charity-donation-hand-love-icon.svg"
                alt="ch"
                layout="fill"
                className="text-green-600"
              />
            </div>
            <div className="absolute ">
              <h2 className="font-bold my-3 text-white ">Help</h2>
              <p className="text-[14px] text-white">
                Cooperating with the natives who have just arrived in America
                (adjustment to the community).
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
