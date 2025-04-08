import girl from "../../../assets/images/Home1/66c6fb8ca55c188e59cf91d8_Banner Girl.webp";
import achiev from "../../../assets/images/Home1/66c6fb8b79cb093fa869be54_Achievements.webp";
import img from "../../../assets/images/Home1/trusted.avif";
import moon from "../../../assets/images/Home1/66c6fb8bdcbb90074c85249f_Half Moon.svg";
import circle from "../../../assets/images/Home1/66c6fb8bfbf579e1a5ff1577_Blue Circle.svg";
import dot from "../../../assets/images/Home1/66c6fb8b857efb6c4c737b8a_Yellow Dot.svg";
import logo1 from "../../../assets/images/Home1/66c6fb8bca715a603abbc84f_Clients Logo.svg";
import logo2 from "../../../assets/images/Home1/66c6fb8bb6896643f3baa632_Clients Logo-2.svg";
import logo3 from "../../../assets/images/Home1/66c6fb8bf82fe9cef5f78d2a_Clients Logo-3.svg";
import logo4 from "../../../assets/images/Home1/66c6fb8b87b34b4188395ff2_Clients Logo-4.svg";
import logo5 from "../../../assets/images/Home1/66c6fb8bf99901dda5c25e7e_Clients Logo-5.svg";
import logo6 from "../../../assets/images/Home1/66c6fb8beb3991b3db5cd5ff_Clients Logo-6.svg";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);
  return (
    <>
      <div className="flex flex-col lg:flex-row md:order-2 xl:order-1 bg-hero bg-cover px-5 bg-no-repeat items-center justify-between md:gap-10 lg:gap-0 bg-main-color-1 py-32 bg-[-300px]">
        {/* girl */}
        <div
          data-aos="fade-up"
          className="w-[100%] lg:w-[45%] xl:w-[53%] order-2 lg:order-1 relative"
        >
          <img data-aos="fade-up" src={girl} alt="Girl" className="w-[100%]" />
          <img
            data-aos="fade-right"
            src={achiev}
            className="absolute z-10 bottom-32 sm:bottom-64 lg:bottom-36 xl:bottom-48 w-[40%] lg:w-52 xl:w-60"
            alt="Girl"
          />
          <img
            src={moon}
            className="absolute bottom-32 sm:bottom-[300px] lg:bottom-[180px] xl:bottom-[240px] left-10 w-[30%] lg:w-40 xl:w-56"
            alt="Girl"
          />
          <img
            data-aos="fade-up"
            src={circle}
            className="absolute top-[80px] sm:top-[170px] lg:top-[100px] xl:top-[170px] lg:left-5 xl:left-10 w-[10%] sm:w-12"
            alt="Girl"
          />
          <img
            src={dot}
            className="absolute top-[150px] sm:top-[300px] lg:top-[200px] xl:top-[300px] left-10 xl:left-20 w-3"
            alt="Girl"
          />
          <img
            src={dot}
            className="absolute bottom-40 sm:bottom-72 lg:bottom-44 xl:bottom-72 -right-2 w-5"
            alt="Girl"
          />
          <img
            data-aos="fade-left"
            src={img}
            className="absolute bottom-3 right-6 lg:right-6 w-[40%] md:w-80 lg:w-52 xl:w-60"
            alt="Girl"
          />
        </div>
        {/* texts */}
        <div
          data-aos="fade-up"
          className="w-[100%] mt-10 lg:mt-0 lg:w-[43%] flex flex-col order-1 lg:order-2 gap-3 md:gap-5 items-center lg:justify-start lg:items-start mb-4"
        >
          <p className="text-white font-semibold text-sm">ONLINE LEARNING</p>
          <h1 className="text-white text-center lg:text-start text-3xl md:text-[46px] lg:text-5xl font-semibold lg:font-bold md:leading-[65px]">
            More then <span className="text-main-color-2">25000+</span>{" "}
            education courses online
          </h1>
          <p className="text-[#a6a5a5] lg:text-white text-center lg:text-start font-semibold text-md md:text-md">
            Lorem ipsum dolor sit amet consectetur. Gravida enim risus
            sollicitudin mauris tincidunt commodo ornare.
          </p>
          <button
            data-aos="fade-up"
            className="bg-main-color-1 text-white px-3 py-3 md:py-2 md:px-10 border-[1px] lg:hover:scale-90 duration-500 rounded-md text:md md:text-lg"
          >
            Get Started
          </button>
        </div>
      </div>
      {/* <div className="w-[100%] px-10 pt-20 pb-10 bg-main-color-3">
        <h1 className="text-center mb-12 font-semibold">
          Learn from 350+ leading universities and companies with us
        </h1>
        <Slider {...settings} className="flex">
          <div className="">
            <img src={logo1} className="" alt="" />
          </div>
          <div>
            <img src={logo2} className="" alt="" />
          </div>
          <div>
            <img src={logo3} className="" alt="" />
          </div>
          <div>
            <img src={logo4} className="" alt="" />
          </div>
          <div>
            <img src={logo5} className="" alt="" />
          </div>
          <div>
            <img src={logo6} className="" alt="" />
          </div>
        </Slider>
      </div> */}
      <div
        data-aos="fade-up"
        className="w-[100%] px-10 pt-20 pb-10 bg-main-color-3"
      >
        <h1 data-aos="fade-up" className="text-center mb-12 font-semibold">
          Learn from 350+ leading universities and companies with us
        </h1>
        <Marquee
          data-aos="fade-up"
          speed={70}
          gradient={true}
          pauseOnHover={false}
          gradientWidth={0}
        >
          <div className="">
            <img src={logo1} className="ml-40 w-24" alt="" />
          </div>
          <div>
            <img src={logo2} className="ml-40 w-24" alt="" />
          </div>
          <div>
            <img src={logo3} className="ml-40 w-24" alt="" />
          </div>
          <div>
            <img src={logo4} className="ml-40 w-24" alt="" />
          </div>
          <div>
            <img src={logo5} className="ml-40 w-24" alt="" />
          </div>
          <div>
            <img src={logo6} className="ml-40 w-24" alt="" />
          </div>
        </Marquee>
      </div>

      {/* <div className="w-[98%] py-12">
        <Slider {...settings}>
          <div className="px-4">
            <div className="bg-gray-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold">Slide 1</h3>
              <p className="text-gray-700 mt-2">
                This is the first slide content.
              </p>
            </div>
          </div>
          <div className="px-4">
            <div className="bg-gray-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold">Slide 2</h3>
              <p className="text-gray-700 mt-2">
                This is the second slide content.
              </p>
            </div>
          </div>
          <div className="px-4">
            <div className="bg-gray-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold">Slide 3</h3>
              <p className="text-gray-700 mt-2">
                This is the third slide content.
              </p>
            </div>
          </div>
          <div className="px-4">
            <div className="bg-gray-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold">Slide 4</h3>
              <p className="text-gray-700 mt-2">
                This is the fourth slide content.
              </p>
            </div>
          </div>
        </Slider>
      </div> */}
    </>
  );
}

export default Hero;
