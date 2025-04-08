import Marquee from "react-fast-marquee";
import { EventData } from "./EventData";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Events() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);
  return (
    <>
      <div className="flex relative flex-col lg:flex-row md:order-2 xl:order-1 bg-event bg-cover px-5 bg-no-repeat items-center justify-between md:gap-10 lg:gap-0 py-32 bg-[-300px] md:h-[430px] lg:h-[650px]">
        <div className="flex px-5 flex-col gap-5 justify-center items-start w-full text-white absolute left-0 right-0 top-0 h-full bg-[#000000b5]">
          <p data-aos="fade-up" className="text-md font-medium">
            ENJOY WITH
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-start font-semibold w-[100%] md:w-[70%] lg:w-[50%]"
          >
            Great upcoming events for our institute
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-12 justify-center items-center py-20">
        <div className="flex flex-col justify-center items-center gap-5">
          <p data-aos="fade-up" className="text-md font-[500]">
            OUR EVENT
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl sm:text-4xl font-semibold w-[95%] md:w-[600px] text-center"
          >
            Professional online events
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-[65%] text-center"
          >
            <p className="text-[gray] font-semibold">
              Lorem ipsum dolor sit amet consectetur. Congue sit pellentesque eu
              scelerisque urna a porttitor. Massa nec ipsum sed etiam et
              facilisis bibendum.
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
        {EventData.map((data) => (
          <div
            data-aos-delay="300"
            data-aos="fade-up"
            key={data.id}
            className="relative group w-[100%] cursor-pointer"
          >
            <div className="flex justify-center items-center gap-2 absolute right-0 top-0 w-24 md:w-0 overflow-hidden md:group-hover:w-24 rounded-bl-md duration-700 bg-white">
              <p className="text-4xl font-semibold">{data.day}</p>
              <div className="text-[gray] text-sm font-semibold">
                <p>{data.month}</p>
                <p>{data.year}</p>
              </div>
            </div>
            <img src={data.img} className=" rounded-md w-[100%]" alt="" />
            <div className="h-40 md:h-0 absolute bottom-0 overflow-hidden md:group-hover:h-44 duration-700 w-full bg-white">
              <div className="w-[100%] px-10 bg-main-color-2">
                <Marquee
                  speed={30}
                  gradient={true}
                  pauseOnHover={false}
                  gradientWidth={0}
                >
                  <div className="px-5 text-md md:text-lg font-semibold py-2">
                    See event details
                  </div>

                  <div className="px-5 text-md md:text-lg font-semibold py-2">
                    See event details
                  </div>
                  <div className="px-5 text-md md:text-lg font-semibold py-2">
                    See event details
                  </div>
                </Marquee>
              </div>
              <div className="flex gap-5 justify-center items-center mt-7">
                <h1 className="text-sm font-semibold text-[gray]">
                  {data.location}
                </h1>
                <span className="text-sm font-semibold text-[gray]">
                  9:00 AM - 7:00 PM
                </span>
              </div>
              <h1 className="text-xl md:text-2xl text-center font-semibold mt-4 md:mt:3">
                {data.desc}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        className="bg-main-color-2 ml-5 lg:px-5 xl:px-24 py-5 md:py-14 lg:py-16 flex w-[94%] md:w-[97%] gap-5 lg:gap-0 flex-col lg:flex-row items-center justify-center lg:items-center lg:justify-between rounded-md relative -bottom-20"
      >
        <div className="w-[100%] text-center lg:text-start lg:w-[70%] xl:w-[35%]">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold w-[100%]">
            Are you ready to start your journey?
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 w-[100%] lg:w-[80%] xl:w-[50%]">
          <button className="bg-main-color-1  text-sm md:text-base text-white w-[50%] sm:w-[30%] md:w-[auto] md:px-12 lg:px-10 xl:px-12 py-4 mt-2 font-medium rounded-md hover:scale-95 duration-300">
            Browse Courses
          </button>
          <button className="bg-transparent  text-sm md:text-base border border-main-color-1 text-black w-[50%] sm:w-[30%] md:w-[auto] md:px-12 lg:px-10 xl:px-12 py-4 mt-2 font-medium rounded-md hover:scale-95 duration-300">
            Became A Teacher
          </button>
        </div>
      </div>
    </>
  );
}

export default Events;
