import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className=" pt-[100px] pb-10  ">
      <div className="bg-green-600 w-full p-10 border">
        <h1 className=" text-center text-white  font-bold text-5xl">About</h1>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
          <div className="my-5 bg-green-100 p-5 rounded-md border border-green-600 h-[550px] ">
            Parsiyan Cultural Association is a non-profit organization that aims
            to promote and preserve the cultural heritage of the Parsi
            community. It organizes various events and activities throughout the
            year, including cultural festivals, educational seminars, and social
            gatherings. The association also provides support and resources for
            Parsi youth to connect with their roots and learn about their
            history and traditions. Their efforts have helped to strengthen the
            Parsi community and raise awareness about their unique culture.
            Additionally, the association organizes cultural events and
            festivals to celebrate Parsi traditions and promote community
            bonding. Through these initiatives, they aim to preserve and pass on
            their rich cultural heritage to future generations.
          </div>
          <div className="my-5 bg-green-100 p-5 rounded-md border border-green-600 h-[550px]  ">
            انجمن فرهنگی پارسیان یک سازمان غیرانتفاعی است که هدف آن ترویج و حفظ
            میراث فرهنگی جامعه پارسیان است. این سازمان رویدادها و فعالیت های
            مختلفی را در طول سال سازماندهی می کند، از جمله جشنواره های فرهنگی،
            سمینارهای آموزشی و گردهمایی های اجتماعی. این انجمن همچنین حمایت و
            منابعی را برای جوانان پارسی فراهم می کند تا با ریشه های خود ارتباط
            برقرار کنند و با تاریخ و سنت های خود آشنا شوند. تلاش آنها به تقویت
            جامعه پارسی و افزایش آگاهی در مورد فرهنگ منحصر به فرد آنها کمک کرده
            است. علاوه بر این، انجمن رویدادها و جشنواره‌های فرهنگی را برای
            بزرگداشت سنت‌های پارسی و ترویج پیوند جامعه ترتیب می‌دهد. هدف آنها از
            طریق این ابتکارات حفظ و انتقال میراث فرهنگی غنی خود به نسل های آینده
            است
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
