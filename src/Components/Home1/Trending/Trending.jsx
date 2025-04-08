import { TrendingData, TrendingData2, TrendingData3 } from "./TrendingData";
import rate from "../../../assets/images/Home1/66c6fb8b857efb6c4c737b5d_Rating.svg";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Trending() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);
  const [cards, showCards] = useState(null);
  return (
    <div className="relative  bg-main-color-3 mt-16 px-5 py-20">
      <div className="flex justify-start gap-5 items-start lg:justify-between lg:items-end flex-col lg:flex-row">
        <div className="flex flex-col justify-start items-start gap-5">
          <p className="text-sm md:text-md font-[500]">TRENDING COURSES</p>
          <div className="w-[100%] md:w-[100%] lg:w-[600px]">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-start">
              Explore our top programs
            </h1>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="relative mt-20 grid md:grid-cols-2 xl:grid-cols-4 justify-center items-start gap-5"
      >
        {TrendingData.map((data) => (
          <div
            key={data.id}
            onMouseOver={() => showCards(data.id)}
            onMouseLeave={() => showCards(null)}
            className="relative h-[435px] group w-[90vw] md:w-[100%] lg:w-[78%] xl:w-[100%] pb-5 bg-white flex flex-col gap-7"
          >
            <div className="overflow-hidden">
              <img
                src={data.img}
                className="w-full h-56 object-cover group-hover:scale-110 duration-1000"
                alt=""
              />
            </div>
            <div className="absolute top-2 right-3 bg-[#254edb] text-white py-[24px] px-[22px] font-medium rounded-full">
              {data.badge}
            </div>
            <div className="px-5 flex flex-col gap-5">
              <p className="text-xs font-medium text-[gray]">{data.title}</p>
              <h1 className="text-[20px] sm:text-[21px] font-medium w-[100%] md:w-[90%]">
                {data.desc}
              </h1>
              <div className="flex gap-1">
                <img src={rate} alt="" />
                <span className="text-sm text-[#a19e9e]">4.88 (210)</span>
              </div>
            </div>
            {cards === data.id
              ? TrendingData2.map(
                  (dat2) =>
                    dat2.id === data.id && (
                      <div
                        key={dat2.id}
                        className={`${dat2.class} z-20 duration-300 absolute shadow-xl top-5 lg:-right-24 px-5 h-[410px] pt-9 pb-9 group w-[90vw] md:w-[100%] lg:w-[100%] xl:w-[350px] bg-white flex flex-col gap-7 rounded-md`}
                      >
                        <div className="w-[80%] flex flex-col gap-3">
                          <h1 className="font-semibold text-xl">
                            {dat2.title}
                          </h1>
                          <ul className="flex gap-6 text-xs px-5 text-[gray] list-disc">
                            <li>{dat2.btn1}</li>
                            <li>{dat2.btn2}</li>
                          </ul>
                        </div>
                        <div className="w-[100%] flex flex-col gap-3">
                          <p className="text-[gray] text-sm">{dat2.desc}</p>
                          <ul className="text-[gray]">
                            <li className="flex items-center gap-3">
                              <FaCheck className="text-xs font-thin text-[gray]" />{" "}
                              Lorem ipsum dolor sit amet consectetur
                            </li>
                            <li className="flex items-center gap-3">
                              <FaCheck className="text-xs font-thin text-[gray]" />{" "}
                              Lorem ipsum dolor
                            </li>
                            <li className="flex items-center gap-3">
                              <FaCheck className="text-xs font-thin text-[gray]" />{" "}
                              Lorem ipsum dolor sit
                            </li>
                          </ul>
                        </div>
                        <div>
                          <button className="bg-main-color-2 w-[90%] md:px-4 py-3 font-medium rounded-sm hover:scale-95 duration-300">
                            Course Details
                          </button>
                        </div>
                      </div>
                    )
                )
              : null}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-12 justify-center items-center py-20">
        <div className="flex flex-col justify-center items-center gap-5">
          <p data-aos="fade-up" className="text-md font-[500]">
            WHY WE ARE
          </p>
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-4xl font-semibold w-[95%] md:w-[600px] text-center"
          >
            Elevate your professional journey
          </h1>
          <div data-aos="fade-up" className="w-[65%] text-center">
            <p className="text-[gray] font-semibold">
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris mus. Vitae diam dolor lacus amet integer ut.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="mb-52 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 justify-end"
      >
        {TrendingData3.map((data) => (
          <div
            key={data.id}
            className="flex flex-col gap-3 text-center justify-center items-center md:w-[350px] lg:w-[230px] xl:w-[300px]"
          >
            <div>
              <img src={data.img} alt="" />
            </div>
            <div>
              <h1 className="md:text-lg lg:text-xl font-semibold">
                {data.title}
              </h1>
            </div>
            <div>
              <p className="text-[gray] md:text-sm lg:text-base font-semibold">
                {data.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        className="bg-main-color-2 lg:px-5 xl:px-24 py-5 md:py-14 lg:py-16 mt-20 flex w-[94%] md:w-[97%] gap-5 lg:gap-0 flex-col lg:flex-row items-center justify-center lg:items-center lg:justify-between rounded-md absolute -bottom-20"
      >
        <div className="w-[100%] text-center lg:text-start lg:w-[70%] xl:w-[35%]">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold w-[100%]">
            Are you ready to start your journey?
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 w-[100%] lg:w-[80%] xl:w-[50%]">
          <button className="bg-main-color-1  text-sm md:text-base text-white w-[50%] sm:w-[30%] md:w-[auto] md:px-12 lg:px-10 xl:px-12 py-3 mt-2 font-medium rounded-md hover:scale-95 duration-300">
            Browse Courses
          </button>
          <button className="bg-transparent text-sm md:text-base border border-main-color-1 text-black w-[50%] sm:w-[30%] md:w-[auto] md:px-12 lg:px-10 xl:px-12 py-3 mt-2 font-medium rounded-md hover:scale-95 duration-300">
            Became A Teacher
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trending;
