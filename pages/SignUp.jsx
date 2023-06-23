import Link from "next/link";

import React from "react";
import Container from "@/components/Container";
const SignUp = () => {
  return (
    <>
      <div className="bg-green-600 w-full pb-16 border pt-[150px]">
        <h1 className=" text-center text-white  font-bold text-5xl">
          SignUp / Login
        </h1>
      </div>
      <Container>
        <h1 className="font-semibold text-3xl my-4 text-center">Membership</h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 mb-5  md:w-[800px] md:mx-auto">
          <div className="bg-green-100 px-5 text-center rounded-sm border border-green-600 hover:border-green-700 ">
            <h3 className="font-semibold my-4">Student</h3>
            <div className="p-3 bg-green-600 mb-5 hover:bg-green-700">
              <Link href="#" className="text-white font-semibold">
                $50.00
              </Link>
            </div>
          </div>
          <div className="bg-green-100 px-5 text-center rounded-sm border border-green-600 hover:border-green-700 ">
            <h3 className="font-semibold my-4">Individual</h3>
            <div className="p-3 bg-green-600 mb-5 hover:bg-green-700">
              <Link href="#" className="text-white font-semibold">
                $75.00
              </Link>
            </div>
          </div>
          <div className="bg-green-100 px-5 text-center rounded-sm border border-green-600 hover:border-green-700 ">
            <h3 className="font-semibold my-4">Family</h3>
            <div className="p-3 bg-green-600 mb-5 hover:bg-green-700">
              <Link href="#" className="text-white font-semibold">
                $100.00
              </Link>
            </div>
          </div>
        </div>
        <section class="bg-green-100 rounded-md border border-green-600  mb-10">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                      placeholder="Full Name"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label
                          for="remember"
                          class="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-green-600  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign up
                  </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    have a Already Account
                    <Link
                      href="/Login"
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default SignUp;
