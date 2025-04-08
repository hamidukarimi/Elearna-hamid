import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import testi from "../../../assets/images/Home1/66cd64ef67641295ddd2ffc9_Testimonial Author Image-2-p-500 (1).avif";
import testi1 from "../../../assets/images/Home1/66cd560b74d8d4d4ed334d02_Testimonial Author Image-p-500.avif";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Testimonial() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);
  const [tabs, setTabs] = useState("first");
  const changeTab = (e) => {
    setTabs(e);
  };
  return (
    <div className="mt-64 bg-cover bg-no-repeat sm:mt-60 bg-hero bg-main-color-1 px-5 py-20">
      <div className="flex justify-start gap-5 lg:gap-0 xl:gap-5 items-start lg:justify-center lg:items-end flex-col lg:flex-row text-white">
        <div className="flex flex-col justify-start items-start gap-5">
          <p data-aos="fade-up" className="text-sm md:text-md font-[500]">
            OUR TESTIMONIALS
          </p>
          <div className="w-[100%] md:w-[100%] lg:w-[500px]">
            <h1
              data-aos="fade-up"
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-start"
            >
              Trusted by our successful students
            </h1>
          </div>
        </div>
        <div className="flex justify-between gap-5 lg:gap-5 xl:gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
            <h1
              data-aos="fade-up"
              className="text-3xl md:text-4xl lg:text-5xl font-semibold"
            >
              70M
            </h1>
            <span className="hidden md:block border-[1px] h-10"></span>
            <h1
              data-aos="fade-up"
              className="text-xs md:text-sm lg:text-lg text-blue-600 md:w-[80%] lg:w-[50%] font-semibold"
            >
              SUCCESSFUL STUDENTS
            </h1>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5"
          >
            <h1
              data-aos="fade-up"
              className="text-3xl md:text-4xl lg:text-5xl font-semibold"
            >
              25K
            </h1>
            <span
              data-aos="fade-up"
              className="hidden md:block border-[1px] h-10"
            ></span>
            <h1
              data-aos="fade-up"
              className="text-xs md:text-sm lg:text-lg text-blue-600 md:w-[80%] lg:w-[50%] font-semibold"
            >
              GLOBAL JOB PLACEMENTS
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10 mt-14">
        <div data-aos="fade-up">
          {tabs == "first" && (
            <img
              src={testi}
              className="w-[100%] md:w-[600px] h-80 sm:h-96"
              alt=""
            />
          )}

          {tabs === "second" && (
            <img
              src={testi1}
              className="w-[100%] md:w-[600px] h-80 sm:h-96"
              alt=""
            />
          )}
        </div>
        <div className="w[100%] md:w-[750px] flex flex-col justify-center items-start gap-5 md:gap-10">
          <div>
            {tabs == "first" && (
              <h1 className="text-[gray] text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl leading-[30px] md:leading-[40px] font-semibold">
                “Lorem ipsum dolor sit amet consectetur. Molestie faucibus nibh
                felis tempor vel aliquet cursus placerat duis. Est felis
                pulvinar tortor ut nibh montes ante gravida velit. Facilisi
                posuere in sed mattis blandit duis aliquet.”
              </h1>
            )}
            {tabs == "second" && (
              <h1 className="text-[gray] text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl leading-[30px] md:leading-[40px] font-semibold">
                “Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus
                tempus facilisis scelerisque vitae consectetur vitae. Amet
                faucibus venenatis donec mattis. Morbi placerat eleifend
                malesuada sed semper quis.”
              </h1>
            )}
          </div>
          <div>
            {tabs == "first" && (
              <h1 className="text-white text-xl md:text-xl font-semibold">
                Jim Adams
              </h1>
            )}
            {tabs == "second" && (
              <h1 className="text-white text-xl md:text-xl font-semibold">
                Linda Grady
              </h1>
            )}
            {tabs == "first" && (
              <p className="text-blue-600 my-2 text-sm md:text-base">
                DESIGNER
              </p>
            )}
            {tabs == "second" && (
              <p className="text-blue-600 my-2 text-sm md:text-base">
                CO-ASSISTANT MANAGER
              </p>
            )}
          </div>
          <div className="flex gap-4">
            <span
              onClick={() => changeTab("first")}
              className="text-[gray] hover:text-white border border-[gray] hiver:border-[white] cursor-pointer duration-300 py-3 px-3 rounded-full"
            >
              <FaArrowLeft />
            </span>
            <span
              onClick={() => changeTab("second")}
              className="text-[gray] hover:text-white border border-[gray] hiver:border-[white] cursor-pointer duration-300 py-3 px-3 rounded-full"
            >
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
