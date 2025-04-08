import cat1 from "../../../assets/images/Home1/66c6fb8b9d9bcd0e5de94637_Category Icons.svg";
import cat2 from "../../../assets/images/Home1/66c6fb8b98a2dc7066c693d3_Category Icons-2.svg";
import cat3 from "../../../assets/images/Home1/66c6fb94416128e5b4e355b0_Category Icons-4.svg";
import cat4 from "../../../assets/images/Home1/66c6fb8b035ebd8829061041_Category Icons-5.svg";
import cat5 from "../../../assets/images/Home1/66c6fb8bf82fe9cef5f78d2f_Category Icons-6.svg";
import lap from "../../../assets/images/Home1/66c6fb8bf82fe9cef5f78d85_Woman Using Laptop.webp";
import rate from "../../../assets/images/Home1/66c6fb8b857efb6c4c737b5d_Rating.svg";
import women from "../../../assets/images/Home1/66c6fb8b45a3029806674bb6_Woman Image Holding Copy.webp";
import man from "../../../assets/images/Home1/66da9a051cb82fa9e66bb1cf_About Two Employe Image-p-500.webp";
import controls from "../../../assets/images/Home1/66c6fb8b23f88178b487b3e2_Controls.svg";
import achiev from "../../../assets/images/Home1/offer-3.avif";
import video from "../../../assets/video/elerna.mp4";
import { useState } from "react";
import {
  CategoryData1,
  CategoryData2,
  CategoryData3,
  CategoryData4,
  CategoryData5,
} from "./CategoryData";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

