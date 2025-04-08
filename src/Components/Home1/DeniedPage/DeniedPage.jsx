import { NavLink } from "react-router-dom";
import navbarImg from "../../../assets/images/Home1/66c6fb8bf82fe9cef5f78d65_Elearna.svg";
import lock from "../../../assets/images/Home1/lock.svg";

function DeniedPage() {
  return (
    <div className="z-[100000] fixed bg-login bg-main-color-1 bg-cover bg-no-repeat w-full h-screen">
      <div className="px-5 mt-2 lg:mt-10">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start gap-5 lg:gap-80">
          <div>
            {" "}
            <NavLink to="/">
              <img
                src={navbarImg}
                className="cursor-pointer trans w-[90px]"
                alt=""
              />
            </NavLink>
          </div>
          <div className="relative flex flex-col justify-center items-center gap-2 mt-20">
            <div className="bg-[#20383e] py-7 px-10 rounded-md flex flex-col items-center justify-start gap-5 w-full sm:w-[450px]">
              <img src={lock} alt="" />
              <h1 className="text-white text-4xl font-semibolds">
                Access Denied
              </h1>
              <p className="text-[#c9c9c9] text-center">
                A site membership is required to view this page. Please{" "}
                <span className="text-white hover:text-main-color-2 duration-300">
                  <NavLink to="/signup">Sign up</NavLink>
                </span>
                or{" "}
                <span className="text-white hover:text-main-color-2 duration-300">
                  <NavLink to="/login">Log in</NavLink>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeniedPage;
