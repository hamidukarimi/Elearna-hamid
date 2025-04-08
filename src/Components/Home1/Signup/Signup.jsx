import { NavLink } from "react-router-dom";
import navbarImg from "../../../assets/images/Home1/66c6fb8bf82fe9cef5f78d65_Elearna.svg";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import bcryptjs from "bcryptjs";

const UserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  password: z
    .string()
    .min(5, "Password must be at least 5 charachters")
    .max(8, "Password must be less than 8 charachters")
    .refine((val) => val),
});
function Signup() {
  const [UserData, setUserData] = useState([]);
  const [password, setPassword] = useState(null);
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
    const hashPassword = await bcryptjs.hash(data.password, 10);
    setPassword(hashPassword);
    console.log(data);
    setUserData(data);
    setAlert(true);
    reset();
  };
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
          <div className="relative flex flex-col justify-center items-center gap-2">
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="text-white text-4xl font-semibold">Sign Up</h1>
              <p className="text-white text-center text-md sm:text-lg font-semibold">
                More then 50k students join with us!
              </p>
            </div>
            <form
              onSubmit={handleSubmit(loginForm)}
              className="bg-[#20383e] py-7 px-10 rounded-md flex flex-col items-start justify-start gap-5 w-full sm:w-[450px]"
            >
              <div className="flex flex-col items-start justify-start gap-1 w-full">
                <label htmlFor="" className="text-white text-md font-semibold">
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
                <div className="flex flex-col items-start justify-start gap-1 w-full">
                  <label
                    htmlFor=""
                    className="text-white text-md font-semibold"
                  >
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full py-3 rounded-md outline-none px-5 text-[gray] bg-[#364d52]"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-1 w-full">
                <label htmlFor="" className="text-white text-md font-semibold">
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
                <p className="text-white cursor-pointer text-md sm:text-md font-semibold hover:text-main-color-2 duration-200">
                  {" "}
                  <NavLink to="/login">Sign In</NavLink>
                </p>{" "}
                <div
                  className={`
                ${alert ? "min-h-44 py-2" : "h-0"}
                 absolute shadow-2xl bg-[#364d52] w-full sm:w-[500px] duration-1000 overflow-hidden left-0 -top-[58px] lg:-top-10`}
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
                  <div className="flex flex-col justify-center items-start px-5 gap-5 mt-4">
                    <ul className="text-white flex flex-col justify-start items-start gap-1">
                      <li>
                        <span className="text-green-400 font-semibold">
                          Name
                        </span>{" "}
                        : {UserData.name}
                      </li>
                      <li>
                        <span className="text-green-400 font-semibold">
                          Email
                        </span>{" "}
                        : {UserData.email}
                      </li>
                      <li>
                        <span className="text-green-400 font-semibold">
                          Password
                        </span>{" "}
                        _ <span className="text-xs">{password}</span>
                      </li>
                    </ul>
                    <div className="flex justify-center items-center gap-3">
                      <p
                        onClick={() => setAlert(false)}
                        className="bg-red-600 cursor-pointer text-white px-8 py-1 rounded-sm text-sm font-semibold hover:bg-red-700 duration-300"
                      >
                        Close
                      </p>
                      <p className="bg-green-600 cursor-pointer text-white px-8 py-1 rounded-sm text-sm font-semibold hover:bg-green-700 duration-300">
                        <NavLink to="/">Continue</NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
