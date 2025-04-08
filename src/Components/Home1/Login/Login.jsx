import { NavLink } from "react-router-dom";
import navbarImg from "../../../assets/images/Home1/66c6fb8bf82fe9cef5f78d65_Elearna.svg";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const UserSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(5, "Password must be at least 5 charachters")
    .max(8, "Password must be less than 8 charachters"),
});

function Login() {
  const [alert, setAlert] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(UserSchema),
  });
  const loginForm = async (data) => {
    await new Promise((resp) => setTimeout(resp, 1000));
    console.log(data);
    // setUserData(data);
    setAlert(true);
    reset();
  };
  return (
    <>
      {/* <div className="fixed top-0 left-0 right-0 h-16 w-full bg-main-color-1 z-[10000] bg-login"></div> */}
      <div className="fixed top-0 left-0 right-0 z-[10000] bg-login bg-main-color-1 bg-cover bg-no-repeat w-full h-screen">
        <div className="px-5 mt-5">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start gap-10 lg:gap-80">
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
            <div className="relative flex flex-col justify-center items-center gap-2">
              <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-white text-4xl font-semibold">Log in</h1>
                <p className="text-white text-center text-md sm:text-lg font-semibold">
                  More than 50k students have joined Elearna already
                </p>
              </div>
              <form
                onSubmit={handleSubmit(loginForm)}
                className="bg-[#20383e] py-7 px-10 rounded-md flex flex-col items-start justify-start gap-5 w-full sm:w-[450px]"
              >
                <div className="flex flex-col items-start justify-start gap-1 w-full">
                  <label
                    htmlFor=""
                    className="text-white text-md font-semibold"
                  >
                    Email address
                  </label>
                  <input
                    {...register("email")}
                    type="text"
                    className="w-full py-3 rounded-md outline-none px-5 text-[gray] bg-[#364d52]"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="flex flex-col items-start justify-start gap-1 w-full">
                  <label
                    htmlFor=""
                    className="text-white text-md font-semibold"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="text"
                    className="w-full py-3 rounded-md outline-none px-5 text-[gray] bg-[#364d52]"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <div className="flex mt-5 justify-center items-center w-full">
                  {isSubmitting ? (
                    <button className="bg-main-color-2 w-full py-3 rounded-md">
                      Please Wait...
                    </button>
                  ) : (
                    <button className="bg-main-color-2 w-full py-3 rounded-md">
                      Log In
                    </button>
                  )}
                </div>
                <div className="flex justify-between items-center w-full">
                  <h1 className="text-gray-300 text-md sm:text-md font-semibold">
                    Don&apos;t have an account?
                  </h1>
                  <NavLink to="/signup">
                    <p className="text-white cursor-pointer text-md sm:text-md font-semibold hover:text-main-color-2 duration-200">
                      {" "}
                      Sign Up
                    </p>{" "}
                  </NavLink>
                  <div
                    className={`
                ${alert ? "h-44 py-2" : "h-0"}
                 absolute bg-[#364d52] w-full sm:w-[500px] duration-1000 shadow-xl overflow-hidden left-0 -top-[109px] lg:-top-5`}
                  >
                    <div className="px-5 pb-2 flex justify-between items-center border-b">
                      <p className="text-md font-semibold text-main-color-2">
                        Success Message
                      </p>
                      <FaTimes
                        onClick={() => setAlert(false)}
                        className="text-lg cursor-pointer text-white"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5 mt-4">
                      <p className="text-white">Do you want to continue?</p>
                      <div className="flex justify-center items-center gap-3">
                        <p
                          onClick={() => setAlert(false)}
                          className="bg-red-600 cursor-pointer text-white px-8 py-1 rounded-sm text-sm font-semibold hover:bg-red-700 duration-300"
                        >
                          No
                        </p>
                        <p className="bg-green-600 cursor-pointer text-white px-8 py-1 rounded-sm text-sm font-semibold hover:bg-green-700 duration-300">
                          <NavLink to="/">Yes</NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="flex justify-center items-center gap-5">
                <div className="w-28 h-[1.5px] bg-gray-500"></div>
                <div className="text-white text-md font-semibold">
                  Test Login
                </div>
                <div className="w-28 h-[1.5px] bg-gray-500"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-600"></div>
          <div className="flex justify-between items-start mt-5 flex-wrap">
            <div className="flex justify-start items-center gap-7">
              <p className="text-white text-xs cursor-pointer font-semibold hover:text-main-color-2 duration-200">
                STYLE GUIDE
              </p>
              <p className="text-white text-xs cursor-pointer font-semibold hover:text-main-color-2 duration-200">
                PASSWORD PROTECTED
              </p>
              <p className="text-white text-xs cursor-pointer font-semibold hover:text-main-color-2 duration-200">
                404
              </p>
              <p className="text-white text-xs cursor-pointer font-semibold hover:text-main-color-2 duration-200">
                LICENSE
              </p>
            </div>
            <div className="text-white text-sm font-semibold flex flex-col justify-center items-center">
              <p>Test user: pbsyousufzoydreaminghigh@gmail.com</p>
              <p>Password: 12345</p>
            </div>
            <div className="flex justify-start items-center gap-7">
              <p className="text-white text-xs font-semibold ">
                DESIGN BY{" "}
                <span className="hover:text-main-color-2 cursor-pointer duration-200">
                  M SAHEL YOUSUFZOY
                </span>
              </p>
              <p className="text-white text-xs font-semibold">
                POWERED BY{" "}
                <span className="hover:text-main-color-2 cursor-pointer duration-200">
                  UPSKILL
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* {UserData.map((data) => (
        <div key={data}>{data.email}</div>
      ))} */}
    </>
  );
}

export default Login;
