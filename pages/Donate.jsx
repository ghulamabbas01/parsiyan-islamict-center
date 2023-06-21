import Container from "@/components/Container";
import React from "react";

const Donate = () => {
  return (
    <div className=" pt-[100px] pb-10  ">
      <div className="bg-gray-100 w-full p-10 border">
        <h1 className=" text-center text-green-600  font-bold text-5xl">
          Donate
        </h1>
      </div>
      <Container>
        <div className=" text-center  font-bold text-5xl">
          Thank You For Your Desire To Give!
        </div>
      </Container>
    </div>
  );
};

export default Donate;
