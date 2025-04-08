import blog1 from "../../../assets/images/Home1/66ff71ac285b8bcb87417ef6_Blog Portrait Thumbnail-13.webp";
import blog2 from "../../../assets/images/Home1/66ff6e0a6f9b375fbca970fe_Blog Small Thumbnail-11.webp";
import blog3 from "../../../assets/images/Home1/66ff6a72dd07492f0cbb0a6d_Blog Small Thumbnail-10-p-500.webp";
import blog4 from "../../../assets/images/Home1/66e93b2410f6e96cbbc70c8d_Blog Small Thumbnail.webp";
import blog5 from "../../../assets/images/Home1/66e93b734e839a98823ff445_Blog Small Thumbnail-3.webp";
import blog6 from "../../../assets/images/Home1/66e93bf4c8aeb4955eb8be4c_Blog Small Thumbnail-2.webp";
import blog7 from "../../../assets/images/Home1/66e94653ee464e62573e6b7d_Blog Portrait Thumbnail-2.webp";
import blog8 from "../../../assets/images/Home1/66e94670c010ad7f6a1391a0_Blog Portrait Thumbnail-3.webp";
import blog9 from "../../../assets/images/Home1/66e93c6c4ffe823e68be9c67_Blog Small Thumbnail-6.webp";
import empl from "../../../assets/images/Home1/66d9685910e51570ad70d12e_Employ Images.webp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);
  return (
    <>
      {" "}
      <div className="flex relative flex-col lg:flex-row md:order-2 xl:order-1 bg-blog bg-cover px-5 bg-no-repeat items-center justify-between md:gap-10 lg:gap-0 py-32 md:h-[430px] lg:h-[650px]">
        <div className="flex flex-col gap-5 justify-center items-start px-5 w-full text-white absolute left-0 right-0 top-0 h-full bg-[#000000bd]">
          <p data-aos="fade-up" className="text-sm font-semibold">
            NEWS AND JOURNALS
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-start font-semibold w-[100%] md:w-[70%] lg:w-[60%] xl:w-[45%]"
          >
            Planning to transition to a new career?
          </h1>
        </div>
      </div>
      <div className="px-5 gap-3 mt-32 grid grid-cols-1 xl:grid-cols-3">
        <div className="flex flex-col justify-start items-start w-full gap-8">
          <NavLink to="/blog/blog1">
            <div
              data-aos="fade-up"
              className="flex flex-col justify-center items-start gap-8 pb-10 w-full shadow-2xl"
            >
              <div>
                <img
                  src={blog1}
                  className="xl:w-[430px] w-full object-cover"
                  alt=""
                />
              </div>
              <div className="px-8 flex gap-5">
                <p className="text-sm text-[gray]">4.10.2024</p>
                <p className="text-sm font-semibold">NINA NEFLER</p>
              </div>
              <div className="px-8">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Improve knowledge retention with visual learning
                </h1>
              </div>
              <div className="px-8">
                <p className="text-md md:text-lg font-semibold text-[gray] leading-8">
                  Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat
                  elementum sit ut. Cras mattis aliquam arcu mauris sagittis
                  fames eu diam vulputate.
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/blog/blog2">
            <div
              data-aos="fade-up"
              className="flex flex-col justify-center items-start gap-8 pb-10 shadow-2xl "
            >
              <div>
                <img src={blog2} className="w-[100vw]" alt="" />
              </div>
              <div className="px-8 flex gap-5">
                <p className="text-sm text-[gray]">4.10.2024</p>
                <p className="text-sm font-semibold">SAMANTHA DICKI</p>
              </div>
              <div className="px-8">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Master online learning with proven strategies
                </h1>
              </div>
              <div className="px-8">
                <p className="text-md md:text-lg font-semibold text-[gray] leading-8">
                  Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat
                  elementum sit ut. Cras mattis aliquam arcu mauris sagittis
                  fames eu diam vulputate.
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/blog/blog3">
            <div
              data-aos="fade-up"
              className="flex flex-col justify-center items-start gap-8 pb-10 shadow-2xl w-full"
            >
              <div>
                <img src={blog3} className="w-[100vw]" alt="" />
              </div>
              <div className="px-8 flex gap-5">
                <p className="text-sm text-[gray]">3.10.2024</p>
                <p className="text-sm font-semibold">EDWIN WATERS</p>
              </div>
              <div className="px-8">
                <h1 className="text-xl md:text-2xl font-semibold">
                  How to enhance your learning experience today
                </h1>
              </div>
              <div className="px-8">
                <p className="text-md md:text-lg font-semibold text-[gray] leading-8">
                  Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat
                  elementum sit ut. Cras mattis aliquam arcu mauris sagittis
                  fames eu diam vulputate.
                </p>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="flex flex-col justify-start items-start w-full gap-8">
          <NavLink to="/blog/blog4">
            <div
              data-aos="fade-up"
              className="flex flex-col justify-center items-start gap-8 pb-10 w-full shadow-2xl"
            >
              <div>
                <img src={blog4} className="w-[100vw]" alt="" />
              </div>
              <div className="px-8 flex gap-5">
                <p className="text-sm text-[gray]">17.9.2024</p>
                <p className="text-sm font-semibold">EDWARD BRAUN</p>
              </div>
              <div className="px-8">
                <h1 className="text-xl md:text-2xl font-semibold">
                  The evolution of teaching tools in the 21st century
                </h1>
              </div>
              <div className="px-8">
                <p className="text-md md:text-lg font-semibold text-[gray] leading-8">
                  Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat
                  elementum sit ut. Cras mattis aliquam arcu mauris sagittis
                  fames eu diam vulputate.
                </p>
              </div>
            </div>
          </NavLink>
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-start gap-4 pb-10 shadow-2xl"
          >
            <div>
              <img src={blog5} className="w-[100vw]" alt="" />
            </div>
            <div className="px-8 flex gap-5">
              <p className="text-sm text-[gray]">16.9.2024</p>
              <p className="text-sm font-semibold">HESSE JOHNSON</p>
            </div>
            <div className="px-8">
              <h1 className="text-xl md:text-2xl font-semibold">
                The role of parental involvement in academic achievement
              </h1>
            </div>
            <div className="px-8">
              <p className="text-md md:text-lg font-semibold text-[gray] leading-8">
                Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat
                elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames
                eu diam vulputate.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-start gap-8 pb-10 shadow-2xl"
          >
            <div>
              <img src={blog7} className="w-[100vw] object-cover" alt="" />
            </div>
            <div className="px-8 flex gap-5">
              <p className="text-sm text-[gray]">4.10.2024</p>
              <p className="text-sm font-semibold">NINA NEFLER</p>
            </div>
            <div className="px-8">
              <h1 className="text-xl md:text-2xl font-semibold">
                Improve knowledge retention with visual learning
              </h1>
            </div>
            <div className="px-8">
              <p className="text-md md:text-lg font-semibold text-[gray] leading-8">
                Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat
                elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames
                eu diam vulputate.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-8">
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-start gap-8 pb-10 shadow-2xl"
          >
            <div>
              <img src={blog6} className="w-[100vw]" alt="" />
            </div>
            <div className="px-8 flex gap-5">
              <p className="text-sm text-[gray]">17.9.2024</p>
              <p className="text-sm font-semibold">EDWARD BRAUN</p>
            </div>
            <div className="px-8">
              <h1 className="text-xl md:text-2xl font-semibold">
                The evolution of teaching tools in the 21st century
              </h1>
            </div>
            <div className="px-8">
              <p className="text-md md:text-lg font-semibold text-[gray] leading-8">
                Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat
                elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames
                eu diam vulputate.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-start gap-8 pb-10 shadow-2xl"
          >
            <div>
              <img src={blog8} className="w-[100vw] object-cover" alt="" />
            </div>
            <div className="px-8 flex gap-5">
              <p className="text-sm text-[gray]">4.10.2024</p>
              <p className="text-sm font-semibold">NINA NEFLER</p>
            </div>
            <div className="px-8">
              <h1 className="text-xl md:text-2xl font-semibold">
                Improve knowledge retention with visual learning
              </h1>
            </div>
            <div className="px-8">
              <p className="text-md md:text-lg font-semibold text-[gray] leading-8">
                Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat
                elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames
                eu diam vulputate.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-start gap-4 pb-10 shadow-2xl"
          >
            <div>
              <img src={blog9} className="w-[100vw]" alt="" />
            </div>
            <div className="px-8 flex gap-5">
              <p className="text-sm text-[gray]">16.9.2024</p>
              <p className="text-sm font-semibold">HESSE JOHNSON</p>
            </div>
            <div className="px-8">
              <h1 className="text-xl md:text-2xl font-semibold">
                The role of parental involvement in academic achievement
              </h1>
            </div>
            <div className="px-8">
              <p className="text-md md:text-lg font-semibold text-[gray] leading-8">
                Lorem ipsum dolor sit amet consectetur. Enim turpis feugiat
                elementum sit ut. Cras mattis aliquam arcu mauris sagittis fames
                eu diam vulputate.
              </p>
            </div>
          </div>
        </div>
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

export default Blog;
