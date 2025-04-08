import cat1 from "../../../assets/images/Home1/66c6fb8b9d9bcd0e5de94637_Category Icons.svg";
import cat2 from "../../../assets/images/Home1/66c6fb8b98a2dc7066c693d3_Category Icons-2.svg";
import cat3 from "../../../assets/images/Home1/66c6fb94416128e5b4e355b0_Category Icons-4.svg";
import cat4 from "../../../assets/images/Home1/66c6fb8b035ebd8829061041_Category Icons-5.svg";
import cat5 from "../../../assets/images/Home1/66c6fb8bf82fe9cef5f78d2f_Category Icons-6.svg";
import rate from "../../../assets/images/Home1/66c6fb8b857efb6c4c737b5d_Rating.svg";
import { CategoryData1 } from "../Categories/CategoryData";
import { useState } from "react";
// import { CourseData1 } from "./courseData";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import card3 from "../../../assets/images/Home1/66eb9e25c4d132b7abc4dcb2_Course Small Image-8-p-500.webp";
import card7 from "../../../assets/images/Home1/66fe6841120ac0d82bf8c08a_Digital Marketing.webp";
import card8 from "../../../assets/images/Home1/course.webp";
import card9 from "../../../assets/images/Home1/66eb9dfb3e87f8984b5a15b6_Course Small Image-p-800.webp";
import card10 from "../../../assets/images/Home1/66ff6a72dd07492f0cbb0a6d_Blog Small Thumbnail-10-p-500.webp";
import card11 from "../../../assets/images/Home1/6710bcf4976ba1d072d8b476_Course Image-4-2-p-800.webp";

