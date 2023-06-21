import Container from "@/components/Container";
import React from "react";

const Donate = () => {
  return (
    <div className=" pt-[100px] pb-10  ">
      <div className="bg-green-600 w-full p-10 border">
        <h1 className=" text-center text-white  font-bold text-5xl">Donate</h1>
      </div>
      <Container>
        <div className=" text-center  font-bold text-5xl my-10 md:w-[500px] mx-auto">
          Thank You For Your Desire To Give!
        </div>

        <div className="my-5">
          I am writing to you today on behalf of Parsiyan Islamic Center, a
          non-profit organization that provides support and assistance to
          individuals and families in our community who are in need of burial
          expenses and other essential services. Not to mention the operational
          cost to run the Islamic center. As you may know, the cost of funerals
          and burials can be prohibitively expensive, leaving many families
          struggling to cover the costs and putting them at risk of financial
          hardship. Our organization is committed to providing support to these
          families, so that they can give their loved ones a dignified farewell
          without having to worry about the financial burden. In addition to
          burial expenses, we also provide support for operating costs such as
          rent, utilities, and other necessary expenses that are critical to the
          ongoing operation of our organization. These costs can be a
          significant challenge for our organization, but with your support, we
          can continue to provide these important services to our community.
          <div className="font-bold my-5">
            Your donation will help us to cover the following expenses:
          </div>
          <ul className="">
            <li>⦁ Burial expenses for families in need</li>
            <li>⦁ Rent and utilities for our organization’s facilities.</li>
            <li>⦁ Office supplies and other necessary expenses.</li>
          </ul>
          <p className="my-3">
            Your contribution will make a difference in the lives of those we
            serve, providing much-needed assistance to families during times of
            great hardship. Your support will help us to continue to provide our
            services and to make a meaningful difference in the lives of our
            community members.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Donate;
