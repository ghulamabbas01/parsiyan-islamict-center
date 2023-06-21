import React from "react";
import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <Container>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 p-10 ">
          <div className="md:w-[240px]">
            <Link href="/" className="font-bold md:text-3xl hidden md:block ">
              Parsiyan Islamic Center
            </Link>
          </div>
          <div className="text-gray-400">
            <h1 className="font-bold text-2xl text-white">Company Links</h1>
            <ul className=" flex flex-col gap-3 mt-5">
              <li>
                <Link href="/About">About </Link>
              </li>
              <li>
                <Link href="/Donate">Donate</Link>
              </li>
              <li>
                <Link href="/Services">Services </Link>
              </li>
              <li>
                <Link href="/ContactUS">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-gray-400 mt-3 md:mt-0">
              <h1 className="font-bold text-2xl text-white">Address</h1>
              <ul className=" flex flex-col gap-5 mt-5">
                <li className="flex items-center ">
                  <span class="material-symbols-outlined mr-2">smartphone</span>
                  Phone No:
                  <Link href="tel:  +1(916)699-3510" className="ml-3">
                    +1 (916)699-3510{" "}
                  </Link>
                </li>
                <li className="flex items-center">
                  <span class="material-symbols-outlined mr-2">mail</span>
                  Email :
                  <Link
                    href="mailto:parsiyan02@gmail.com "
                    className="ml-3"
                    target="blank"
                  >
                    parsiyan02@gmail.com
                  </Link>
                </li>
                <li className="flex justify-center">
                  <span class="material-symbols-outlined mr-3">
                    location_on
                  </span>
                  Address:
                  <Link
                    target="blank"
                    href="https://goo.gl/maps/63gX4Bcoxg542rCk8"
                    className="ml-3"
                  >
                    2894 Eastren Ave, Sacramento, CA 95821
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
