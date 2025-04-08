import navbarImg from "../../../assets/images/Home1/66c6fb8bf82fe9cef5f78d65_Elearna.svg";
import cart from "../../../assets/images/Home1/66c6fb8ba5e099697cc76c17_Cart.svg";
import coins from "../../../assets/images/Home1/67123069e49297274bf9143a_Coins Icons.svg";
import {
  FaAngleDown,
  FaAngleRight,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Offset from the viewport
      easing: "ease", // Easing function
    });
  }, []);
  const [navbar, setNavbar] = useState(false);
  const [btnRotate, setBtnRotate] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const [sidebarLi, setSideBarLi] = useState(false);
  const [sidebarLi2, setSideBarLi2] = useState(false);
  const [sidebarLi3, setSideBarLi3] = useState(false);
  const [sidebarLiSub, setSideBarLiSub] = useState(false);
  const [sidebarLiSub1, setSideBarLiSub1] = useState(false);

  const [menuShow1, setMenuShow1] = useState(false);
  const [menuShow2, setMenuShow2] = useState(false);

  useEffect(() => {
    if (sidebarLi) {
      setSideBarLi2(false);
      setSideBarLi3(false);
    }
  }, [sidebarLi]);
  useEffect(() => {
    if (sidebarLi2) {
      setSideBarLi(false);
      setSideBarLi3(false);
    }
  }, [sidebarLi2]);
  useEffect(() => {
    if (sidebarLi3) {
      setSideBarLi(false);
      setSideBarLi2(false);
    }
  }, [sidebarLi3]);
  useEffect(() => {
    if (sidebarLiSub) {
      setSideBarLiSub1(false);
    }
  }, [sidebarLiSub]);
  useEffect(() => {
    if (sidebarLiSub1) {
      setSideBarLiSub(false);
    }
  }, [sidebarLiSub1]);

  useEffect(() => {
    function navBar() {
      if (window.scrollY > 15) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
    window.addEventListener("scroll", navBar);
  }, []);
  let location = useLocation();

  useEffect(() => {
    setMenuShow1(false);
    setMenuShow2(false);
    setSideBar(false);
    setBtnRotate(false);
    setCarts(false);
  }, [location]);

  const [carts, setCarts] = useState(false);
  return (
    // navbar start
    <>
      <div
        className={`
          
          ${navbar ? "bg-main-color-1" : "bg-transparent"}
          bg-main-color-1 flex justify-between items-center px-5 h-[70px] fixed top-0 right-0 left-0 z-50`}
      >
        {/* navbar logo */}
        <div>
          <NavLink to="/">
            <img src={navbarImg} className="cursor-pointer w-24" alt="" />
          </NavLink>
        </div>
        {/* navbar menu */}
        <div className="hidden lg:block">
          <ul className="flex text-main-color-3 lg:gap-10 xl:gap-12 font-normal text-md">
            <li className="flex items-center gap-1 cursor-pointer">
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              onMouseOver={() => setMenuShow2(true)}
              onMouseLeave={() => setMenuShow2(false)}
              className="relative flex items-center gap-1"
            >
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1 cursor-pointer">
                  Courses{" "}
                  <span>
                    <FaAngleDown className="mt-1" />{" "}
                  </span>
                </div>
                <div className="relative mt-[70px] right-80">
                  {menuShow2 ? (
                    <div className="absolute w-[850px] overflow-hidden flex gap-0 text-[15px] rounded-md bg-white text-main-color-1">
                      <div className="w-[30%] px-5 flex flex-col gap-2 py-2 bg-main-color-3">
                        <div className="bg-white cursor-pointer rounded-lg px-5 py-5">
                          <h1 className="text-black text-sm font-semibold">
                            Free courses
                          </h1>
                          <p className="text-gray-600 text-xs w-44 leading-6">
                            Free learning resources for skill development.
                          </p>
                        </div>
                        <div className="cursor-pointer rounded-md px-5 py-5">
                          <h1 className="text-black text-sm font-semibold">
                            Paid courses
                          </h1>
                          <p className="text-gray-600 text-xs w-44 leading-6">
                            Courses are available upon purchase.(Requires login)
                          </p>
                        </div>
                      </div>
                      <div className="bg-white py-10 w-full px-14 flex flex-col gap-14">
                        <div className="grid grid-cols-2 gap-12">
                          <div className="flex flex-col gap-2">
                            <h1 className="text-black text-sm font-semibold">
                              FINANCE
                            </h1>
                            <p className="hover:text-main-color-2 text-xs duration-300 cursor-pointer w-[220px] text-gray-500 leading-5">
                              <NavLink to="course/finance">
                                {" "}
                                Understanding corporate finance and investments
                              </NavLink>
                            </p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <h1 className="text-black text-sm font-semibold">
                              DESIGN
                            </h1>
                            <p className="hover:text-main-color-2 text-xs duration-300 cursor-pointer w-[220px] text-gray-500 leading-5">
                              <NavLink to="course/design">
                                {" "}
                                Advanced photoshop techniques for designers
                              </NavLink>
                            </p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <h1 className="text-black text-sm font-semibold">
                              MANAGEMENT
                            </h1>
                            <p className="hover:text-main-color-2 text-xs duration-300 cursor-pointer w-[220px] text-gray-500 leading-5">
                              <NavLink to="course/management">
                                {" "}
                                Crisis management and problem-solving strategies{" "}
                              </NavLink>
                            </p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <h1 className="text-black text-sm font-semibold">
                              DEVELOPMENT
                            </h1>
                            <p className="hover:text-main-color-2 text-xs duration-300 cursor-pointer w-[220px] text-gray-500 leading-5">
                              <NavLink to="course/development">
                                Building single page applications with angular
                              </NavLink>
                            </p>
                          </div>
                        </div>
                        <div className="w-full flex items-center px-8 justify-between gap-10 py-5 bg-main-color-3 rounded-lg">
                          <div className="flex justify-start w-full gap-5">
                            <div>
                              <img src={coins} alt="" />
                            </div>
                            <div className="flex flex-col gap-1">
                              <h1 className="text-black text-sm font-semibold">
                                Increase your potential earnings
                              </h1>
                              <p className="text-gray-600 text-xs leading-5 w-[250px]">
                                Lorem ipsum dolor sit amet scelerisque integer
                                adipiscing velit sem sed.
                              </p>
                            </div>
                          </div>
                          <span className="bg-main-color-2 cursor-pointer px-3 rounded-md text-black py-2">
                            <FaArrowRight className="text-back text-sm" />{" "}
                          </span>
                        </div>
                      </div>
                      <span className="w-full h-1 bg-main-color-2 absolute bottom-0 left-0 rounded-md"></span>
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
            <li
              onMouseOver={() => setMenuShow1(true)}
              onMouseLeave={() => setMenuShow1(false)}
              className="relative flex items-center gap-1"
            >
              <div className="flex items-center gap-1 cursor-pointer">
                Pages{" "}
                <span>
                  <FaAngleDown className="mt-1" />{" "}
                </span>
              </div>
              <div className="relative mt-[68px] right-32">
                {menuShow1 ? (
                  <ul className="absolute w-48 px-8 py-3 flex flex-col gap-2 text-[14px] rounded-md bg-white text-main-color-1">
                    <NavLink to="about">
                      <li className="hover:text-main-color-2 cursor-pointer hover:translate-x-1 duration-300">
                        About
                      </li>
                    </NavLink>
                    <NavLink to="course">
                      <li className="hover:text-main-color-2 cursor-pointer hover:translate-x-1 duration-300">
                        Course
                      </li>
                    </NavLink>
                    <NavLink to="faq">
                      <li className="hover:text-main-color-2 cursor-pointer hover:translate-x-1 duration-300">
                        FAQ
                      </li>
                    </NavLink>
                    <NavLink to="pricing">
                      <li className="hover:text-main-color-2 cursor-pointer hover:translate-x-1 duration-300">
                        Pricing
                      </li>
                    </NavLink>
                    <NavLink to="career">
                      <li className="hover:text-main-color-2 cursor-pointer hover:translate-x-1 duration-300">
                        Career
                      </li>
                    </NavLink>

                    <NavLink to="event">
                      <li className="hover:text-main-color-2 cursor-pointer hover:translate-x-1 duration-300">
                        Events
                      </li>
                    </NavLink>
                    <NavLink to="team">
                      <li className="hover:text-main-color-2 cursor-pointer hover:translate-x-1 duration-300 mb-4">
                        Team
                      </li>
                    </NavLink>

                    <span className="w-full h-1 bg-main-color-2 absolute bottom-0 left-0 rounded-md"></span>
                  </ul>
                ) : null}
              </div>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              <NavLink to="blog">Blog</NavLink>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              <NavLink to="contact">Contact</NavLink>{" "}
            </li>
          </ul>
        </div>
        {/* navbar btns & menu for mobile */}
        <div className="relative flex justify-center items-center gap-4 sm:gap-8 lg:gap-12 xl:gap-16">
          <div onClick={() => setCarts(true)}>
            <img src={cart} className="relative cursor-pointer" alt="" />
            <span className="absolute top-0 left-3 cursor-pointer text-xs bg-main-color-2 px-[5.5px] py-[1px] rounded-full">
              0
            </span>
          </div>
          <div className="text-main-color-3 flex justify-center items-center gap-3">
            <button className="text-sm md:text-[15px] font-semibold cursor-pointer hidden sm:block">
              <NavLink to="login">Login</NavLink>
            </button>
            <span className="hidden sm:block">|</span>
            <button className="text-sm md:text-[15px] font-semibold cursor-pointer hidden sm:block">
              <NavLink to="signup">Register</NavLink>
            </button>
          </div>
          <span
            onClick={() => {
              setBtnRotate(!btnRotate);
              setSideBar((prev) => !prev);
            }}
            className="relative xs:block lg:hidden text-xl md:text-lg font-semibold cursor-pointer flex flex-col gap-1 items-center justify-center text-main-color-3"
          >
            {/* <FaBars />{" "} */}
            <span
              className={`${
                btnRotate
                  ? "-rotate-45 translate-y-[6px] duration-500"
                  : "rotate-0 duration-500"
              } w-6 h-[2px] bg-main-color-3`}
            ></span>
            <span
              className={`${
                btnRotate
                  ? "rotate-45 -translate-y-[0px] duration-500"
                  : "rotate-0 duration-500"
              } w-6 h-[2px] bg-main-color-3`}
            ></span>
          </span>
        </div>
      </div>

      {sidebar ? (
        // <div className={` relative`}>
        <ul
          className={`
            ${sidebar ? "h-screen duration-700" : "h-0 duration-700"}
            flex flex-col fixed xs:block lg:hidden left-0 right-0 top-[70px] sm:top-[70px] py-5 px-5 z-50 bg-white w-[100%] text-main-color-1 gap-7 font-normal text-md`}
        >
          <li className="flex w-[100%] overflow-hidden items-start flex-col justify-start gap-1 cursor-pointer">
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className={`${
              sidebarLi ? "min-h-10" : "h-6"
            } flex w-[100%] overflow-hidden items-start flex-col justify-start gap-1`}
          >
            <div
              onClick={() => setSideBarLi((prev) => !prev)}
              className="flex items-center justify-between w-full cursor-pointer"
            >
              <p>Courses </p>
              <span>
                <FaAngleDown
                  className={`${
                    sidebarLi
                      ? "-rotate-180 duration-500"
                      : "rotate-0 duration-500"
                  } mt-1"`}
                />
              </span>
            </div>
            <ul
              className={`flex flex-col py-5 px-5 bg-white w-[100%] text-main-color-1 gap-7 font-normal text-[16px]`}
            >
              <li
                className={`${
                  sidebarLiSub ? "min-h-10" : "h-6"
                } flex w-[100%] overflow-hidden items-start flex-col justify-start gap-1`}
              >
                <div
                  onClick={() => setSideBarLiSub((prev) => !prev)}
                  className="flex items-center justify-between w-full cursor-pointer"
                >
                  <p>Free </p>
                  <span>
                    <FaAngleRight
                      className={`${
                        sidebarLiSub
                          ? "rotate-90 duration-500"
                          : "rotate-0 duration-500"
                      } mt-1"`}
                    />
                  </span>
                </div>
                <ul
                  className={`flex flex-col py-5 px-5 bg-white w-[100%] text-main-color-1 gap-7 font-normal text-sm`}
                >
                  <li
                    className={`flex w-[100%] overflow-hidden hover:text-main-color-2 duration-300 items-center justify-between gap-1 cursor-pointer`}
                  >
                    Corporate Finance And Investments
                  </li>
                  <li
                    className={`flex w-[100%] overflow-hidden hover:text-main-color-2 duration-300 items-center justify-between gap-1 cursor-pointer`}
                  >
                    Advanced Photoshop Techniques
                  </li>
                  <li
                    className={`flex w-[100%] overflow-hidden hover:text-main-color-2 duration-300 items-center justify-between gap-1 cursor-pointer`}
                  >
                    Crisis Management
                  </li>
                  <li
                    className={`flex w-[100%] overflow-hidden hover:text-main-color-2 duration-300 items-center justify-between gap-1 cursor-pointer`}
                  >
                    Single Page Applications With Angular
                  </li>
                </ul>
              </li>
              <li
                className={`${
                  sidebarLiSub1 ? "min-h-10" : "h-6"
                } flex w-[100%] overflow-hidden items-start flex-col justify-start gap-1`}
              >
                <div
                  onClick={() => setSideBarLiSub1((prev) => !prev)}
                  className="flex items-center justify-between w-full cursor-pointer"
                >
                  <p>Paid </p>
                  <span>
                    <FaAngleRight
                      className={`${
                        sidebarLiSub1
                          ? "rotate-90 duration-500"
                          : "rotate-0 duration-500"
                      } mt-1"`}
                    />
                  </span>
                </div>
                <ul
                  className={`flex flex-col py-5 px-5 bg-white w-[100%] text-main-color-1 gap-7 font-normal text-sm`}
                >
                  <li
                    className={`flex w-[100%] overflow-hidden items-center justify-between gap-1 cursor-pointer`}
                  >
                    Personal And Business Finance
                  </li>
                  <li
                    className={`flex w-[100%] overflow-hidden items-center justify-between gap-1 cursor-pointer`}
                  >
                    Advanced Photoshop Techniques
                  </li>
                  <li
                    className={`flex w-[100%] overflow-hidden items-center justify-between gap-1 cursor-pointer`}
                  >
                    Crisis Management
                  </li>
                  <li
                    className={`flex w-[100%] overflow-hidden items-center justify-between gap-1 cursor-pointer`}
                  >
                    Single Page Applications With Angular
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            className={`${
              sidebarLi2 ? "min-h-10" : "h-7"
            } flex w-[100%] overflow-hidden items-start flex-col justify-start gap-1`}
          >
            <div
              onClick={() => setSideBarLi2((prev) => !prev)}
              className="flex items-center justify-between w-full cursor-pointer"
            >
              <p>Pages </p>
              <span>
                <FaAngleDown
                  className={`${
                    sidebarLi2
                      ? "-rotate-180 duration-500"
                      : "rotate-0 duration-500"
                  } mt-1"`}
                />
              </span>
            </div>
            <ul
              className={`flex flex-col py-5 px-5 bg-white w-[100%] text-main-color-1 gap-7 font-normal text-[16px]`}
            >
              <li
                className={`flex w-[100%] overflow-hidden items-start flex-col justify-start gap-1 cursor-pointer`}
              >
                <NavLink to="about">About</NavLink>
              </li>
              <li
                className={`flex w-[100%] overflow-hidden items-start flex-col justify-start gap-1 cursor-pointer`}
              >
                <NavLink to="course">Course</NavLink>
              </li>
              <li
                className={`flex w-[100%] overflow-hidden items-start flex-col justify-start gap-1 cursor-pointer`}
              >
                <NavLink to="faq">FAQ</NavLink>
              </li>
              <li
                className={`flex w-[100%] overflow-hidden items-start flex-col justify-start gap-1 cursor-pointer`}
              >
                <NavLink to="pricing">Pricing</NavLink>
              </li>
              <li
                className={`flex w-[100%] overflow-hidden items-start flex-col justify-start gap-1 cursor-pointer`}
              >
                <NavLink to="career">Career</NavLink>
              </li>
            </ul>
          </li>
          <li className="flex w-[100%] overflow-hidden items-start flex-col justify-start gap-1 cursor-pointer">
            <NavLink to="blog">Blog</NavLink>
          </li>
          <li className="flex w-[100%] overflow-hidden items-start flex-col justify-start gap-1 cursor-pointer">
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      ) : // </div>
      null}

      {/* cart */}
      {carts ? (
        <div className="fixed right-0 top-0 left-0 w-full h-full bottom-0 bg-[#000000c9] z-50">
          <div className="py-5 fixed right-0 top-0 h-screen w-full sm:w-[540px] bg-white">
            <div className="px-7 pb-4 flex justify-between items-center border-b border-[#898989]">
              <h1 className="text-2xl font-semibold">Your Cart</h1>
              <FaTimes
                onClick={() => setCarts(false)}
                className="text-2xl font-thin cursor-pointer"
              />
            </div>
            <div className="flex justify-center items-center h-full">
              <h1 className="text-[gray] text-lg font-semibold">
                No items found.
              </h1>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
