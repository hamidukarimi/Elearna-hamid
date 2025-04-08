import { TeamData } from "./TeamData";
import empl from "../../../assets/images/Home1/66d9685910e51570ad70d12e_Employ Images.webp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
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
        <div className="flex flex-col gap-5 justify-center items-center px-5 w-full text-white absolute left-0 right-0 top-0 h-full bg-[#00000092]">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-5xl font-semibold w-[100%] md:w-[70%] lg:w-[60%] xl:w-[100%]"
          >
            Our experts
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-12 justify-center items-center py-20">
        <div className="flex flex-col justify-center items-center gap-1 md:gap-5">
          <p data-aos="fade-up" className="text-md font-[500]">
            CONTACT US
          </p>
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-2xl md:text-5xl font-semibold w-[100%] md:w-[700px] lg:w-[700px] text-center"
          >
            Know our expert team agents, they solve your questions
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[gray] text-center text-md font-semibold"
          >
            Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
            nam id
          </p>
        </div>
      </div>

      <div className="grid mb-16 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-5">
        {TeamData.map((data) => (
          <div
            data-aos="fade-up"
            key={data.id}
            className="flex group flex-col justify-center items-center gap-5 cursor-pointer"
          >
            <div className="overflow-hidden bg-main-color-3 w-[100%] sm:w-[300px] md:w-[250px] lg:w-[245px] xl:w-[280px] flex justify-center rounded-md">
              <img
                src={data.img}
                className="h-[100%] sm:h-[60vh] group-hover:scale-110 duration-500 w-[70%] object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-lg sm:text-xl font-semibold">{data.name}</h1>
              <h1 className="text-sm text-[gray]">{data.job}</h1>
            </div>
          </div>
        ))}
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

export default Team;
