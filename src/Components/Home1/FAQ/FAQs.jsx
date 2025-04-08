import empl from "../../../assets/images/Home1/66d9685910e51570ad70d12e_Employ Images.webp";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FAQDate, FAQDate1 } from "./FAQDate";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FAQs() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);
  const [box1, setBox1] = useState(null);
  const [box2, setBox2] = useState(null);
  const [box3, setBox3] = useState(null);
  const [box4, setBox4] = useState(null);
  const [box5, setBox5] = useState(null);
  const [changeQ, setChangeQ] = useState("Enrollment and registration");
  const questions = [
    "Enrollment and registration",
    "Technical requirements",
    "Assessments and grading",
    "Communication and support",
    "Certificates and degrees",
  ];

  return (
    <>
      <div className="flex relative flex-col lg:flex-row md:order-2 xl:order-1 bg-faqHero bg-cover px-5 bg-no-repeat items-center justify-between md:gap-10 lg:gap-0 py-32 bg-[-300px] md:h-[430px] lg:h-[650px]">
        <div className="flex flex-col gap-5 justify-center items-center w-full text-white absolute left-0 right-0 top-0 h-full bg-[#000000b5]">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold w-[100%] md:w-[70%] lg:w-[100%]"
          >
            Frequently asked questions
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-md font-semibold text-center"
          >
            Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit
            nam id
          </p>
        </div>
      </div>

      <div className="py-20 px-5 gap-10 lg:gap-20 flex flex-col lg:flex-row justify-center items-start w-full">
        {/* questions */}
        <div data-aos="fade-up" className="w-[100%] lg:w-[35%]">
          <ul className="flex flex-col gap-1 bg-main-color-3">
            {questions.map((data) => (
              <div
                key={data}
                onClick={() => setChangeQ(data)}
                className={`flex items-center justify-between cursor-pointer
                ${
                  changeQ === data
                    ? "bg-main-color-1 text-white"
                    : "text-[gray]"
                }
                 px-5 py-4 text-md font-semibold`}
              >
                <li data-aos="fade-up">{data}</li>
                <span>
                  <FaArrowRight />{" "}
                </span>
              </div>
            ))}
          </ul>
        </div>

        {/* answers */}
        <div
          data-aos="fade-up"
          className="w-[100%] lg:w-[60%] flex flex-col justify-center items-center gap-3"
        >
          {changeQ === "Enrollment and registration" ? (
            <>
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
                    <h1 className="text-[15px] sm:text-[16px] md:text-[17px] font-medium">
                      {data.title}
                    </h1>
                    <div>
                      {box1 === data.id ? (
                        <span className="text-2xl sm:text-3xl font-bold">
                          -
                        </span>
                      ) : (
                        <span className="text-2xl sm:text-3xl font-bold">
                          +
                        </span>
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
            </>
          ) : null}
          {changeQ === "Technical requirements" ? (
            <>
              {FAQDate1.map((data) => (
                <div
                  key={data.id}
                  className={`
          ${box2 === data.id ? "h-36" : "h-12"}
          border-b overflow-hidden duration-300 w-[100%]`}
                >
                  <div
                    onClick={() => setBox2(box2 === data.id ? null : data.id)}
                    className="flex items-center gap-4 justify-between cursor-pointer"
                  >
                    <h1 className="text-[15px] sm:text-[16px] md:text-[17px] font-medium">
                      {data.title}
                    </h1>
                    <div>
                      {box2 === data.id ? (
                        <span className="text-2xl sm:text-3xl font-bold">
                          -
                        </span>
                      ) : (
                        <span className="text-2xl sm:text-3xl font-bold">
                          +
                        </span>
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
            </>
          ) : null}
          {changeQ === "Assessments and grading" ? (
            <>
              {FAQDate.map((data) => (
                <div
                  key={data.id}
                  className={`
            ${box3 === data.id ? "h-36" : "h-12"}
            border-b overflow-hidden duration-300 w-[100%]`}
                >
                  <div
                    onClick={() => setBox3(box3 === data.id ? null : data.id)}
                    className="flex items-center gap-4 justify-between cursor-pointer"
                  >
                    <h1 className="text-[15px] sm:text-[16px] md:text-[17px] font-medium">
                      {data.title}
                    </h1>
                    <div>
                      {box3 === data.id ? (
                        <span className="text-2xl sm:text-3xl font-bold">
                          -
                        </span>
                      ) : (
                        <span className="text-2xl sm:text-3xl font-bold">
                          +
                        </span>
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
            </>
          ) : null}
          {changeQ === "Communication and support" ? (
            <>
              {FAQDate1.map((data) => (
                <div
                  key={data.id}
                  className={`
          ${box4 === data.id ? "h-36" : "h-12"}
          border-b overflow-hidden duration-300 w-[100%]`}
                >
                  <div
                    onClick={() => setBox4(box4 === data.id ? null : data.id)}
                    className="flex items-center gap-4 justify-between cursor-pointer"
                  >
                    <h1 className="text-[15px] sm:text-[16px] md:text-[17px] font-medium">
                      {data.title}
                    </h1>
                    <div>
                      {box4 === data.id ? (
                        <span className="text-2xl sm:text-3xl font-bold">
                          -
                        </span>
                      ) : (
                        <span className="text-2xl sm:text-3xl font-bold">
                          +
                        </span>
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
            </>
          ) : null}
          {changeQ === "Certificates and degrees" ? (
            <>
              {FAQDate.map((data) => (
                <div
                  key={data.id}
                  className={`
            ${box5 === data.id ? "h-36" : "h-12"}
            border-b overflow-hidden duration-300 w-[100%]`}
                >
                  <div
                    onClick={() => setBox5(box5 === data.id ? null : data.id)}
                    className="flex items-center gap-4 justify-between cursor-pointer"
                  >
                    <h1 className="text-[15px] sm:text-[16px] md:text-[17px] font-medium">
                      {data.title}
                    </h1>
                    <div>
                      {box5 === data.id ? (
                        <span className="text-2xl sm:text-3xl font-bold">
                          -
                        </span>
                      ) : (
                        <span className="text-2xl sm:text-3xl font-bold">
                          +
                        </span>
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
            </>
          ) : null}
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

export default FAQs;
