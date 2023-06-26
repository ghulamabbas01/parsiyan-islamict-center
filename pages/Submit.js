import Link from "next/link";
import React from "react";

const Submit = () => {
  return (
    <div className="pt-[120px] pb-10">
      <div className="w-[400px] h-[250px] mx-auto bg-green-100 flex justify-center flex-col gap-5 items-center rounded-md border border-green-600 ">
        <h1 className="font-bold text-2xl">Thanku For Contacting ME</h1>
        <Link
          href="/"
          className="bg-green-600 px-5 py-2 font-medium text-lg text-white rounded"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Submit;
