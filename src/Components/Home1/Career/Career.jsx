import career from "../../../assets/images/Home1/66eb9e25c4d132b7abc4dcb2_Course Small Image-8-p-500.webp";
import career2 from "../../../assets/images/Home1/66e2828981ae7c4eabf6c47b_Career Page Image-2.webp";
import check from "../../../assets/images/Home1/66e28289f0f3ea3c0aa2d985_Black Check.svg";
import empl from "../../../assets/images/Home1/66d9685910e51570ad70d12e_Employ Images.webp";

import { CareerData } from "./CareerData";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Career() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);
  return (
    <>
      <div className="flex relative flex-col lg:flex-row md:order-2 xl:order-1 bg-career bg-cover px-5 bg-no-repeat items-center justify-between md:gap-10 lg:gap-0 py-32 bg-[-300px] md:h-[430px] lg:h-[620px]">
        <div className="flex flex-col gap-5 justify-center items-start px-5 w-full text-white absolute left-0 right-0 top-0 h-full bg-[#00000073]">
          <p data-aos="fade-up" className="font-semibold">
            WE ARE HIRING
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-start font-semibold w-[100%] md:w-[70%] lg:w-[60%] xl:w-[45%]"
          >
            Begin your journey as an instructor
          </h1>
        </div>
      </div>
      <div className="mt-20 px-5 relative flex flex-col pb-64 sm:pb-24 md:pb-60 lg:pt-10 gap-14 lg:gap-72 lg:flex-row justify-between items-center">
        <div className="relative pr-5 lg:pr-0 flex w-[100%] lg:w-[500px]">
          <img
            data-aos="fade-up"
            src={career}
            className="lg:w-64 w-[100%] md:w-[50%] xl:w-[450px] h-[250px] sm:h-[440px] md:h-[450px] lg:h-[350px] xl:h-[380px] rounded-md shadow-2xl"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            src={career2}
            className="relative hidden md:block lg:top-28 left-8 right-0 w-[50%] lg:w-64 xl:w-52 lg:h-[350px] h-[250px] sm:h-[340px] md:h-[450px] xl:h-[380px] rounded-md shadow-2xl"
            alt=""
          />
        </div>
        <div className="lg:w-[1045px] xl:w-[620px] h-80 flex items-start flex-col gap-3 md:gap-5">
          <div data-aos="fade-up">
            <p className="sm:text-sm md:text-md font-medium">WHAT WE ARE</p>
          </div>
          <div className="flex flex-col gap-3 md:gap-5">
            <div data-aos="fade-up">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-normal md:leading-[53px]">
                We help connectivity across the world
              </h1>
            </div>
            <div data-aos="fade-up" className="w-[100%] lg:w-[90%]">
              <p className="text-[gray] font-medium text-sm sm:text-md md:text-md">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusm
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="px-5 flex justify-start items-start flex-col gap-7">
              <div
                data-aos="fade-up"
                className="flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-8"
              >
                <div>
                  <img src={check} className="w-7 mt-2" alt="" />
                </div>
                <div className="flex flex-col gap-3 w-[100%] lg:w-[80%]">
                  <h1 className="text-[20px] md:text-[21px] font-semibold">
                    Full network visibility worldwide
                  </h1>
                  <p className="text-[gray] text-[15px] md:text-[16px] font-semibold">
                    Amet consectetur adipiscing elit sed eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-8"
              >
                <div>
                  <img src={check} className="w-7 mt-2" alt="" />
                </div>
                <div className="flex flex-col gap-3 w-[100%] lg:w-[80%]">
                  <h1 className="text-[20px] md:text-[21px] font-semibold">
                    Supported the use of fiber optic cable
                  </h1>
                  <p className="text-[gray] text-[15px] md:text-[16px] font-semibold">
                    Amet consectetur adipiscing elit sed eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-main-color-3 py-5 pb-16 px-5">
        <div className="flex flex-col gap-12 justify-center items-center py-20">
          <div className="flex flex-col justify-center items-center gap-1 md:gap-5">
            <p data-aos="fade-up" className="text-md font-[500]">
              JOB OPENING
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-2xl sm:text-2xl md:text-5xl font-semibold w-[100%] md:w-[700px] lg:w-[900px] text-center"
            >
              Be a part of our faculty
            </h1>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 w-full">
          {CareerData.map((data) => (
            //   <>
            <div
              data-aos="zoom-in"
              key={data.id}
              className="lg:w-[100%] flex flex-col gap-5 bg-white px-12 py-10 hover:shadow-2xl duration-300"
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-xl lg:text-2xl font-semibold">
                  {data.title}
                </h1>
                <div>
                  <p className="text-[gray]">{data.subT1}</p>
                  <p className="text-[gray]">{data.subT2}</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-start justify-start gap-4">
                <button className="bg-main-color-2 text-sm md:text-base w-[50%] sm:w-[30%] md:w-[auto] md:px-12 lg:px-10 xl:px-12 py-4 mt-2 font-medium rounded-sm">
                  {data.btn}
                </button>
                <button className="bg-main-color-1 text-sm md:text-base text-white w-[50%] sm:w-[30%] md:w-[auto] md:px-12 lg:px-10 xl:px-12 py-4 mt-2 font-medium rounded-sm hover:scale-95 duration-300">
                  Apply Now
                </button>
              </div>
              <div>
                {data.jobInfo.map((data2) => (
                  <ul
                    key={data2}
                    className="text-[gray] text-md sm:text-lg list-disc px-5"
                  >
                    <li>{data2}</li>
                  </ul>
                ))}
              </div>
            </div>
            //   </>
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

export default Career;
