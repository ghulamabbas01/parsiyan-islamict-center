import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);
  return (
    <div>
      <>
        {/* This example requires Tailwind CSS v2.0+ */}
        <div className=" w-full bg-white fixed z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  {/* <h1 className="text-black font-bold text-xl">
                    Parsiyan Islamic Center
                  </h1> */}
                  <div className="relative logo-Img">
                    <Image
                      src="/logo.jpg"
                      alt="Parsiyan-Cultural-Assocation-Logo.JPG"
                      width={70}
                      height={70}
                    />
                  </div>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <nav className="hidden md:flex space-x-10">
                <Link
                  href="/"
                  className="text-base font-medium text-gray-500 font-semibold hover:text-green-600"
                >
                  Home
                </Link>
                <Link
                  href="/About"
                  className="text-base font-medium text-gray-500 font-semibold hover:text-green-600"
                >
                  About
                </Link>
                <Link
                  href="/Donate"
                  className="text-base font-medium text-gray-500 font-semibold hover:text-green-600"
                >
                  Donate
                </Link>
                <Link
                  href="/Services"
                  className="text-base font-medium text-gray-500 font-semibold hover:text-green-600"
                >
                  Services
                </Link>
                <Link
                  href="/ContactUs"
                  className="text-base font-medium text-gray-500 font-semibold hover:text-green-600"
                >
                  Contact Us
                </Link>
              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {/* <Link
                  href="/Login"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Log in
                </Link> */}
                <Link
                  href="/SignUp"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600  hover:bg-green-700  "
                >
                  Sign up / Login
                </Link>
              </div>
            </div>
          </div>

          {open ? (
            <div className="md:hidden block  ">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="px-5 pb-12">
                  <div className="flex items-center justify-between">
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={() => setOpen(!open)}
                      >
                        <span className="sr-only">Close menu</span>
                        {/* Heroicon name: outline/x */}
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <Link
                        href="/"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        {/* Heroicon name: outline/chart-bar */}
                        <span class="material-symbols-outlined">house</span>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Home
                        </span>
                      </Link>
                      <Link
                        href="/About"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        {/* Heroicon name: outline/cursor-click */}
                        <span class="material-symbols-outlined">groups_2</span>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          About
                        </span>
                      </Link>
                      <Link
                        href="/Donate"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        {/* Heroicon name: outline/shield-check */}
                        <span class="material-symbols-outlined">bloodtype</span>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Donate
                        </span>
                      </Link>
                      <Link
                        href="//Services"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        {/* Heroicon name: outline/view-grid */}
                        <span class="material-symbols-outlined">
                          design_services
                        </span>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Services
                        </span>
                      </Link>
                      <Link
                        href="/ContactUs"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        {/* Heroicon name: outline/refresh */}
                        <span class="material-symbols-outlined">
                          contact_page
                        </span>
                        <span className="ml-3 text-base font-medium text-gray-900">
                          Contact Us
                        </span>
                      </Link>
                      <Link
                        href="/SignUp"
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        {/* Heroicon name: outline/refresh */}
                        <span class="material-symbols-outlined">
                          subscriptions
                        </span>
                        <Link href="/SignUp">
                          <span className="ml-3 text-base font-medium text-gray-900">
                            Sign Up / Login
                          </span>
                        </Link>
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    </div>
  );
};

export default Navbar;
