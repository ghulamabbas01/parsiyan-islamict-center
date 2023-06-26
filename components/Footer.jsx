import React from "react";
import Container from "./Container";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <Container>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 p-10 ">
          <div className="md:w-[240px]">
            <Link href="/" className="font-bold text-3xl ">
              Parsiyan Cultural Assocation
            </Link>

            <div className="social-icon flex gap-6 my-4 items-center">
              <Link
                href="https://www.facebook.com/profile.php?id=100092316501951&mibextid=LQQJ4d"
                target="_blank"
              >
                <FaFacebook className="text-[28px] hover:text-gray-600 transition-all" />
              </Link>
              <Link href="/">
                <AiFillInstagram className="text-3xl hover:text-gray-600 " />
              </Link>
              <Link href="/">
                <AiFillLinkedin className="text-3xl hover:text-gray-400 transition-all" />
              </Link>
              <Link href="/">
                <AiFillTwitterCircle className="text-3xl hover:text-gray-600 transition-all" />
              </Link>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-white ">Company Links</h1>
            <ul className=" flex flex-col gap-3 mt-5">
              <li className="text-gray-400 hover:text-white">
                <Link href="/About">About </Link>
              </li>
              <li className="text-gray-400 hover:text-white">
                <Link href="/Donate">Donate</Link>
              </li>
              <li className="text-gray-400 hover:text-white">
                <Link href="/Services">Services </Link>
              </li>
              <li className="text-gray-400 hover:text-white">
                <Link href="/ContactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-gray-400 mt-3 md:mt-0">
              <h1 className="font-bold text-2xl text-white">Address</h1>
              <ul className=" flex flex-col gap-5 mt-5">
                <li className=" flex items-center">
                  <span class="material-symbols-outlined mr-3">mail</span>
                  Email :
                  <Link
                    href="mailto:parsiyan02@gmail.com "
                    className="ml-3 text-gray-400 hover:text-white
                   "
                    target="blank"
                  >
                    Parsiyan03@gmail.com
                  </Link>
                </li>
                <li className=" flex justify-center">
                  <span class="material-symbols-outlined mr-3">
                    location_on
                  </span>
                  Address:
                  <Link
                    target="blank"
                    href="https://goo.gl/maps/63gX4Bcoxg542rCk8"
                    className="ml-5 text-gray-400 hover:text-white"
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
