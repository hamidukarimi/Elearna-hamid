import navbarImg from "../../../assets/images/Home1/66c6fb8bf82fe9cef5f78d65_Elearna.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);
  return (
    <div className="flex flex-col gap-8 bg-cover bg-no-repeat bg-hero bg-main-color-1 px-5 pt-32 pb-7">
      <div
        data-aos="fade-up"
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:justify-items-start gap-10 lg:gap-0 lg:justify-items-end items-start"
      >
        <div className="flex flex-col gap-5">
          <img src={navbarImg} className="cursor-pointer trans w-24" alt="" />
          <p className="text-[gray] font-medium text-md">
            Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
            eget amet ut tristique cras.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-xl font-semibold">Quick links</h1>
          <ul className="flex flex-col gap-3">
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <NavLink to="/event">Events</NavLink>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <NavLink to="/career">Career</NavLink>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              Instructor
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-xl font-semibold">Popular courses</h1>
          <ul className="flex flex-col gap-3">
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              Finance
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              Management
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              Design
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              Web development
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-xl font-semibold">Company</h1>
          <ul className="flex flex-col gap-3">
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <NavLink to="/course">Courses</NavLink>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              License
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              404
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-xl font-semibold">CMS</h1>
          <ul className="flex flex-col gap-3">
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              Course details
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              Instructor details
            </li>
            <li className="text-[gray] text-md font-semibold hover:text-main-color-2 cursor-pointer duration-300">
              Blog details
            </li>
          </ul>
        </div>
      </div>
      <div className="border border-[gray]"></div>
      <div className="flex justify-between items-center">
        <h1 className="text-[gray] font-semibold text-sm">
          DESIGN BY{" "}
          <span className="text-white hover:text-main-color-2 duration-300 cursor-pointer">
            MOH SAHEL YOUSUFZOY
          </span>
        </h1>
        <h1 className="text-[gray] font-semibold text-sm">
          POWERED BY{" "}
          <span className="text-white hover:text-main-color-2 duration-300 cursor-pointer">
            UPSKILL
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
