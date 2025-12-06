import navbarImg from "../../../assets/images/Home1/66c6fb8bf82fe9cef5f78d65_Elearna.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      easing: "ease",
    });
  }, []);

  return (
    <div className="flex flex-col gap-8 bg-cover bg-no-repeat bg-hero bg-main-color-1 px-5 pt-32 pb-7">
      <div
        data-aos="fade-up"
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:justify-items-start gap-10 lg:gap-0 lg:justify-items-end items-start"
      >
        <div className="flex flex-col gap-5">
          <a href="https://hkarimi-two.vercel.app/">
            <img src={navbarImg} className="cursor-pointer trans w-24" alt="" />
          </a>
          <p className="text-[gray] font-medium text-md">
            Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
            eget amet ut tristique cras.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-white text-xl font-semibold">Quick links</h1>
          <ul className="flex flex-col gap-3">
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Home</a>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Events</a>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Career</a>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Instructor</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-white text-xl font-semibold">Popular courses</h1>
          <ul className="flex flex-col gap-3">
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Finance</a>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Management</a>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Design</a>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Web development</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-white text-xl font-semibold">Company</h1>
          <ul className="flex flex-col gap-3">
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">About</a>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Courses</a>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Blog</a>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Contact</a>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">License</a>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Pricing</a>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">404</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-white text-xl font-semibold">CMS</h1>
          <ul className="flex flex-col gap-3">
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Course details</a>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Instructor details</a>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <a href="https://hkarimi-two.vercel.app/">Blog details</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border border-[gray]"></div>

      <div className="flex justify-between items-center">
        <h1 className="text-[gray] font-semibold text-sm">
          DESIGN BY{" "}
          <span className="text-white hover:text-main-color-2 duration-300 cursor-pointer">
            <a href="https://hkarimi-two.vercel.app/">Hamid Karimi</a>
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
