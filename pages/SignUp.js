import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Container from "@/components/Container";
const SignUp = () => {
  // State variables for form fields
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && name) {
      router.push("https://www.paypal.com/in/signin/");
    }
  };
  return (
    <>
      <div className="bg-green-600 w-full pb-16 border pt-[150px]">
        <h1 className=" text-center text-white  font-bold text-5xl">
          SignUp / Login
        </h1>
      </div>
      <Container>
        <h1 className="font-semibold text-3xl my-4 text-center">Membership</h1>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 mb-5  ">
          <div class="tabs">
            <input type="radio" name="tab" id="tab1" role="tab" checked />
            <label for="tab1" id="tab1-label">
              <h3 className="font-semibold my-4 text-center">
                Regisreation Fee
              </h3>
              <section aria-labelledby="tab1-label">
                <div className="p-2 text-center bg-green-400   text-white font-semibold mb-5 cursor-pointer">
                  $100.00
                </div>
              </section>
            </label>
          </div>
          <div class="tabs">
            <input type="radio" name="tab" id="tab2" role="tab" checked />
            <label for="tab2" id="tab2-label">
              <h3 className="font-semibold my-4 text-center">Quarterly</h3>
              <section aria-labelledby="tab2-label">
                <div className="p-2 text-center bg-green-400  text-white font-semibold  mb-5 cursor-pointer">
                  $75
                </div>
              </section>
            </label>
          </div>
          <div class="tabs">
            <input type="radio" name="tab" id="tab3" role="tab" checked />
            <label for="tab3" id="tab3-label">
              <h3 className="font-semibold my-4 text-center">6 Month</h3>
              <section aria-labelledby="tab3-label">
                <div className="p-2 text-center bg-green-400  text-white font-semibold  mb-5 cursor-pointer">
                  $150
                </div>
              </section>
            </label>
          </div>
          <div class="tabs">
            <input type="radio" name="tab" id="tab4" role="tab" checked />
            <label for="tab4" id="tab4-label">
              <h3 className="font-semibold my-4 text-center">
                Annual Membership
              </h3>
              <section aria-labelledby="tab4-label">
                <div className="p-2 text-center bg-green-400  text-sm md:text-md text-white font-semibold  mb-5 cursor-pointer">
                  $300
                </div>
              </section>
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 bg-green-100 rounded-md border border-green-600  mb-10 justify-center items-center overflow-hidden">
          <div>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto">
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <form
                    class="space-y-4 md:space-y-6 mx-auto"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-center.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        placeholder="Full Name"
                        required=""
                        onChange={(e) => setName(e.target.value)}
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
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-center.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        placeholder="name@company.com"
                        required=""
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setEmail(e.target.password)}
                        type="password"
                        name="password"
                        id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 text-center.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div>
                      <hr />
                      <h1 className="flex items-center my-3 text-center justify-center font-semibold text-xl">
                        <span class="material-symbols-outlined mr-3">
                          task_alt
                        </span>
                        Paypal
                      </h1>
                      <hr />
                    </div>
                    <div className="mb-3">
                      <h1 className="my-3 text-center  font-semibold text-xl">
                        How you want to pay?
                      </h1>
                      <div class="flex justify-center mb-5">
                        <div class="flex items-center mr-4">
                          <input
                            id="inline-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 cursor-pointer dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Auto Debit Payment
                          </label>
                        </div>
                        <div class="flex items-center mr-4 ">
                          <input
                            id="inline-2-radio"
                            type="radio"
                            value=""
                            name="inline-radio-group"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 cursor-pointer dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="inline-2-radio"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Manual Payment
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        class=" text-white bg-green-600 text-lg flex justify-center items-center w-full  mx-auto py-2.5 text-center "
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative w-full h-[500px] ">
              <Image
                src="/Sign-up.svg"
                alt="dunate-img"
                layout="fill"
                // objectFit="contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
