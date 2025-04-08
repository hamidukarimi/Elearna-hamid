import signature from "../../../assets/images/Home1/66de9b2588280abadd4e26df_Signature.svg";
import home from "../../../assets/images/Home1/66de9b23b2f8295c624d2080_Home Icon.svg";
import book from "../../../assets/images/Home1/66c6fb8bee2a8ef26987f800_Books Icons.svg";
import clock from "../../../assets/images/Home1/66de9b2343d23f2fb8c7598d_Clock Icons.svg";
import faq from "../../../assets/images/Home1/66de9b24cdbecf88f8d1b2da_FAQ Icons.svg";
import { useState } from "react";
import { FAQDate } from "../FAQ/FAQDate";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);
  const [box1, setBox1] = useState(null);

  return (
    <>
      {" "}
      <div className="flex relative z-[-1] flex-col lg:flex-row md:order-2 xl:order-1 bg-contact bg-cover px-5 bg-no-repeat items-center justify-between md:gap-10 lg:gap-0 py-32 md:h-[430px] lg:h-[540px]">
        <div className="flex flex-col gap-5 justify-center items-start px-5 w-full text-white absolute left-0 right-0 top-0 -z-[10] h-full bg-[#000000bd]">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-start font-semibold w-[100%] md:w-[70%] lg:w-[60%] xl:w-[45%]"
          >
            Contact us
          </h1>
        </div>
      </div>
      <div className="px-5 flex flex-col lg:flex-row justify-between lg:gap-52 items-start">
        <div className="flex lg:mt-20 flex-col order-2 lg:order-1 justify-start items-start gap-8 md:gap-16 w-[100%] lg:w-[20%] xl:w-[42%]">
          <div className="flex flex-col justify-start items-start gap-1 md:gap-5">
            <p data-aos="fade-up" className="text-md font-[500]">
              CONTACT US
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold w-[100%] md:w-[100%] lg:w-[500px] xl:w-[700px] text-start"
            >
              Are you interested in online learning? Contact us
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-[gray] text-start text-sm md:text-[16px] leading-6 font-semibold w-full lg:w-[90%]"
            >
              Lorem ipsum dolor sit amet consectetur. Neque libero donec
              hendrerit nam id purus suspendisse. Imperdiet nam lorem tempus in.
              Tristique nullam risus semper habitant urna nisl nam elit at.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              src={signature}
              alt=""
            />
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col justify-start items-start gap-2"
            >
              <h1 className="text-xl font-semibold">Brayden Backham</h1>
              <p className="text-sm font-semibold text-[gray]">DIRECTOR</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="shadow-2xl bg-white order-1 lg:order-2 relative bottom-16 md:bottom-32 rounded-md py-10 flex flex-col justify-start items-start gap-8 md:gap-16 w-[100%] lg:w-[40%] xl:w-[100%]"
        >
          <div className="px-5 md:px-14 flex flex-col w-full items-start justify-start gap-4">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Fill out for contact
            </h1>
            <p className="text-sm md:text-md text-[gray]">
              Lorem ipsum dolor sit amet consectetur libero donec.
            </p>
          </div>
          <div className="px-5 md:px-14 w-full flex flex-col items-start justify-start gap-6">
            <input
              type="text"
              placeholder="Your name*"
              className="border border-[#b5b5b5] py-3 outline-none text-[gray] w-[100%] px-5 md rounded-md"
              name=""
              id=""
            />
            <input
              type="text"
              placeholder="Your email*"
              className="border border-[#b5b5b5] py-3 outline-none text-[gray] w-[100%] px-5 md rounded-md"
              name=""
              id=""
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-[#b5b5b5] py-3 outline-none text-[gray] w-[100%] px-5 md rounded-md"
              name=""
              id=""
            />
            <textarea
              name=""
              placeholder="Your message*"
              className="border h-40 border-[#b5b5b5] py-3 outline-none text-[gray] w-[100%] px-5 md rounded-md"
              id=""
            ></textarea>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <label
                htmlFor=""
                className="text-[gray] text-sm md:text-md cursor-pointer"
              >
                Save information for the next time comment.
              </label>
            </div>
          </div>
          <div className="px-5 md:px-14">
            <button className="text-white bg-main-color-1 px-12 py-4 font-semibold rounded-sm">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-10 flex-col gap-12 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2 md:gap-5">
          <p data-aos="fade-up" className="text-sm md:text-md font-[500]">
            CONTACT DETAILS
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold w-[100%] md:w-[700px] lg:w-[900px] text-center"
          >
            Find our location
          </h1>
        </div>
      </div>
      <div className="mb-10 mt-10 px-5 flex flex-wrap justify-center gap-10 md:gap-0 md:justify-between">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start"
        >
          <div>
            <img src={home} className="mt-2" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2">
            <h1 className="text-md md:text-lg font-semibold">Area location</h1>
            <p className="text-xs text-[gray] font-semibold w-[80%] text-center md:text-start md:w-[70%]">
              410 Sandtown, California 94001, USA
            </p>
          </div>
        </div>
        <div className="w-[1.2px] hidden lg:block h-24 bg-[#cfcdcd]"></div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start"
        >
          <div>
            <img src={book} className="mt-2" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2">
            <h1 className="text-md md:text-lg font-semibold">
              Contact details
            </h1>
            <p className="text-xs text-[gray] font-semibold w-[80%] text-center md:text-start md:w-[70%]">
              888-123-4567 info@example.com
            </p>
          </div>
        </div>
        <div className="w-[1.2px] hidden lg:block h-24 bg-[#cfcdcd]"></div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start"
        >
          <div>
            <img src={clock} className="mt-2" alt="" />
          </div>
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2">
            <h1 className="text-md md:text-lg font-semibold">Opening hours</h1>
            <p className="text-xs text-[gray] font-semibold w-[80%] text-center md:text-start md:w-[70%]">
              Monday-Friday 10:30a.m-7:00p.m
            </p>
          </div>
        </div>
      </div>
      <div className="bg-main-color-3 px-5 flex flex-col justify-center gap-10 sm:gap-20 w-full items-center py-28">
        <div className="flex flex-col md:flex-row items-center justify-center  md:items-center md:justify-between gap-10 md:gap-20 lg:gap-40">
          <div>
            <img data-aos="fade-up" data-aos-delay="100" src={faq} alt="" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col justify-center items-center md:items-start md:justify-start gap-2 md:gap-5"
          >
            <p className="text-md md:text-lg font-semibold">CONTACT US</p>
            <div className="w-[100%] md:w-[80%]">
              <h1 className="text-3xl text-center md:text-start md:text-5xl font-semibold">
                Frequently asked questions
              </h1>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-[100%] lg:w-[90%] xl:w-[70%] flex flex-col justify-center items-center gap-3"
        >
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
                <h1 className="text-[15px] sm:text-[16px] md:text-[19px] font-medium">
                  {data.title}
                </h1>
                <div>
                  {box1 === data.id ? (
                    <span className="text-2xl sm:text-3xl font-bold">-</span>
                  ) : (
                    <span className="text-2xl sm:text-3xl font-bold">+</span>
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
        </div>
      </div>
      <div className="bg-main-color-3">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-main-color-2 ml-2 md:ml-5 lg:px-5 xl:px-24 py-5 md:py-14 lg:py-20 flex w-[94%] md:w-[97%] gap-5 lg:gap-0 flex-col lg:flex-row items-center justify-center lg:items-center lg:justify-between rounded-md relative -bottom-20"
        >
          <div className="w-[100%] text-center lg:text-start lg:w-[70%] xl:w-[35%]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold w-[100%]">
              Are you ready to start your journey?
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 w-[100%] lg:w-[80%] xl:w-[50%]">
            <button className="bg-main-color-1  text-sm md:text-base text-white w-[50%] sm:w-[30%] md:w-[auto] md:px-12 lg:px-10 xl:px-12 py-3 mt-2 font-medium rounded-md hover:scale-95 duration-300">
              Browse Courses
            </button>
            <button className="bg-transparent  text-sm md:text-base border border-main-color-1 text-black w-[50%] sm:w-[30%] md:w-[auto] md:px-12 lg:px-10 xl:px-12 py-3 mt-2 font-medium rounded-md hover:scale-95 duration-300">
              Became A Teacher
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
