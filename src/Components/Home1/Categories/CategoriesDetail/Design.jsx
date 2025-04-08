import AOS from "aos";
import "aos/dist/aos.css";
import rate from "../../../../assets/images/Home1/66c6fb8b857efb6c4c737b5d_Rating.svg";
import { useEffect } from "react";
import { DesignDetail } from "./DesignDetail";
import empl from "../../../../assets/images/Home1/66d9685910e51570ad70d12e_Employ Images.webp";

function Design() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);
  return (
    <>
      <div className="flex flex-col lg:flex-row md:order-2 xl:order-1 bg-courseHero bg-cover px-5 bg-no-repeat items-center justify-between md:gap-10 lg:gap-0 bg-main-color-1 py-32 md:h-[430px] lg:h-[420px]">
        <div
          data-aos="fade-up"
          className="flex flex-col gap-5 justify-end items-center w-full text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-center font-semibold w-[100%] md:w-[70%] lg:w-[60%] xl:w-[40%]">
            Design
          </h1>
        </div>
      </div>

      <div className="px-5 mt-20 pb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
        {DesignDetail.map((data) => (
          <div
            data-aos-delay="300"
            data-aos="fade-up"
            key={data.id}
            className="relative group h-[500px] w-[100%] cursor-pointer"
          >
            <img
              src={data.img}
              className="h-full object-cover rounded-md w-[100%]"
              alt=""
            />
            <div className="absolute rounded-md top-0 bottom-0 right-0 left-0 h-full w-full bg-gradient-to-t from-[#000000a2] from-50% to-[#ffffff00] to-9 0% ... flex flex-col justify-end items-start gap-3 pb-10 px-8">
              <span className="fixed left-5 top-5 border-l border-t lg:w-0 lg:h-0 duration-1000 overflow-hidden lg:group-hover:w-44 w-44 lg:group-hover:h-44 h-44"></span>
              <div className="absolute top-10 lg:group-hover:scale-125 duration-700 right-10 bg-[#254edb] text-white py-[24px] px-[22px] font-medium rounded-full">
                {data.badge}
              </div>
              <div>
                <h1 className="text-[#d0cccc] font-semibold text-sm">
                  {data.title}
                </h1>
              </div>
              <div>
                <p className="text-white font-semibold text-xl lg:text-2xl leading-7">
                  {data.desc}
                </p>
                <div className="flex gap-1 mt-2">
                  <img src={rate} alt="" />
                  <span className="text-sm text-[#a19e9e]">4.88 (210)</span>
                </div>
              </div>
              <div className="w-full z-10 mt-5 lg:h-0 overflow-hidden lg:group-hover:h-14 duration-500">
                <button className="bg-main-color-2 w-full py-3 rounded-md text-sm font-semibold hover:scale-95 duration-300">
                  Buy Course
                </button>
              </div>
              <span className="fixed right-5 bottom-5 border-r border-b lg:w-0 lg:h-0 duration-1000 overflow-hidden lg:group-hover:w-44 w-44 lg:group-hover:h-44 h-44"></span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#00000052] relative mt-5 lg:px-5 xl:px-24 py-5 md:py-14 lg:py-36 flex w-[100%] gap-5 lg:gap-0 flex-col lg:flex-row items-center justify-center lg:items-center lg:justify-between">
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

export default Design;
