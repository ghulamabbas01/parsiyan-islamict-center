import React from "react";
import Container from "./Container";

const PrayerTimes = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10 md:pt-[100px] ">
        <div className="flex flex-col justify-center mb-5">
          <div className="text-center md:text-left">
            <div class="section-title">
              <span className="font-semibold text-md text-green-600">
                Parsiyan Islamic Center
              </span>
              <h2 className="text-6xl font-bold ">Prayer Time </h2>
            </div>
            <div class="arabic-time mt-3">
              <span className="text-green-600 underline text-lg ">
                Islamic: Shaʻban 23, 1444 AH
              </span>
              <p className="font-semibold text-xl">Saturday, March 25, 2023</p>
            </div>
            <p className="font-medium font-xl mt-2">
              “O you who have belived, seek help through patience
              <br /> and prayer. inded, allah is with the patient.” (2.153)
            </p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-3 items-center justify-center ">
            <div class="border overflow-hidden text-center rounded-md shadow-sm">
              <div className="bg-green-600 p-3 text-white font-bold ">
                Dawn Prayer
              </div>
              <h3 className="mt-5 mb-5 font-bold text-2xl">Fajar</h3>
              <div className="bg-green-600 p-2 mb-6 w-[80px] mx-auto font-semibold text-white rounded-sm ">
                5:00 AM
              </div>
            </div>
            <div class="border overflow-hidden text-center rounded-md shadow-sm">
              <div className="bg-green-600 p-3 text-white font-bold ">
                Sunrise Time
              </div>
              <h3 className="mt-5 mb-5 font-bold text-2xl">ZOHAR</h3>
              <div className="bg-green-600 p-2 mb-6 w-[80px] mx-auto font-semibold text-white rounded-sm">
                1:30 AM
              </div>
            </div>
            <div class="border overflow-hidden text-center rounded-md shadow-sm">
              <div className="bg-green-600 p-3 text-white font-bold ">
                Afternoon
              </div>
              <h3 className="mt-5 mb-5 font-bold text-2xl">ASAR</h3>
              <div className="bg-green-600 p-2 mb-6 w-[80px] mx-auto font-semibold text-white rounded-sm">
                5:30 AM
              </div>
            </div>
            <div class="border overflow-hidden text-center rounded-md shadow-sm">
              <div className="bg-green-600 p-3 text-white font-bold ">
                Sunset Prayer
              </div>
              <h3 className="mt-5 mb-5 font-bold text-2xl">MAGRIB</h3>
              <div className="bg-green-600 p-2 mb-6 w-[80px] mx-auto font-semibold text-white rounded-sm">
                7:21 AM
              </div>
            </div>
            <div class="border overflow-hidden text-center rounded-md shadow-sm">
              <div className="bg-green-600 p-3 text-white font-bold ">
                Evening Prayer
              </div>
              <h3 className="mt-5 mb-5 font-bold text-2xl">ISHA</h3>
              <div className="bg-green-600 p-2 mb-6 w-[80px] mx-auto font-semibold text-white rounded-sm">
                9:00 AM
              </div>
            </div>
            <div class="border overflow-hidden text-center rounded-md shadow-sm">
              <div className="bg-green-600 p-3 text-white font-bold ">
                Sunrise Time
              </div>
              <h3 className="mt-5 mb-5 font-bold text-2xl">JUMMA MUBARAKE</h3>
              <div className="bg-green-600 p-2 mb-6 w-[80px] mx-auto font-semibold text-white rounded-sm">
                1:30 AM
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <div class=" flex items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div class="section-title">
              <span>Prayer Time</span>
              <h2>Today’s Prayer Times</h2>
            </div>
            <div class="arabic-time">
              <span>Islamic: Shaʻban 23, 1444 AH</span>
              <p>Saturday, March 25, 2023</p>
            </div>
            <p>
              “O you who have belived, seek help through patience
              <br /> and prayer. inded, allah is with the patient.” (2.153)
            </p>
          </div>
          <div class="grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center justify-center">
            <div class="single-ptime">
              <span>Dawn Prayer</span>
              <h3>Fajar</h3>
              <p>4:01 AM</p>
            </div>
          </div>
        </div>
      </div> */}
    </Container>
  );
};

export default PrayerTimes;
