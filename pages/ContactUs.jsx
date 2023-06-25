import React from "react";

import emailjs from "@emailjs/browser";

import Container from "@/components/Container";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1ce3oq4",
        "template_4ouulo6",
        e.target,
        "L7LjjRX4cJF8Hyx4I"
      )
      .then((res) => {
        console.log("SUCCESS!", res);
      })
      .catch((res) => {
        alert("Something went wrong");
      });
  }
  function submitForm() {
    document.contact - form.submit();
    document.contact - form.reset();
  }
  return (
    <div className="pt-[120px] pb-10 ">
      <div className="bg-green-600 w-full p-10 border ">
        <h1 className=" text-center text-white  font-bold text-5xl">
          Contact Us
        </h1>
        <p class=" font-light text-center text-white md:w-[700px] mx-auto my-5  sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
      </div>

      <>
        <Container>
          <div className="relative w-full h-96 mt-10 mb-5">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.3508089307516!2d-121.36684918958143!3d38.61780997166734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809adbfb41b6b3d1%3A0x34e36d3bc6a81720!2s2894%20Eastern%20Ave%2C%20Sacramento%2C%20CA%2095821!5e0!3m2!1sen!2sus!4v1687542621990!5m2!1sen!2sus"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div class="py-8 my-14 lg:py-16 px-4 bg-green-100 border border-green-500 rounded-lg">
            <form action="#" class="space-y-8" noValidate onSubmit={sendEmail}>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="first name"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Phone Number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Phone number"
                  required
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>

              <input
                onclick={submitForm()}
                type="submit"
                value="Send"
                class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              />
            </form>
          </div>
        </Container>
      </>
    </div>
  );
};

export default ContactUs;