function Category() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);
  const [showBtn, setShowBtn] = useState(null);

  const [changeCards, setChangeCards] = useState("All courses");
  const handleCards = (e) => {
    setChangeCards(e);
    setActiveTab(e);
  };

  const items = [
    "All courses",
    "Design",
    "Development",
    "Management",
    "Finance",
  ];
  const [activeTab, setActiveTab] = useState("All courses");

  return (
    <div className="mt-20">
      {/* first section */}
      <div className="flex flex-col gap-12 justify-center items-center py-20">
        <div className="flex flex-col justify-center items-center gap-5">
          <p data-aos="fade-up" className="text-sm font-[500]">
            TOP CATEGORIES
          </p>
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-3xl font-semibold w-[95%] md:w-[500px] text-center"
          >
            Discover leading categories to elevate your journey
          </h1>
        </div>

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center items-center gap-3 xl:gap-8"
        >
          <NavLink to="category/design">
            <div className="flex flex-col justify-center items-center gap-3 py-7 border rounded-md w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[100%] xl:w-[165px] cursor-pointer duration-300 lg:hover:shadow-boxShadow">
              <div className="bg-[#edf7f9] px-4 py-4 rounded-full">
                <img src={cat1} alt="" />
              </div>
              <h1 className="text-[18px] lg:text-[16px] xl:text-[17px] font-bold w-[100%] lg:w-[70%] text-center">
                Creative web design
              </h1>
              <p className="text-[#a6a5a5] text-md font-semibold">8 Courses</p>
            </div>
          </NavLink>
          <NavLink to="category/finance">
            <div className="flex flex-col justify-center items-center gap-3 py-7 border rounded-md w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[100%] xl:w-[165px] cursor-pointer duration-300 lg:hover:shadow-boxShadow">
              <div className="bg-[#edf7f9] px-4 py-4 rounded-full">
                <img src={cat2} alt="" />
              </div>
              <h1 className="text-[18px] lg:text-[16px] xl:text-[17px] font-bold w-[100%] lg:w-[60%] text-center">
                Finance accounting
              </h1>
              <p className="text-[#a6a5a5] font-semibold">10 Courses</p>
            </div>
          </NavLink>
          <NavLink to="category/development">
            <div className="flex flex-col justify-center items-center gap-3 py-7 border rounded-md w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[100%] xl:w-[165px] cursor-pointer duration-300 lg:hover:shadow-boxShadow">
              <div className="bg-[#edf7f9] px-4 py-4 rounded-full">
                <img src={cat1} alt="" />
              </div>
              <h1 className="text-[18px] lg:text-[16px] xl:text-[17px] font-bold w-[100%] lg:w-[60%] text-center">
                IT and software
              </h1>
              <p className="text-[#a6a5a5] font-semibold">5 Courses</p>
            </div>
          </NavLink>
          <NavLink to="category/finance">
            <div className="flex flex-col justify-center items-center gap-3 py-7 border rounded-md w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[100%] xl:w-[165px] cursor-pointer duration-300 lg:hover:shadow-boxShadow">
              <div className="bg-[#edf7f9] px-4 py-4 rounded-full">
                <img src={cat3} alt="" />
              </div>
              <h1 className="text-[18px] lg:text-[16px] xl:text-[17px] font-bold w-[100%] lg:w-[60%] text-center">
                Digital marketing
              </h1>
              <p className="text-[#a6a5a5] font-semibold">4 Courses</p>
            </div>
          </NavLink>
          <NavLink to="category/development">
            <div className="flex flex-col justify-center items-center gap-3 py-7 border rounded-md w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[100%] xl:w-[165px] cursor-pointer duration-300 lg:hover:shadow-boxShadow">
              <div className="bg-[#edf7f9] px-4 py-4 rounded-full">
                <img src={cat4} alt="" />
              </div>
              <h1 className="text-[18px] lg:text-[16px] xl:text-[17px] font-bold w-[100%] lg:w-[60%] text-center">
                Web development
              </h1>
              <p className="text-[#a6a5a5] font-semibold">8 Courses</p>
            </div>
          </NavLink>
          <NavLink to="category/design">
            <div className="flex flex-col justify-center items-center gap-3 py-7 border rounded-md w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[100%] xl:w-[165px] cursor-pointer duration-300 lg:hover:shadow-boxShadow">
              <div className="bg-[#edf7f9] px-4 py-4 rounded-full">
                <img src={cat5} alt="" />
              </div>
              <h1 className="text-[18px] lg:text-[16px] xl:text-[17px] font-bold w-[100%] lg:w-[60%] text-center">
                Content writing
              </h1>
              <p className="text-[#a6a5a5] font-semibold">3 Courses</p>
            </div>
          </NavLink>
        </div>

        <div className="relative w-full px-5 flex-col md:flex-row flex items-center justify-start gap-8">
          <div
            data-aos="fade-up"
            className="bg-main-color-3 relative flex flex-col h-[500px] w-full lg:w-[80%] xl:w-[660px] px-7 py-5 lg:px-0 lg:py-0 lg:h-72 rounded-md overflow-hidden items-center lg:items-start justify-center gap-10 lg:gap-0"
          >
            <img
              src={lap}
              className="order-2 lg:order-1 rounded-md h-72 lg:h-[500px] object-cover mt-8 w-full"
              alt=""
            />

            <div className="order-1 flex flex-col justify-center items-center lg:block lg:justify-start lg:items-start lg:order-2">
              {" "}
              <h1 className="relative lg:absolute mb-10 lg:mb-0 top-0 lg:top-24 px-5 text-xl lg:text-2xl font-medium text-center lg:text-start w-[100%] md:w-[90%] lg:w-[70%] xl:w-[50%]">
                Quick access to the popular courses
              </h1>
              <button className="absolute bottom-[350px] lg:bottom-14 xl:bottom-16 bg-main-color-2 text-black px-3 ml-5 py-3 md:py-3 md:px-10 lg:hover:scale-90 duration-500 rounded-md text:md md:text-md">
                View Courses
              </button>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-[100%] lg:w-[80%] xl:w-[660px] px-5 flex flex-col lg:flex-row h-[500px] py-10 gap-8 lg:gap-0 lg:h-72 rounded-md items-center bg-[#f1f1e9]"
          >
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <h1 className="text-xl lg:text-2xl font-medium text-center lg:text-start w-[100%] md:w-[90%] lg:w-[70%] xl:w-[70%]">
                Develop your skills online!
              </h1>
              <button className="mt-3 bg-black text-white px-3 py-3 md:py-3 md:px-10 lg:hover:scale-90 duration-500 rounded-md text:md md:text-md">
                Apply Now
              </button>
            </div>
            <div className="relative">
              <video
                autoPlay
                muted
                src={video}
                className="relative w-full md:w-80 h-72 lg:h-60 rounded-xl object-cover"
              ></video>
              <img
                src={controls}
                className="absolute bottom-5 left-20 sm:left-52 md:left-32 lg:left-20"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="bg-main-color-3 py-20 w-full px-5 flex flex-col gap-12 justify-center items-center">
        <div className="flex  flex-col lg:flex-row w-full gap-6 lg:gap-0 lg:justify-between lg:items-end">
          <div className="flex flex-col gap-2">
            <p className="font-medium text-sm">ONLINE LEARNING</p>
            <h1 className="text-[35px] font-medium">Top online courses</h1>
          </div>
          <div>
            <ul className="flex flex-wrap gap-5">
              {items.map((tabs) => (
                <li
                  key={tabs}
                  className={`cursor-pointer ${
                    activeTab === tabs
                      ? "text-black font-semibold"
                      : "text-[gray]"
                  } text-sm`}
                  onClick={() => handleCards(tabs)}
                >
                  {tabs}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-5">
          {changeCards === "All courses" &&
            CategoryData1.map((data) => (
              <div
                key={data.id}
                onMouseOver={() => setShowBtn(data.id)}
                onMouseLeave={() => setShowBtn(null)}
                className="relative group h-auto hover:shadow-boxShadow cursor-pointer duration-500 w-[90vw] md:w-[100%] lg:w-[100%] pb-5 bg-white flex flex-col gap-7"
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
                <div className="absolute top-56 right-8 group-hover:scale-125 duration-1000 bg-[#254edb] text-white py-5 px-4 font-medium rounded-full">
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
                    <button className="bg-main-color-2 mb-3 w-[90%] md:w-[auto] md:px-24 lg:px-32 py-3 text-sm font-medium rounded-sm hover:scale-95 duration-300">
                      Course Details
                    </button>
                  ) : (
                    <>
                      <div className="flex w-[90%] justify-center border-t gap-7 items-center px-5">
                        <p className="font-medium text-md mt-3">{data.btn1}</p>
                        <span className="w-[0.1px] border h-14 bg-black"></span>
                        <p className="font-medium text-md mt-3">{data.btn2}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          {changeCards === "Design" &&
            CategoryData2.map((data) => (
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
                <div className="absolute top-56 right-8 group-hover:scale-125 duration-1000 bg-[#254edb] text-white py-[17.5px] px-4 font-medium rounded-full">
                  {data.badge}
                </div>
                <div className="px-5 flex flex-col gap-5">
                  <p className="text-sm font-medium">{data.title}</p>
                  <h1 className="text-[20px] sm:text-[20px] md:text-[20px] font-medium w-[100%] md:w-[90%]">
                    {data.desc}
                  </h1>
                  <div className="flex gap-1">
                    <img src={rate} alt="" />
                    <span className="text-sm text-[#a19e9e]">4.88 (210)</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  {showBtn === data.id ? (
                    <div className="flex w-[90%] justify-center border-t gap-7 items-center px-5">
                      <button className="bg-main-color-2 w-[90%] md:w-[auto] md:px-4 py-3 mt-2 font-medium rounded-sm hover:scale-95 duration-300">
                        Course Details
                      </button>
                      <button className="bg-black text-white w-[90%] md:w-[auto] md:px-4 py-3 mt-2 font-medium rounded-sm hover:scale-95 duration-300">
                        Course Details
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className=" flex w-[90%] justify-center border-t gap-7 items-center px-5">
                        <p className="font-medium text-lg mt-3">{data.btn1}</p>
                        <span className=" w-[0.1px] border h-14 bg-black"></span>
                        <p className="font-medium text-lg mt-3">{data.btn2}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          {changeCards === "Development" &&
            CategoryData3.map((data) => (
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
                <div className="absolute top-56 right-8 group-hover:scale-125 duration-1000 bg-[#254edb] text-white py-[17.5px] px-4 font-medium rounded-full">
                  {data.badge}
                </div>
                <div className="px-5 flex flex-col gap-5">
                  <p className="text-sm font-medium">{data.title}</p>
                  <h1 className="text-[20px] sm:text-[20px] md:text-[20px] font-medium w-[100%] md:w-[90%]">
                    {data.desc}
                  </h1>
                  <div className="flex gap-1">
                    <img src={rate} alt="" />
                    <span className="text-sm text-[#a19e9e]">4.88 (210)</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  {showBtn === data.id ? (
                    <div className="flex w-[90%] justify-center border-t gap-7 items-center px-5">
                      <button className="bg-main-color-2 w-[90%] md:w-[auto] md:px-4 py-3 mt-2 font-medium rounded-sm hover:scale-95 duration-300">
                        Course Details
                      </button>
                      <button className="bg-black text-white w-[90%] md:w-[auto] md:px-4 py-3 mt-2 font-medium rounded-sm hover:scale-95 duration-300">
                        Course Details
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className=" flex w-[90%] justify-center border-t gap-7 items-center px-5">
                        <p className="font-medium text-lg mt-3">{data.btn1}</p>
                        <span className=" w-[0.1px] border h-14 bg-black"></span>
                        <p className="font-medium text-lg mt-3">{data.btn2}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          {changeCards === "Management" &&
            CategoryData4.map((data) => (
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
                <div className="absolute top-56 right-8 group-hover:scale-125 duration-1000 bg-[#254edb] text-white py-[17.5px] px-4 font-medium rounded-full">
                  {data.badge}
                </div>
                <div className="px-5 flex flex-col gap-5">
                  <p className="text-sm font-medium">{data.title}</p>
                  <h1 className="text-[20px] sm:text-[20px] md:text-[20px] font-medium w-[100%] md:w-[90%]">
                    {data.desc}
                  </h1>
                  <div className="flex gap-1">
                    <img src={rate} alt="" />
                    <span className="text-sm text-[#a19e9e]">4.88 (210)</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  {showBtn === data.id ? (
                    <div className="flex w-[90%] justify-center border-t gap-7 items-center px-5">
                      <button className="bg-main-color-2 w-[90%] md:w-[auto] md:px-4 py-3 mt-2 font-medium rounded-sm hover:scale-95 duration-300">
                        Course Details
                      </button>
                      <button className="bg-black text-white w-[90%] md:w-[auto] md:px-4 py-3 mt-2 font-medium rounded-sm hover:scale-95 duration-300">
                        Course Details
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className=" flex w-[90%] justify-center border-t gap-7 items-center px-5">
                        <p className="font-medium text-lg mt-3">{data.btn1}</p>
                        <span className=" w-[0.1px] border h-14 bg-black"></span>
                        <p className="font-medium text-lg mt-3">{data.btn2}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          {changeCards === "Finance" &&
            CategoryData5.map((data) => (
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
                <div className="absolute top-56 right-8 group-hover:scale-125 duration-1000 bg-[#254edb] text-white py-[17.5px] px-4 font-medium rounded-full">
                  {data.badge}
                </div>
                <div className="px-5 flex flex-col gap-5">
                  <p className="text-sm font-medium">{data.title}</p>
                  <h1 className="text-[20px] sm:text-[20px] md:text-[20px] font-medium w-[100%] md:w-[90%]">
                    {data.desc}
                  </h1>
                  <div className="flex gap-1">
                    <img src={rate} alt="" />
                    <span className="text-sm text-[#a19e9e]">4.88 (210)</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  {showBtn === data.id ? (
                    <div className="flex w-[90%] justify-center border-t gap-7 items-center px-5">
                      <button className="bg-main-color-2 w-[90%] md:w-[auto] md:px-4 py-3 mt-2 font-medium rounded-sm hover:scale-95 duration-300">
                        Course Details
                      </button>
                      <button className="bg-black text-white w-[90%] md:w-[auto] md:px-4 py-3 mt-2 font-medium rounded-sm hover:scale-95 duration-300">
                        Course Details
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className=" flex w-[90%] justify-center border-t gap-7 items-center px-5">
                        <p className="font-medium text-lg mt-3">{data.btn1}</p>
                        <span className=" w-[0.1px] border h-14 bg-black"></span>
                        <p className="font-medium text-lg mt-3">{data.btn2}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
        </div>
        <div
          data-aos="fade-up"
          className="bg-main-color-1 text-white py-5 rounded-md sm:rounded-full px-3 w-[95%] md:w-[750px] text-center font-semibold"
        >
          We assist you in finding the ideal tutor at no cost.{" "}
          <a href="#" className="underline">
            Browse all available courses
          </a>
        </div>
      </div>

      {/* third section */}
      <div className="mt-20 relative flex flex-col gap-72 lg:flex-row justify-between items-center">
        <div className="relative pr-5 lg:pr-0 flex w-[100%] lg:w-[500px]">
          <img
            data-aos="fade-right"
            src={achiev}
            className="absolute z-10 top-12 left-10 lg:left-5 xl:left-20 w-[49%] lg:w-64 xl:w-72 h-24"
            alt="Girl"
          />
          <img
            data-aos="fade-up"
            src={man}
            className="relative top-52 left-10 lg:left-5 xl:left-8 z-10 lg:w-64 w-[50%] xl:w-80 h-[250px] sm:h-[340px] md:h-[450px] lg:h-[350px] xl:h-[420px] rounded-lg shadow-2xl"
            alt=""
          />
          <img
            data-aos="fade-down"
            src={women}
            className=" right-0 w-[50%] lg:w-64 xl:w-80 lg:h-[350px] h-[250px] sm:h-[340px] md:h-[450px] xl:h-[420px] rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="px-8 lg:px-0 lg:w-[1045px] xl:w-[620px] h-80 flex flex-col gap-3 md:gap-5">
          <div data-aos="fade-up">
            <p className="sm:text-sm md:text-md font-medium">WHAT WE OFFER</p>
          </div>
          <div className="flex flex-col gap-3 md:gap-5">
            <div>
              <h1
                data-aos="fade-up"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold leading-normal md:leading-[53px]"
              >
                Personalized learning for your ambitions
              </h1>
            </div>
            <div data-aos="fade-up" className="w-[100%] lg:w-[90%]">
              <p className="text-[gray] font-medium text-sm sm:text-md md:text-md">
                Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
                mauris mus. Vitae diam dolor lacus amet integer ut.
              </p>
            </div>
            <div className="px-5">
              <ul
                data-aos="fade-up"
                className="grid grid-cols-1 sm:grid-cols-2 justify-between list-disc sm:text-md md:text-md font-medium gap-1"
              >
                <li>Skill-based instruction</li>
                <li>Analytics and insights</li>
                <li>Global certification</li>
                <li>Customizable courses</li>
              </ul>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="bg-main-color-3 flex flex-col sm:flex-row justify-start items-start sm:items-center sm:justify-between lg:justify-center gap-5 px-5 py-10 rounded-md w-[100%] sm:w-[97%] mt-3 sm:mt-10"
          >
            <div className="w-[100%] sm:w-[70%] lg:w-[60%] flex flex-col gap-4">
              <h1 className="text-xl font-semibold">Still have questions?</h1>
              <p className="text-[gray] font-medium">
                Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
              </p>
            </div>
            <div>
              <button className="bg-main-color-1 text-white py-3 md:py-2 px-8 sm:px-5 md:px-10 lg:px-6 xl:px-10 lg:hover:scale-90 duration-500 rounded-md text:md md:text-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
