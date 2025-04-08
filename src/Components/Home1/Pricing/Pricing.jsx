import check from "../../../assets/images/Home1/66e126a8745c48b34dd303f6_Pricing Check.svg";
import faq from "../../../assets/images/Home1/66de9b24cdbecf88f8d1b2da_FAQ Icons.svg";
import empl from "../../../assets/images/Home1/66d9685910e51570ad70d12e_Employ Images.webp";
import { FAQDate } from "../FAQ/FAQDate";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);
  const [box1, setBox1] = useState(null);
  const [value, setValue] = useState(false);
  return (
    // first section
    <>
      <div className="flex flex-col lg:flex-row md:order-2 xl:order-1 bg-aboutHero bg-cover px-5 bg-no-repeat items-center justify-between md:gap-10 lg:gap-0 bg-main-color-1 py-32 bg-[-300px] lg:h-auto">
        <div
          data-aos="fade-up"
          className="mt-14 flex flex-col gap-5 justify-center items-start w-full text-white"
        >
          <p className="font-semibold text-sm">PRICING</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-start font-semibold w-[100%] md:w-[70%] lg:w-[60%] xl:w-[45%]">
            Flexible pricing plan for everyone
          </h1>
          <div className="flex gap-5 mt-5">
            <h1 className="text-lg font-semibold">MONTHLY</h1>
            <div
              onClick={() => setValue((pre) => !pre)}
              className={`
                w-16 px-1 cursor-pointer justify-start flex items-center h-8 rounded-[20px] bg-[#364d52]`}
            >
              <div
                className={`
                 ${value ? "translate-x-8" : "translate-x-0"}
                w-6 h-6 rounded-full duration-500 bg-main-color-2`}
              ></div>
            </div>
            <h1 className="text-lg font-semibold">YEARLY</h1>
          </div>

          <div className="mt-10 grid w-full grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-md px-10 lg:px-5 xl:px-16 w-full h-[590px] lg:h-[690px] xl:h-auto py-10 lg:py-16 flex flex-col justify-start items-start gap-20 lg:gap-32 xl:gap-40">
              <div className="flex flex-col gap-9">
                <div className="flex flex-col gap-5 w-[90%] lg:w-[80%]">
                  <h1 className="text-black text-xl md:text-2xl font-semibold">
                    Basic
                  </h1>
                  <p className="text-[gray] text-md md:text-lg font-semibold">
                    Lorem ipsum dolor sit amet consectetur erat ipsum non.
                  </p>
                </div>
                <div className="flex items-end justify-start">
                  <h1 className="text-black text-3xl md:text-4xl font-semibold">
                    {value ? "$139" : "$199"}
                  </h1>
                  <span className="text-md font-semibold text-black">
                    /month
                  </span>
                </div>
                <div className="flex flex-col items-start justify-start gap-3">
                  <div className="flex items-center justify-start gap-5">
                    <img src={check} alt="" />
                    <p className="text-md md:text-lg text-[gray] font-semibold">
                      Access to 10+ top courses
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-5">
                    <img src={check} alt="" />
                    <p className="text-md md:text-lg text-[gray] font-semibold">
                      Certification prep
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-5">
                    <img src={check} alt="" />
                    <p className="text-md md:text-lg text-[gray] font-semibold">
                      Customizable content
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-5">
                    <img src={check} alt="" />
                    <p className="text-md md:text-lg text-[gray] font-semibold">
                      AI-powered coding exercises
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <button className="bg-main-color-1 text-white text-sm md:text-base w-[100%] sm:w-[90%] lg:w-[280px] xl:w-[300px] md:px-12 lg:px-9 xl:px-12 py-3 mt-2 font-medium rounded-md hover:scale-95 duration-300">
                  Subscribe This Plan
                </button>
              </div>
            </div>
            <div className="bg-white rounded-md px-10 lg:px-5 xl:px-16 w-full h-[590px] lg:h-[690px] xl:h-auto py-10 lg:py-16 flex flex-col justify-start items-start gap-20 lg:gap-32 xl:gap-40">
              <div className="flex flex-col gap-9">
                <div className="flex flex-col gap-5 w-[90%] lg:w-[80%]">
                  <h1 className="text-black text-xl md:text-2xl font-semibold">
                    Standard
                  </h1>
                  <p className="text-[gray] text-md md:text-lg font-semibold">
                    Lorem ipsum dolor sit amet consectetur erat ipsum non.
                  </p>
                </div>
                <div className="flex items-end justify-start">
                  <h1 className="text-black text-3xl md:text-4xl font-semibold">
                    {value ? "$279" : "$299"}
                  </h1>
                  <span className="text-md font-semibold text-black">
                    /month
                  </span>
                </div>
                <div className="flex flex-col items-start justify-start gap-3">
                  <div className="flex items-center justify-start gap-5">
                    <img src={check} alt="" />
                    <p className="text-md md:text-lg text-[gray] font-semibold">
                      Access to 10+ top courses
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-5">
                    <img src={check} alt="" />
                    <p className="text-md md:text-lg text-[gray] font-semibold">
                      Certification prep
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-5">
                    <img src={check} alt="" />
                    <p className="text-md md:text-lg text-[gray] font-semibold">
                      Customizable content
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-5">
                    <img src={check} alt="" />
                    <p className="text-md md:text-lg text-[gray] font-semibold">
                      AI-powered coding exercises
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <button className="bg-main-color-1 text-white text-sm md:text-base w-[100%] sm:w-[90%] lg:w-[280px] xl:w-[300px] md:px-12 lg:px-9 xl:px-12 py-3 mt-2 font-medium rounded-md hover:scale-95 duration-300">
                  Subscribe This Plan
                </button>
              </div>
            </div>
            <div className="bg-transparent border border-main-color-2 rounded-md px-10 lg:px-5 xl:px-16 w-full h-[590px] lg:h-[690px] xl:h-auto py-10 lg:py-16 flex flex-col justify-start items-start gap-20 lg:gap-32 xl:gap-40">
              <div className="flex flex-col gap-9">
                <div className="flex flex-col gap-5 w-[90%] lg:w-[80%]">
                  <h1 className="text-white text-xl md:text-2xl font-semibold">
                    Premium
                  </h1>
                  <p className="text-gray-400 text-md md:text-lg font-semibold">
                    Lorem ipsum dolor sit amet consectetur erat ipsum non.
                  </p>
                </div>
                <div className="flex items-end justify-start">
                  <h1 className="text-white text-3xl md:text-4xl font-semibold">
                    {value ? "$659" : "$699"}
                  </h1>
                  <span className="text-md font-semibold text-gray-400">
                    /month
                  </span>
                </div>
                <div className="flex flex-col items-start justify-start gap-3">
                  <div className="flex items-center justify-start gap-5">
                    <img src={check} alt="" />
                    <p className="text-md md:text-lg text-gray-400 font-semibold">
                      Access to 10+ top courses
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-5">
                    <img src={check} alt="" />
                    <p className="text-md md:text-lg text-gray-400 font-semibold">
                      Certification prep
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-5">
                    <img src={check} alt="" />
                    <p className="text-md md:text-lg text-gray-400 font-semibold">
                      Customizable content
                    </p>
                  </div>
                  <div className="flex items-center justify-start gap-5">
                    <img src={check} alt="" />
                    <p className="text-md md:text-lg text-gray-400 font-semibold">
                      AI-powered coding exercises
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <button className="bg-main-color-2 text-black text-sm md:text-base w-[100%] sm:w-[90%] lg:w-[280px] xl:w-[300px] md:px-12 lg:px-9 xl:px-12 py-3 mt-2 font-medium rounded-md hover:scale-95 duration-300">
                  Subscribe This Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="bg-main-color-3 px-5 flex flex-col justify-center gap-10 sm:gap-20 w-full items-center py-28">
        <div className="flex flex-col md:flex-row items-center justify-center  md:items-center md:justify-between gap-10 md:gap-20 lg:gap-40">
          <div>
            <img data-aos="fade-up" src={faq} alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col justify-center items-center md:items-start md:justify-start gap-2 md:gap-5"
          >
            <p className="text-md md:text-lg font-semibold">CONTACT US</p>
            <div className="w-[100%] md:w-[80%]">
              <h1 className="text-3xl text-center md:text-start md:text-5xl font-semibold">
                Frequently asked questions
              </h1>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-[100%] lg:w-[90%] xl:w-[70%] flex flex-col justify-center items-center gap-3"
        >
          {FAQDate.map((data) => (
            <div
              key={data.id}
              className={`
            ${box1 === data.id ? "h-36" : "h-12"}
            border-b overflow-hidden duration-300 w-[100%]`}
            >
              <div
                onClick={() => setBox1(box1 === data.id ? null : data.id)}
                className="flex items-center gap-4 justify-between cursor-pointer"
              >
                <h1 className="text-[15px] sm:text-[16px] md:text-[19px] font-medium">
                  {data.title}
                </h1>
                <div>
                  {box1 === data.id ? (
                    <span className="text-2xl sm:text-3xl font-bold">-</span>
                  ) : (
                    <span className="text-2xl sm:text-3xl font-bold">+</span>
                  )}{" "}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-[gray] text-sm md:text-lg font-medium">
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#00000052] relative lg:px-5 xl:px-24 py-5 md:py-14 lg:py-36 flex w-[100%] gap-5 lg:gap-0 flex-col lg:flex-row items-center justify-center lg:items-center lg:justify-between">
        <img
          src={empl}
          className="absolute h-full w-full left-0 object-cover z-[-1]"
          alt=""
        />
        <div className="w-[100%] text-center lg:text-start lg:w-[70%] xl:w-[35%]">
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-3xl text-white md:text-4xl font-semibold w-[100%]"
          >
            Are you ready to start your journey?
          </h1>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 w-[100%] lg:w-[80%] xl:w-[50%]"
        >
          <button className="bg-transparent border border-white text-sm md:text-base text-white w-[50%] sm:w-[30%] md:w-[auto] md:px-12 lg:px-10 xl:px-12 py-3 mt-2 font-medium rounded-md hover:scale-95 duration-300">
            Browse Courses
          </button>
          <button className="bg-main-color-2  text-sm md:text-base text-black w-[50%] sm:w-[30%] md:w-[auto] md:px-12 lg:px-10 xl:px-12 py-3 mt-2 font-medium rounded-md hover:scale-95 duration-300">
            Became A Teacher
          </button>
        </div>
      </div>
    </>
  );
}

export default Pricing;
