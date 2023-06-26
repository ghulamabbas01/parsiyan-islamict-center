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
          <div className="my-5 bg-green-100 p-5 pb-10 rounded-md border border-green-600 h-[500px] overflow-hidden ">
            Parsiyan Cultural Association and religious is a non-profit
            organization that strives to preserve and promote the culture and
            rich traditions of our shared civilizational and cultural heritage.
            This association works with a steadfast determination to become a
            trusted platform for cultural and social exchange and participation.
            The association organizes cultural festivals and commemorative
            gatherings of prominent figures in our civilizational sphere to
            safeguard our cultural heritage. It engages in a wide range of
            activities and programs to actively hold cultural, social, and
            religious events and festivals. These events and occasions serve as
            opportunities for gathering, revisiting our roots, and raising
            awareness of the history, religion, and rich civilization of our
            community. Understanding the importance of knowledge and education,
            the association carries educational programs to promote awareness of
            history, religion, language, literature, and art. All these programs
            work as defenders of these values and serve as conduits for
            transmitting them to younger generations. The association also
            undertakes various projects and initiatives in social welfare and
            charity to assist individuals and families within our community. It
            actively collaborates with other cultural associations, educational
            institutions, and like-minded organizations to reach a broader
            audience. Parsiyan Cultural Association recognizes the vital role of
            culture and social bonds and strives to take significant steps
            towards preserving, promoting, and strengthening these values and
            historical identity by harnessing its own capacities and talents.
          </div>
          <div className="my-5  rounded-md border border-green-600 ">
            <div className="relative w-full h-[500px]">
              <Image
                src="/about-1.jpg"
                alt="hero-img"
                layout="fill"
                // objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
          <div className="my-5 bg-green-100 rounded-md border border-green-600 h-[500px] overflow-hidden ">
            <div className="relative w-full h-[500px]">
              <Image
                src="/about-2.jpg"
                alt="hero-img"
                layout="fill"
                // objectFit="contain"
              />
            </div>
          </div>
          <div className="my-5 bg-green-100 p-5 rounded-md border border-green-600 h-[500px] overflow-hidden  ">
            انجمن فرهنگی پارسیان یک سازمان غیرانتفاعی است که برای پاسداری و
            ترویج فرهنگ و سنت‌ های پر بار حوزه تمدنی و فرهنگی مشترک ما تلاش
            مینماید. این انجمن با ارادهی استوار برای تبدیل شدن به یک نشانی قابل
            اعتماد برای تبادل دیدگاه و مشارکت فرهنگی و اجتماعی کار میکند. این
            انجمن برای حفظ فرهنگ های حوزه تمدنی ما جشنواره های فرهنگی را برگزار
            و محافل بزرگداشت از شخصیت های والا مقام این حوزه را به راه میاندازد.
            این انجمن فعالیت‌ها و برنامه‌های گسترده‌ای را برای دستیابی به اهداف
            خود در دست دارد تا رویدادها و جشنواره ‌های فرهنگی، اجتماعی و دینی را
            به صورت فعال برگزار کند. این رویدادها و مناسبت ها به عنوان فرصتی
            برای گرد هم آمدن، بازبینی ریشه‌های خود، آگاهی دهی از تاریخ، دین و
            تمدن پربار این اجتماع عمل میکند. با درک اهمیت دانش و آموزش این انجمن
            برنامه‌های آموزشی را برای ترویج آگاهی از تاریخ، دین، زبان، ادبیات و
            هنر را روی دست دارد. تمام این برنامه ها برای پاسداری این ارزش ها و
            به مثابهی جریان انتقال دهنده به نسل‌های جوان عمل میکند. انجمن برای
            رفاه اجتماعی و کار های خیریه پروژه‌ها و طرح‌های خیریه گوناگون را در
            پیش گرفته تا به افراد و خانواده‌های این اجتماع کمک کند. برای رسیدن
            به مخاطبان گسترده‌تر این انجمن به صورت فعال با سایر انجمن‌های
            فرهنگی، موسسات آموزشی و سازمان‌های همسو همکاری میکند. انجمن فرهنگی
            پارسیان نقش حیاتی فرهنگ و پیوند های اجتماعی را درک می کند و تلاش
            میورزد تا در راستای پاسداری، ترویج و تحکیم این ارزش ها و هویت تاریخی
            با گرد آوری ظرفیت ها و استعداد های خودی گام های بلند بردارد.
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
