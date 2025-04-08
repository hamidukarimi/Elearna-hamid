import empl from "../../../assets/images/Home1/66d9685910e51570ad70d12e_Employ Images.webp";
import popup from "../../../assets/images/Home1/66f640175a11d2c4db6078d6_Trusted By Image In White.avif";
import circle from "../../../assets/images/Home1/66d9685900d6e3c06862ddb9_Circle Icons White.svg";
import pen from "../../../assets/images/Home1/66d96859c968783a7b05acb2_Pen Icons White.svg";
import update from "../../../assets/images/Home1/66d96859eeb82869ca4d5d1e_Update White Icons.svg";
import girl from "../../../assets/images/Home1/66d96859eb61b636c95fdb98_Girl Image Using Laptop.webp";
import outline from "../../../assets/images/Home1/66cff274f001523c81c44d05_Outline Circle.svg";
import video from "../../../assets/video/elerna.mp4";
import { AboutData } from "./AboutData";
import logo1 from "../../../assets/images/Home1/66c6fb8bca715a603abbc84f_Clients Logo.svg";
import logo2 from "../../../assets/images/Home1/66c6fb8bb6896643f3baa632_Clients Logo-2.svg";
import logo3 from "../../../assets/images/Home1/66c6fb8bf82fe9cef5f78d2a_Clients Logo-3.svg";
import logo4 from "../../../assets/images/Home1/66c6fb8b87b34b4188395ff2_Clients Logo-4.svg";
import logo5 from "../../../assets/images/Home1/66c6fb8bf99901dda5c25e7e_Clients Logo-5.svg";
import logo6 from "../../../assets/images/Home1/66c6fb8beb3991b3db5cd5ff_Clients Logo-6.svg";
import girlLogo from "../../../assets/images/Home1/66d98189c5a2b384d11ea977_Girl With Logo.webp";
import popup1 from "../../../assets/images/Home1/66d98188f6fc5249944bae7c_Review Popup.webp";
import quote from "../../../assets/images/Home1/66cff274c1ce9bc0b1d47e56_Quote Icons.svg";
import arrow from "../../../assets/images/Home1/66c86330828a126c2bb6c4d9_Button Arrow Black.png";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);
  const [text, setText] = useState(false);
  const [height, setHeight] = useState(2);
  return (
    <>
      {/* first section */}
      <div className="flex flex-col lg:flex-row md:order-2 xl:order-1 bg-aboutHero bg-cover px-5 bg-no-repeat items-center justify-between md:gap-10 lg:gap-0 bg-main-color-1 py-32 bg-[-300px] md:h-[430px] lg:h-[620px]">
        <div
          data-aos="fade-up"
          className="flex flex-col gap-5 justify-center items-center w-full text-white"
        >
          <p className="font-semibold text-sm">ABOUT US</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-center font-semibold w-[100%] md:w-[70%] lg:w-[60%] xl:w-[40%]">
            You’re sincerely determined to grow
          </h1>
        </div>
      </div>

      {/* second section */}
      <div className="mt-20 gap-20 sm:gap-0 pb-20 sm:pb-5 relative px-5 flex flex-col lg:flex-row justify-between items-start">
        <div
          data-aos="fade-up"
          className="relative flex w-[100%] lg:w-[40%] xl:w-[50%]"
        >
          <img
            src={empl}
            className="-mt-40 sm:mt-0 sm:relative -top-44 md:-top-44 lg:-top-48 right-0 w-[100%] lg:w-[100%] xl:w-[100%] h-[450px] sm:h-[540px] md:h-[750px] lg:h-[600px] xl:h-[680px] rounded-lg shadow-2xl"
            alt=""
          />
          <img
            data-aos="fade-right"
            src={popup}
            className="absolute hidden sm:block bottom-20 md:bottom-32 right-10 lg:right-6 w-[40%] md:w-80 lg:w-52 xl:w-72 shadow-md rounded-3xl h-48"
            alt="Girl"
          />
        </div>
        <div className="px-8 lg:px-0 lg:w-[55%] xl:w-[45%] h-80 flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 md:gap-5">
          <div data-aos="fade-up">
            <p className="sm:text-sm md:text-md font-medium">OUR STORY</p>
          </div>
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3 md:gap-5">
            <div data-aos="fade-up">
              <h1 className="text-2xl text-center lg:text-start sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-normal md:leading-[53px]">
                Limitless learning and get more possibilities
              </h1>
            </div>
            <div data-aos="fade-up" className="w-[100%] lg:w-[90%]">
              <p className="text-[gray] text-center lg:text-start font-medium text-sm sm:text-md md:text-[15px] leading-6">
                Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse
                in maecenas scelerisque imperdiet nec. Pellentesque mauris amet
                ligula eget malesuada ullamcorper nibh. Etiam suspendisse
                pretium est elementum elementum rhoncus.
              </p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-12 justify-center sm:justify-start sm:items-center">
              <div
                data-aos="fade-up"
                className="flex flex-col items-center sm:items-start lg:items-center gap-2 md:gap-4 justify-center"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                  1.5K
                </h1>
                <p className="font-semibold text-sm md:text-md">
                  FASHION SEASONS
                </p>
              </div>
              <span
                data-aos="fade-up"
                className="bg-black hidden sm:block h-20 w-[1.5px]"
              ></span>
              <div
                data-aos="fade-up"
                className="flex flex-col items-center sm:items-start lg:items-center gap-2 md:gap-4 justify-center"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                  7.8K
                </h1>
                <p
                  data-aos="fade-up"
                  className="font-semibold text-sm md:text-md"
                >
                  ENROLLED
                </p>
              </div>
              <span
                data-aos="fade-up"
                className="bg-black hidden sm:block h-20 w-[1.5px]"
              ></span>
              <div
                data-aos="fade-up"
                className="flex flex-col items-center sm:items-start lg:items-center gap-2 md:gap-4 justify-center"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                  100%
                </h1>
                <p className="font-semibold text-sm md:text-md">
                  JOB PLACEMENT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third section */}
      <div data-aos="fade-up" className="px-5 md:mt-10 lg:mt-0 bg-[#f3f6f7]">
        <div className="flex flex-wrap lg:flex-nowrap rounded-md gap-10 lg:gap-1 xl:gap-0 bg-main-color-1 py-16 justify-center md:justify-between items-center px-8">
          <div className="flex flex-col lg:flex-row text-center lg:text-start gap-5 text-white items-center justify-center">
            <div>
              <img src={circle} alt="" />
            </div>
            <div>
              <h1 className="text-[20px] md:text-[26px] font-semibold">
                150+ online courses
              </h1>
              <p className="text-gray-400 text-md lg:text-base font-semibold xl:text-md">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row text-center lg:text-start gap-5 text-white items-center justify-center">
            <div>
              <img src={pen} alt="" />
            </div>
            <div>
              <h1 className="text-[20px] md:text-[26px] font-semibold">
                Personalized learning
              </h1>
              <p className="text-gray-400 text-md lg:text-base font-semibold xl:text-md">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row text-center lg:text-start gap-5 text-white items-center justify-center">
            <div>
              <img src={update} alt="" />
            </div>
            <div>
              <h1 className="text-[20px] md:text-[26px] font-semibold">
                Lifetime update
              </h1>
              <p className="text-gray-400 text-md lg:text-base font-semibold xl:text-md">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* fourth section */}
      <div className="bg-[#f3f6f7]">
        <div className="flex flex-col gap-12 justify-center items-center py-20">
          <div className="flex flex-col justify-center items-center gap-5">
            <p data-aos="fade-up" className="text-md font-[500]">
              WHY WE ARE
            </p>
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-2xl md:text-4xl font-semibold w-[95%] md:w-[700px] lg:w-[900px] text-center"
            >
              We believe in our good education and development system and we
              know how to work together to reach greater success
            </h1>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="px-5 gap-8 lg:gap-1 grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center"
        >
          {AboutData.map((data) => (
            <div
              key={data.id}
              onMouseOver={() => setHeight(data.id)}
              // onMouseLeave={() => setHeight(data.id)}
              className={`
                ${
                  height === data.id
                    ? "lg:h-[465px] xl:h-[405px] duration-1000"
                    : "lg:h-[360px] xl:h-[330px] duration-500"
                } 
                md:w-[98%] bg-white lg:w-[250px] xl:w-[305px] overflow-hidden duration-1000 group shadow-3xl flex flex-col gap-4 px-5 py-10`}
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-semibold text-blue-600">
                  {data.cardNo}
                </h1>
                <h1 className="text-[21px] md:text-[24px] lg:text-[22px] xl:text-[23px] lg:w-[70%] xl:w-[90%] font-semibold">
                  {data.title}
                </h1>
              </div>
              <div className="lg:w-[100%] xl:w-[85%]">
                <p className="text-sm md:text-lg text-[gray] font-semibold">
                  {data.desc}
                </p>
              </div>
              <div className="mt-10">
                <button className="bg-main-color-1 duration-300 py-4 text-white hover:scale-95 overflow-hidden px-5 md:px-14 rounded-md font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* fifith section  */}
      <div className="px-5 pb-64 sm:py-40 xl:py-32 relative flex flex-col gap-10 sm:gap-40 md:gap-20 lg:gap-72 lg:flex-row justify-between items-start w-full bg-[#f3f6f7]">
        <div className="relative gap-14 mt-20 lg:mt-0 pr-5 lg:pr-0 flex flex-col sm:flex-row w-full sm:gap-5 lg:w-[500px]">
          <div className="absolute hidden sm:block bg-main-color-2 rounded-full z-1 left-40 lg:-top-14 lg:left-16 xl:left-24 w-48 h-48"></div>
          <video
            data-aos="fade-up"
            autoPlay
            muted
            src={video}
            className="relative z-10 sm:top-20 object-cover lg:w-64 w-[100%] sm:w-[50%] xl:w-64 h-[250px] sm:h-[340px] md:h-[280px] lg:h-[350px] xl:h-[280px] rounded-tl-[50px] shadow-2xl"
          ></video>
          <img
            data-aos="fade-down"
            src={girl}
            className="right-0 z-10 w-[100%] sm:w-[100%] lg:w-64 xl:w-[360px] lg:h-[500px] h-[450px] sm:h-[340px] md:h-[550px] xl:h-[480px] rounded-md shadow-2xl"
            alt=""
          />
          <img
            data-aos="fade-right"
            src={outline}
            className="absolute hidden md:block z-[1] top-52 left-10 lg:-bottom-52 lg:left-32 xl-bottom-10 lg:w-[800px] xl:w-[700px] lg:h-[600px] xl:h-96"
            alt="Girl"
          />
        </div>
        <div className="px-8 pb-20 lg:px-0 lg:w-[1045px] xl:w-[620px] h-80 flex flex-col gap-3 md:gap-5">
          <div>
            <p
              data-aos="fade-up"
              className="sm:text-sm md:text-base font-medium"
            >
              WHAT WE OFFER
            </p>
          </div>
          <div className="flex flex-col gap-3 md:gap-5">
            <div>
              <h1
                data-aos="fade-up"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-normal md:leading-[53px]"
              >
                Personalized learning for your ambitions
              </h1>
            </div>
            <div className="w-[100%] lg:w-[90%]">
              <p
                data-aos="fade-up"
                className="text-[gray] font-medium text-sm sm:text-md md:text-md"
              >
                Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
                mauris mus. Vitae diam dolor lacus amet integer ut.
              </p>
            </div>
            <div className="px-5">
              <ul
                data-aos="fade-up"
                className="grid grid-cols-1 sm:grid-cols-2  justify-between list-disc sm:text-md md:text-md font-medium gap-1"
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
            className="bg-main-color-3 flex flex-col sm:flex-row justify-start items-start sm:items-center sm:justify-between lg:justify-center gap-5 px-5 py-10 rounded-md w-[100%] sm:w-[95%] mt-3 sm:mt-3"
          >
            <div className="w-[100%] sm:w-[70%] lg:w-[60%] flex flex-col gap-4">
              <h1 className="text-xl font-semibold">Still have questions?</h1>
              <p className="text-[gray] font-medium">
                Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
              </p>
            </div>
            <div>
              <button className="bg-main-color-1 text-white py-3 md:py-3 px-8 sm:px-5 md:px-10 lg:px-6 xl:px-10 lg:hover:scale-90 duration-500 rounded-md text:md md:text-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-[100%] px-10 pt-20 pb-10 bg-main-color-1"
      >
        <h1 className="text-center mb-12 font-semibold text-lg text-[gray]">
          Learn from 350+ leading universities and companies with us
        </h1>
        <Marquee
          speed={70}
          gradient={true}
          pauseOnHover={false}
          gradientWidth={0}
        >
          <div className="">
            <img src={logo1} className="ml-40" alt="" />
          </div>
          <div>
            <img src={logo2} className="ml-40" alt="" />
          </div>
          <div>
            <img src={logo3} className="ml-40" alt="" />
          </div>
          <div>
            <img src={logo4} className="ml-40" alt="" />
          </div>
          <div>
            <img src={logo5} className="ml-40" alt="" />
          </div>
          <div>
            <img src={logo6} className="ml-40" alt="" />
          </div>
        </Marquee>
      </div>

      {/* sixth section */}
      <div className="flex gap-10 md:gap-0 py-20 flex-col md:flex-row justify-between px-8 items-center">
        <div className="flex gap-3 md:gap-8 flex-col justify-center items-center md:justify-center md:items-end w-full md:w-[56%]">
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
          >
            Became an instructor
          </h1>
          <p
            data-aos="fade-up"
            className="text-sm md:text-[16px] leading-7 font-semibold text-center md:text-end text-[gray]"
          >
            Lorem ipsum dolor sit amet consectetur. Sed ultricies fames
            scelerisque urna quis semper amet. Nisl tincidunt tortor nullam est
            nec commodo orci dictum in. Lorem consectetur donec purus sagittis.
          </p>
          <button
            data-aos="fade-up"
            className="bg-main-color-1 text-white py-3 md:py-3 px-8 sm:px-5 md:px-10 lg:px-6 xl:px-12 lg:hover:scale-90 duration-500 rounded-md text:md md:text-md"
          >
            Start Teaching Today
          </button>
        </div>
        <div className="relative w-[100%] md:w-[40%]">
          <img data-aos="fade-left" src={girlLogo} className="w-[90%]" alt="" />
          <img
            data-aos="fade-right"
            src={popup1}
            className="w-[45%] rounded-full shadow-2xl absolute top-20 lgtop-40 -left-10"
            alt=""
          />
        </div>
      </div>

      {/* seventh section */}
      <div className="bg-main-color-3">
        <div className="py-24 gap-8 flex flex-col justify-center items-center">
          <img data-aos="fade-up" src={quote} alt="" />
          {text ? (
            <>
              <div data-aos="fade-up" className="w-[97%] lg:w-[93%] xl:w-[73%]">
                <p className="text-center text-lg md:text-xl lg:text-xl font-semibold">
                  &quot;Lorem ipsum dolor sit amet consectetur. Est felis
                  pulvinar tortor ut nibh montes ante gravida velit. Facilisi
                  posuere in sed mattis blandit duis aliquet. Molestie faucibus
                  nibh felis tempor vel aliquet cursus .&quot;
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col justify-center gap-3 items-center"
              >
                <h1 className="text-xl md:text-xl font-semibold">
                  Linda Grady
                </h1>
                <p className="text-[gray] text-md md:text-md">
                  CO-ASSISTANT MANAGER
                </p>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="w-[99%] lg:w-[90%] xl:w-[75%]">
                <p className="text-center text-lg md:text-xl lg:text-xl font-semibold">
                  &quot;Lorem ipsum dolor sit amet consectetur. Est felis
                  pulvinar tortor ut nibh montes ante gravida velit. Facilisi
                  posuere in sed mattis blandit duis aliquet. Molestie faucibus
                  nibh felis tempor vel aliquet cursus placerat duis.&quot;
                </p>
              </div>
              <div className="flex flex-col justify-center gap-3 items-center">
                <h1 className="text-xl md:text-xl font-semibold">Jim Adams</h1>
                <p className="text-[gray] text-md md:text-md">DESIGNER</p>
              </div>
            </>
          )}
          <div className="flex items-center gap-3 justify-center">
            <span
              onClick={() => setText((pre) => !pre)}
              className="rounded-full cursor-pointer border hover:border-black border-[gray] py-3 px-[11px]"
            >
              <img src={arrow} className="w-3 rotate-180" alt="" />
            </span>
            <span
              onClick={() => setText((pre) => !pre)}
              className="rounded-full border cursor-pointer hover:border-black border-[gray] py-3 px-[11px]"
            >
              <img src={arrow} alt="" className="w-3" />
            </span>
          </div>
        </div>
        <div></div>
      </div>

      {/* eigth section */}
      <div className="bg-[#00000052] lg:px-5 xl:px-24 py-5 md:py-14 lg:py-36 flex w-[100%] gap-5 lg:gap-0 flex-col lg:flex-row items-center justify-center lg:items-center lg:justify-between">
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

export default About;