function Course() {
  const [showBtn, setShowBtn] = useState(null);
  const [cards, setCard] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);

  const CourseData1 = [
    {
      id: 1,
      title: "MANAGEMENT",
      desc: "Crisis management and problem-solving strategies",
      btn1: "6 Lessons",
      btn2: "8k Enrolled",
      img: card7,
      badge: "Free",
      link: "/denied",
    },
    {
      id: 2,
      title: "DESIGN",
      desc: "Advanced photoshop techniques for designers",
      btn1: "8 Lessons",
      btn2: "25k Enrolled",
      img: card8,
      badge: "Free",
      link: "/denied",
    },
    {
      id: 3,
      title: "FINANCE",
      desc: "Operations management and process improvement",
      btn1: "12 Lessons",
      btn2: "23k Enrolled",
      img: card9,
      badge: "Free",
      link: "/denied",
    },
    {
      id: 4,
      title: "DEVELOPMENT",
      desc: "Database integration with MongoDB",
      btn1: "10 Lessons",
      btn2: "7k Enrolled",
      img: card10,
      badge: "59$",
      link: "/denied",
    },
    {
      id: 5,
      title: "DEVELOPMENT",
      desc: "Database integration with MongoDB",
      btn1: "10 Lessons",
      btn2: "7k Enrolled",
      img: card11,
      badge: "49$",
      link: "/course/finance",
    },
    {
      id: 6,
      title: "DEVELOPMENT",
      desc: "Database integration with MongoDB",
      btn1: "10 Lessons",
      btn2: "7k Enrolled",
      img: card3,
      badge: "72$",
      link: "/denied",
    },
  ];
  return (
    <>
      <div className="">
        <div className="flex flex-col lg:flex-row md:order-2 xl:order-1 bg-courseHero bg-cover px-5 bg-no-repeat items-center justify-between md:gap-10 lg:gap-0 bg-main-color-1 py-32 bg-[-300px] md:h-[430px] lg:h-[620px]">
          <div
            data-aos="fade-up"
            className="flex flex-col gap-5 justify-center items-center w-full text-white"
          >
            <p className="font-semibold text-sm">START WITH</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-center font-semibold w-[100%] md:w-[70%] lg:w-[60%] xl:w-[40%]">
              Professional online courses
            </h1>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="bg-white rounded-md absolute w-[85%] md:w-[97%] left-5 z-10 hidden md:block md:-bottom-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center items-center gap-5 xl:gap-0">
            <div className="flex flex-col justify-center items-center gap-3 py-7 rounded-md w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[100%] xl:w-[200px] cursor-pointer duration-300">
              <div className="bg-[#edf7f9] px-4 py-4 rounded-full">
                <img src={cat1} alt="" />
              </div>
              <h1 className="text-[18px] lg:text-[16px] xl:text-[17px] font-bold w-[100%] lg:w-[70%] text-center">
                Creative web design
              </h1>
              <p className="text-[#a6a5a5] font-semibold">8 Courses</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 py-7 rounded-md w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[100%] xl:w-[200px] cursor-pointer duration-300">
              <div className="bg-[#edf7f9] px-4 py-4 rounded-full">
                <img src={cat2} alt="" />
              </div>
              <h1 className="text-[18px] lg:text-[16px] xl:text-[17px] font-bold w-[100%] lg:w-[60%] text-center">
                Finance accounting
              </h1>
              <p className="text-[#a6a5a5] font-semibold">10 Courses</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 py-7 rounded-md w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[100%] xl:w-[200px] cursor-pointer duration-300">
              <div className="bg-[#edf7f9] px-4 py-4 rounded-full">
                <img src={cat1} alt="" />
              </div>
              <h1 className="text-[18px] lg:text-[16px] xl:text-[17px] font-bold w-[100%] lg:w-[60%] text-center">
                IT and software
              </h1>
              <p className="text-[#a6a5a5] font-semibold">5 Courses</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 py-7 rounded-md w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[100%] xl:w-[200px] cursor-pointer duration-300">
              <div className="bg-[#edf7f9] px-4 py-4 rounded-full">
                <img src={cat3} alt="" />
              </div>
              <h1 className="text-[18px] lg:text-[16px] xl:text-[17px] font-bold w-[100%] lg:w-[60%] text-center">
                Digital marketing
              </h1>
              <p className="text-[#a6a5a5] font-semibold">4 Courses</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 py-7 rounded-md w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[100%] xl:w-[200px] cursor-pointer duration-300">
              <div className="bg-[#edf7f9] px-4 py-4 rounded-full">
                <img src={cat4} alt="" />
              </div>
              <h1 className="text-[18px] lg:text-[16px] xl:text-[17px] font-bold w-[100%] lg:w-[60%] text-center">
                Web development
              </h1>
              <p className="text-[#a6a5a5] font-semibold">8 Courses</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 py-7 rounded-md w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[100%] xl:w-[200px] cursor-pointer duration-300">
              <div className="bg-[#edf7f9] px-4 py-4 rounded-full">
                <img src={cat5} alt="" />
              </div>
              <h1 className="text-[18px] lg:text-[16px] xl:text-[17px] font-bold w-[100%] lg:w-[60%] text-center">
                Content writing
              </h1>
              <p className="text-[#a6a5a5] font-semibold">3 Courses</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main-color-3 relative pb-72 pt-10 md:pt-[370px] lg:pt-52 w-full px-5 flex flex-col gap-12 justify-center items-center">
        <div className="flex  flex-col lg:flex-row w-full gap-6 lg:gap-0 lg:justify-between lg:items-end">
          <div data-aos="fade-up" className="flex flex-col gap-2">
            <p className="font-medium text-sm">ONLINE LEARNING</p>
            <h1 className="text-[42px] font-medium">Top online courses</h1>
          </div>
        </div>
        {cards ? (
          <div
            data-aos="fade-up"
            className="grid md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-5"
          >
            {CategoryData1.map((data) => (
              <div
                key={data.id}
                onMouseOver={() => setShowBtn(data.id)}
                onMouseLeave={() => setShowBtn(null)}
                className="relative group hover:shadow-boxShadow cursor-pointer duration-500 w-[90vw] md:w-[100%] lg:w-[100%] pb-5 bg-white flex flex-col gap-7"
              >
                <NavLink to={data.link}>
                  <div className="overflow-hidden">
                    <img
                      src={data.img}
                      className="w-full h-64 group-hover:scale-110 duration-1000"
                      alt=""
                    />
                  </div>
                </NavLink>
                <div className="absolute top-56 right-8 group-hover:scale-125 duration-1000 bg-[#254edb] text-white py-6 px-5 font-medium rounded-full">
                  {data.badge}
                </div>
                <div className="px-5 flex flex-col gap-5">
                  <p className="text-sm font-medium">{data.title}</p>
                  <h1 className="text-[20px] sm:text-[19px] font-medium w-[100%] md:w-[90%]">
                    {data.desc}
                  </h1>
                  <div className="flex gap-1">
                    <img src={rate} alt="" />
                    <span className="text-sm text-[#a19e9e]">4.88 (210)</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  {showBtn === data.id ? (
                    <button className="bg-main-color-2 w-[90%] md:w-[auto] md:px-24 lg:px-32 py-4 font-medium rounded-md hover:scale-95 duration-300">
                      Course Details
                    </button>
                  ) : (
                    <>
                      <div className="flex w-[90%] justify-center border-t gap-7 items-center px-5">
                        <p className="font-medium text-lg mt-3">{data.btn1}</p>
                        <span className="w-[0.1px] border h-14 bg-black"></span>
                        <p className="font-medium text-lg mt-3">{data.btn2}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            data-aos="fade-out"
            className="grid md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-5"
          >
            {CourseData1.map((data) => (
              <div
                key={data.id}
                onMouseOver={() => setShowBtn(data.id)}
                onMouseLeave={() => setShowBtn(null)}
                className="relative group hover:shadow-boxShadow cursor-pointer duration-500 w-[90vw] md:w-[100%] lg:w-[100%] pb-5 bg-white flex flex-col gap-7"
              >
                <NavLink to={data.link}>
                  <div className="overflow-hidden">
                    <img
                      src={data.img}
                      className="w-full h-72 group-hover:scale-110 duration-1000"
                      alt=""
                    />
                  </div>
                </NavLink>
                <div className="absolute top-60 right-8 group-hover:scale-125 duration-1000 bg-[#254edb] text-white py-6 px-5 font-medium rounded-full">
                  {data.badge}
                </div>
                <div className="px-5 flex flex-col gap-5">
                  <p className="text-sm font-medium">{data.title}</p>
                  <h1 className="text-[20px] sm:text-[20px] font-medium w-[100%] md:w-[90%]">
                    {data.desc}
                  </h1>
                  <div className="flex gap-1">
                    <img src={rate} alt="" />
                    <span className="text-sm text-[#a19e9e]">4.88 (210)</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  {showBtn === data.id ? (
                    <button className="bg-main-color-2 w-[90%] md:w-[auto] md:px-24 lg:px-32 py-4 font-medium rounded-md hover:scale-95 duration-300">
                      Course Details
                    </button>
                  ) : (
                    <>
                      <div className="flex w-[90%] justify-center border-t gap-7 items-center px-5">
                        <p className="font-medium text-lg mt-3">{data.btn1}</p>
                        <span className="w-[0.1px] border h-14 bg-black"></span>
                        <p className="font-medium text-lg mt-3">{data.btn2}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div
          data-aos="fade-up"
          className="flex gap-2 items-center justify-center"
        >
          <span
            onClick={() => setCard(true)}
            className={` ${
              cards
                ? "bg-main-color-2 py-[5px] px-[13px]"
                : "bg-white py-[3px] px-[10px]"
            } cursor-pointer rounded-full`}
          >
            1
          </span>
          <span
            onClick={() => setCard(false)}
            className={` ${
              cards
                ? "bg-white py-[3px] px-[10px]"
                : " bg-main-color-2 py-[5px] px-[13px]"
            } cursor-pointer rounded-full`}
          >
            2
          </span>
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
            <button className="bg-main-color-1 text-sm md:text-base text-white w-[50%] sm:w-[30%] md:w-[auto] md:px-12 lg:px-10 xl:px-12 py-3 mt-2 font-medium rounded-md hover:scale-95 duration-300">
              Browse Courses
            </button>
            <button className="bg-transparent text-sm md:text-base border border-main-color-1 text-black w-[50%] sm:w-[30%] md:w-[auto] md:px-12 lg:px-10 xl:px-12 py-3 mt-2 font-medium rounded-md hover:scale-95 duration-300">
              Became A Teacher
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
