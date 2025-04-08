import cd1 from "../../../../../assets/images/Home1/cd1.svg";
import cd2 from "../../../../../assets/images/Home1/cd2.svg";
import cd3 from "../../../../../assets/images/Home1/cd3.svg";
import cd4 from "../../../../../assets/images/Home1/cd4.svg";
import cd5 from "../../../../../assets/images/Home1/cd5.svg";
import rate from "../../../../../assets/images/Home1/66c6fb8b857efb6c4c737b5d_Rating.svg";
import empl from "../../../../../assets/images/Home1/66d9685910e51570ad70d12e_Employ Images.webp";
import curriculum from "../../../../../assets/images/Home1/curriculum.webp";
import amazon from "../../../../../assets/images/Home1/amazon.jpg";
import cu1 from "../../../../../assets/images/Home1/cur1.jpg";
import cu2 from "../../../../../assets/images/Home1/hqdefault (1).webp";
import cu3 from "../../../../../assets/images/Home1/hqdefault (2).webp";
import cu4 from "../../../../../assets/images/Home1/hqdefault (3).webp";
import cu5 from "../../../../../assets/images/Home1/hqdefault (4).webp";
import { useState } from "react";
import { DevelopmentDetail } from "../../../Categories/Development/DevelopmentDetail";
import { ManagementDetail } from "../Management/ManagementDetail";
import { FAQDate } from "../../../FAQ/FAQDate";

function CourseDev() {
  const lists = ["Overview", "Curriculum", "Instructor", "FAQ", "Query"];
  const [activeTab, setActiveTab] = useState("Overview");
  const [box1, setBox1] = useState(null);

  const [changeQ, setChangeQ] = useState("Lesson 1");
  const questions = [
    "Lesson 1",
    "Lesson 2",
    "Lesson 3",
    "Lesson 4",
    "Lesson 5",
    "Lesson 6",
  ];

  return (
    <>
      <div className="flex relative flex-col lg:flex-row md:order-2 xl:order-1 bg-devel4 bg-cover px-5 bg-no-repeat items-center justify-between md:gap-10 lg:gap-0 py-32 md:h-[430px] lg:h-[650px]">
        <div className="px-5 flex flex-col gap-2 sm:gap-5 justify-center items-start bg-gradient-to-b from-[#0f252a8c] from-25% to-[#ffffff00] to-9 0% ... absolute top-0 left-0 right-0 h-full w-full">
          <p className="font-semibold text-xs sm:text-sm text-white">
            DEVELOPMENT
          </p>
          <h1 className="text-white text-xl sm:text-4xl md:text-5xl lg:text-5xl text-start font-semibold w-[100%] md:w-[70%] lg:w-[50%]">
            Building single page applications with angular
          </h1>
          <div className="flex gap-1 mt-2">
            <img src={rate} alt="" />
            <span className="text-sm text-[#a19e9e]">4.88 (210)</span>
          </div>
        </div>
        <div
          // data-aos="fade-up"
          className="bg-white shadow-xl rounded-md absolute w-[85%] md:w-[97%] left-5 z-10 hidden md:block md:-bottom-20"
        >
          <div className="mb-10 mt-10 px-5 flex flex-wrap justify-center gap-10 md:gap-0 md:justify-between">
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center md:justify-start md:items-start">
              <div>
                <img src={cd2} className="mt-2 w-8" alt="" />
              </div>
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-1">
                <h1 className="text-md md:text-lg font-semibold">Time ppan</h1>
                <p className="text-xs text-[gray] font-semibold w-[80%] text-center md:text-start md:w-[70%]">
                  3 weeks
                </p>
              </div>
            </div>
            <div className="w-[0.5px] hidden lg:block h-16 bg-[#cfcdcd]"></div>
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center md:justify-start md:items-start">
              <div>
                <img src={cd1} className="mt-2 w-8" alt="" />
              </div>
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-1">
                <h1 className="text-md md:text-lg font-semibold">Lectures</h1>
                <p className="text-xs text-[gray] font-semibold w-[80%] text-center md:text-start md:w-[100%]">
                  6 Lessons
                </p>
              </div>
            </div>
            <div className="w-[0.5px] hidden lg:block h-16 bg-[#cfcdcd]"></div>
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center md:justify-start md:items-start">
              <div>
                <img src={cd3} className="mt-2 w-8" alt="" />
              </div>
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-1">
                <h1 className="text-md md:text-lg font-semibold">
                  Skill level
                </h1>
                <p className="text-xs text-[gray] font-semibold w-[80%] text-center md:text-start md:w-[100%]">
                  Intermediate
                </p>
              </div>
            </div>
            <div className="w-[0.5px] hidden lg:block h-16 bg-[#cfcdcd]"></div>
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center md:justify-start md:items-start">
              <div>
                <img src={cd4} className="mt-2 w-8" alt="" />
              </div>
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-1">
                <h1 className="text-md md:text-lg font-semibold">
                  Video lesson
                </h1>
                <p className="text-xs text-[gray] font-semibold w-[80%] text-center md:text-start md:w-[100%]">
                  8 hours
                </p>
              </div>
            </div>
            <div className="w-[0.5px] hidden lg:block h-16 bg-[#cfcdcd]"></div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start"
            >
              <div>
                <img src={cd5} className="mt-2" alt="" />
              </div>
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2">
                <h1 className="text-md md:text-lg font-semibold">Students</h1>
                <p className="text-xs text-[gray] font-semibold w-[80%] text-center md:text-start md:w-[90%]">
                  8K Enrolled
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-44">
        <div className="flex justify-center items-center">
          <ul className="bg-main-color-3 flex-col w-full sm:w-auto sm:flex-row rounded-sm flex justify-center items-center gap-3">
            {lists.map((list) => (
              <li
                key={list}
                className={`rounded-sm py-2 w-full text-center px-2 sm:py-3 md:py-4 sm:px-5 md:px-10 cursor-pointer font-semibold text-xs sm:text-sm md:text-md ${
                  activeTab === list
                    ? "text-main-color-3 bg-main-color-1"
                    : "text-main-color-1"
                }`}
                onClick={() => setActiveTab(list)}
              >
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {activeTab === "Overview" && (
        <div className="px-5 mt-16 flex flex-col items-start justify-start gap-12">
          <div>
            <h1 className="text-xl md:text-[35px] font-semibold text-main-color-1">
              Course description
            </h1>
            <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-4">
              Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam
              quam etiam donec pellentesque ut. Nisl pellentesque at aliquam
              scelerisque non consequat amet curabitur. Imperdiet habitant purus
              pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus
              velit elit senectus auctor vitae tristique velit. Feugiat
              consequat diam ipsum suspendisse vestibulum ipsum malesuada.
              Adipiscing nulla hac enim vivamus elementum massa. Est feugiat sed
              eget vestibulum.
            </p>
          </div>
          <div>
            <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
              Main features
            </h1>
            <ul className="text-[gray] text-sm mt-2 md:text-md list-disc px-5 flex flex-col items-start justify-start gap-1">
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Et facilisis nunc quam quam etiam donec pellentesque ut.</li>
              <li>
                Nisl pellentesque at aliquam scelerisque non consequat amet
                curabitur. Imperdiet habitant purus pulvinar diam.
              </li>
              <li>Molestie pharetra morbi eu odio volutpat.</li>
              <li>Cursus velit elit senectus auctor vitae tristique velit.</li>
              <li>
                Feugiat consequat diam ipsum suspendisse vestibulum ipsum
                malesuada.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
              What is the target audience?
            </h1>
            <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
              Lorem ipsum dolor sit amet consectetur. Nibh urna quis tempus elit
              ultrices amet. Convallis facilisis duis vivamus ut suspendisse
              imperdiet vel eleifend maecenas. Mi senectus eu nec mattis lacus
              dolor in diam cursus. Eu magna enim sed duis enim fames vitae
              ornare pretium. Consequat egestas amet eget neque sed. Quis
              elementum amet diam sapien adipiscing dis dignissim.
            </p>
          </div>
        </div>
      )}
      {activeTab === "Instructor" && (
        <div className="mt-16 flex flex-col items-start justify-start gap-12">
          <div className="px-5">
            <h1 className="text-xl md:text-[35px] font-semibold text-main-color-1">
              Course instructor
            </h1>
            <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-4">
              Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam
              quam etiam donec pellentesque ut. Nisl pellentesque at aliquam
              scelerisque non consequat amet curabitur. Imperdiet habitant purus
              pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus
              velit elit senectus auctor vitae tristique velit. Feugiat
              consequat diam ipsum suspendisse vestibulum ipsum malesuada.
            </p>
          </div>
          <div className="grid mb-16 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-5">
            {ManagementDetail.map((data) => (
              <div
                data-aos="fade-up"
                key={data.id}
                className="flex group flex-col justify-center items-center gap-5 cursor-pointer"
              >
                <div className="overflow-hidden bg-main-color-3 w-[100%] sm:w-[300px] md:w-[250px] lg:w-[245px] xl:w-[280px] flex justify-center rounded-md">
                  <img
                    src={data.img}
                    className="h-[100%] sm:h-[60vh] group-hover:scale-110 duration-500 w-[70%] object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <h1 className="text-lg sm:text-xl font-semibold">
                    {data.name}
                  </h1>
                  <h1 className="text-sm text-[gray]">{data.job}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === "FAQ" && (
        <div className="mt-16 flex flex-col items-start justify-start gap-12">
          <div className="px-5">
            <h1 className="text-xl md:text-[35px] font-semibold text-main-color-1">
              Frequently asked questions
            </h1>
            <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-4">
              Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam
              quam etiam donec pellentesque ut. Nisl pellentesque at aliquam
              scelerisque non consequat amet curabitur. Imperdiet habitant purus
              pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus
              velit elit senectus auctor vitae tristique velit. Feugiat
              consequat diam ipsum suspendisse vestibulum ipsum malesuada.
            </p>
          </div>
          <div className="w-[100%] px-5 lg:w-[100%] flex flex-col justify-center items-center gap-3">
            {FAQDate.map((data) => (
              <div
                key={data.id}
                className={`
                      ${box1 === data.id ? "h-36" : "h-12"}
                      bg-main-color-3 px-5 overflow-hidden duration-700 w-[100%]`}
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
                  <p className="text-[gray] text-sm md:text-md font-medium">
                    {data.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === "Query" && (
        <div className="mt-16 flex flex-col items-start justify-start gap-12">
          <div className="px-5 flex justify-center items-center flex-col w-full">
            <h1 className="text-xl md:text-[35px] text-center font-semibold text-main-color-1">
              Have any questions about this course?
            </h1>
            <div className="lg:w-[90%] xl:w-[70%]">
              <p className="text-[gray] text-center text-sm md:text-[17px] leading-[27px] mt-4">
                Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam
                quam etiam donec pellentesque ut. Nisl pellentesque at aliquam
                scelerisque non consequat amet curabitur.
              </p>
            </div>
          </div>

          <div className="px-5 w-full flex flex-col items-start justify-start gap-8">
            <div className="w-full flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-full border border-[#b4b4b4] px-3 py-3 rounded-md text-[gray] outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full border border-[#b4b4b4] px-3 py-3 rounded-md text-[gray] outline-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <input
                  type="text"
                  placeholder="Your email*"
                  className="w-full border border-[#b4b4b4] px-3 py-3 rounded-md text-[gray] outline-none"
                />
                <input
                  type="text"
                  placeholder="Course category*"
                  className="w-full border border-[#b4b4b4] px-3 py-3 rounded-md text-[gray] outline-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <textarea
                  type="text"
                  placeholder="Your query*"
                  className="w-full border border-[#b4b4b4] px-3 py-3 rounded-md text-[gray] outline-none"
                ></textarea>
              </div>
            </div>
            <div className="flex gap-4">
              <input id="label" type="checkbox" />
              <label htmlFor="label" className="text-[gray]">
                Save information for next time.
              </label>
            </div>
            <div>
              <button className="bg-main-color-1 text-white py-3 px-10 rounded-md">
                Send Your Query
              </button>
            </div>
          </div>
        </div>
      )}
      {activeTab === "Curriculum" && (
        <div className="py-20 px-5 gap-10 lg:gap-8 flex flex-col lg:flex-row justify-start items-start w-full">
          {/* questions */}
          <div className="w-[100%] lg:w-[20%]">
            <ul className="flex flex-col gap-1 bg-main-color-3">
              {questions.map((data) => (
                <div
                  key={data}
                  onClick={() => setChangeQ(data)}
                  className={`flex items-center justify-between cursor-pointer
                ${
                  changeQ === data
                    ? "bg-main-color-1 text-white"
                    : "text-[gray]"
                }
                 px-5 py-3 text-md font-semibold rounded-md`}
                >
                  <li className="rounded-md">{data}</li>
                </div>
              ))}
            </ul>
          </div>

          {/* answers */}
          <div className="w-[100%] lg:w-[80%] flex flex-col justify-start items-start gap-0">
            {changeQ === "Lesson 1" ? (
              <div className="flex flex-col items-start justify-start gap-12">
                <div>
                  <h1 className="text-xl md:text-[33px] text-start font-semibold text-main-color-1">
                    Introduction to crisis management and problem-solving
                  </h1>
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Introduction
                  </h1>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
                <div className="w-full">
                  <img src={amazon} className="w-full h-[450px]" alt="" />
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Main features
                  </h1>
                  <ul className="text-[gray] text-sm mt-2 md:text-md list-disc px-5 flex flex-col items-start justify-start gap-1">
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>
                      Et facilisis nunc quam quam etiam donec pellentesque ut.
                    </li>
                    <li>
                      Nisl pellentesque at aliquam scelerisque non consequat
                      amet curabitur. Imperdiet habitant purus pulvinar diam.
                    </li>
                    <li>Molestie pharetra morbi eu odio volutpat.</li>
                    <li>
                      Cursus velit elit senectus auctor vitae tristique velit.
                    </li>
                    <li>
                      Feugiat consequat diam ipsum suspendisse vestibulum ipsum
                      malesuada.
                    </li>
                  </ul>
                </div>
                <div>
                  <img src={curriculum} alt="" />
                </div>
                <div>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px]">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Lesson Summary
                  </h1>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
              </div>
            ) : null}
            {changeQ === "Lesson 2" ? (
              <div className="flex flex-col items-start justify-start gap-12">
                <div>
                  <h1 className="text-xl md:text-[33px] text-start font-semibold text-main-color-1">
                    Coaching and mentoring for developing future leaders
                  </h1>
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Introduction
                  </h1>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
                <div className="w-full">
                  <img src={cu1} className="w-full h-[450px]" alt="" />
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Main features
                  </h1>
                  <ul className="text-[gray] text-sm mt-2 md:text-md list-disc px-5 flex flex-col items-start justify-start gap-1">
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>
                      Et facilisis nunc quam quam etiam donec pellentesque ut.
                    </li>
                    <li>
                      Nisl pellentesque at aliquam scelerisque non consequat
                      amet curabitur. Imperdiet habitant purus pulvinar diam.
                    </li>
                    <li>Molestie pharetra morbi eu odio volutpat.</li>
                    <li>
                      Cursus velit elit senectus auctor vitae tristique velit.
                    </li>
                    <li>
                      Feugiat consequat diam ipsum suspendisse vestibulum ipsum
                      malesuada.
                    </li>
                  </ul>
                </div>
                <div>
                  <img src={curriculum} alt="" />
                </div>
                <div>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px]">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Lesson Summary
                  </h1>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
              </div>
            ) : null}
            {changeQ === "Lesson 3" ? (
              <div className="flex flex-col items-start justify-start gap-12">
                <div>
                  <h1 className="text-xl md:text-[33px] text-start font-semibold text-main-color-1">
                    Crisis management and preparing for the unexpected
                  </h1>
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Introduction
                  </h1>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
                <div className="w-full">
                  <img src={cu2} className="w-full h-[450px]" alt="" />
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Main features
                  </h1>
                  <ul className="text-[gray] text-sm mt-2 md:text-md list-disc px-5 flex flex-col items-start justify-start gap-1">
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>
                      Et facilisis nunc quam quam etiam donec pellentesque ut.
                    </li>
                    <li>
                      Nisl pellentesque at aliquam scelerisque non consequat
                      amet curabitur. Imperdiet habitant purus pulvinar diam.
                    </li>
                    <li>Molestie pharetra morbi eu odio volutpat.</li>
                    <li>
                      Cursus velit elit senectus auctor vitae tristique velit.
                    </li>
                    <li>
                      Feugiat consequat diam ipsum suspendisse vestibulum ipsum
                      malesuada.
                    </li>
                  </ul>
                </div>
                <div>
                  <img src={curriculum} alt="" />
                </div>
                <div>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px]">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Lesson Summary
                  </h1>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
              </div>
            ) : null}
            {changeQ === "Lesson 4" ? (
              <div className="flex flex-col items-start justify-start gap-12">
                <div>
                  <h1 className="text-xl md:text-[33px] text-start font-semibold text-main-color-1">
                    Project management essentials tools and methodologies
                  </h1>
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Introduction
                  </h1>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
                <div className="w-full">
                  <img src={cu3} className="w-full h-[450px]" alt="" />
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Main features
                  </h1>
                  <ul className="text-[gray] text-sm mt-2 md:text-md list-disc px-5 flex flex-col items-start justify-start gap-1">
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>
                      Et facilisis nunc quam quam etiam donec pellentesque ut.
                    </li>
                    <li>
                      Nisl pellentesque at aliquam scelerisque non consequat
                      amet curabitur. Imperdiet habitant purus pulvinar diam.
                    </li>
                    <li>Molestie pharetra morbi eu odio volutpat.</li>
                    <li>
                      Cursus velit elit senectus auctor vitae tristique velit.
                    </li>
                    <li>
                      Feugiat consequat diam ipsum suspendisse vestibulum ipsum
                      malesuada.
                    </li>
                  </ul>
                </div>
                <div>
                  <img src={curriculum} alt="" />
                </div>
                <div>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px]">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Lesson Summary
                  </h1>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
              </div>
            ) : null}
            {changeQ === "Lesson 5" ? (
              <div className="flex flex-col items-start justify-start gap-12">
                <div>
                  <h1 className="text-xl md:text-[33px] text-start font-semibold text-main-color-1">
                    Marketing management and understanding market dynamics
                  </h1>
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Introduction
                  </h1>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
                <div className="w-full">
                  <img src={cu4} className="w-full h-[450px]" alt="" />
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Main features
                  </h1>
                  <ul className="text-[gray] text-sm mt-2 md:text-md list-disc px-5 flex flex-col items-start justify-start gap-1">
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>
                      Et facilisis nunc quam quam etiam donec pellentesque ut.
                    </li>
                    <li>
                      Nisl pellentesque at aliquam scelerisque non consequat
                      amet curabitur. Imperdiet habitant purus pulvinar diam.
                    </li>
                    <li>Molestie pharetra morbi eu odio volutpat.</li>
                    <li>
                      Cursus velit elit senectus auctor vitae tristique velit.
                    </li>
                    <li>
                      Feugiat consequat diam ipsum suspendisse vestibulum ipsum
                      malesuada.
                    </li>
                  </ul>
                </div>
                <div>
                  <img src={curriculum} alt="" />
                </div>
                <div>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px]">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Lesson Summary
                  </h1>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
              </div>
            ) : null}
            {changeQ === "Lesson 6" ? (
              <div className="flex flex-col items-start justify-start gap-12">
                <div>
                  <h1 className="text-xl md:text-[33px] text-start font-semibold text-main-color-1">
                    Negotiation skills and finding win-win solutions
                  </h1>
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Introduction
                  </h1>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
                <div className="w-full">
                  <img src={cu5} className="w-full h-[450px]" alt="" />
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Main features
                  </h1>
                  <ul className="text-[gray] text-sm mt-2 md:text-md list-disc px-5 flex flex-col items-start justify-start gap-1">
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>
                      Et facilisis nunc quam quam etiam donec pellentesque ut.
                    </li>
                    <li>
                      Nisl pellentesque at aliquam scelerisque non consequat
                      amet curabitur. Imperdiet habitant purus pulvinar diam.
                    </li>
                    <li>Molestie pharetra morbi eu odio volutpat.</li>
                    <li>
                      Cursus velit elit senectus auctor vitae tristique velit.
                    </li>
                    <li>
                      Feugiat consequat diam ipsum suspendisse vestibulum ipsum
                      malesuada.
                    </li>
                  </ul>
                </div>
                <div>
                  <img src={curriculum} alt="" />
                </div>
                <div>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px]">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
                <div>
                  <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
                    Lesson Summary
                  </h1>
                  <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
                    Lorem ipsum dolor sit amet consectetur. Et facilisis nunc
                    quam quam etiam donec pellentesque ut. Nisl pellentesque at
                    aliquam scelerisque non consequat amet curabitur. Imperdiet
                    habitant purus pulvinar diam. Molestie pharetra morbi eu
                    odio volutpat. Cursus velit elit senectus auctor vitae
                    tristique velit. Feugiat consequat diam ipsum suspendisse
                    vestibulum ipsum malesuada.
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      <div className="bg-main-color-3 py-14 md:pt-28 mt-14 md:mt-24">
        <div className="flex flex-col gap-2 px-5">
          <p className="font-medium text-sm">ONLINE LEARNING</p>
          <h1 className="text-[35px] font-medium">Related courses</h1>
        </div>
        <div className="px-5 grid mt-10 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
          {DevelopmentDetail.map((data) => (
            <div
              data-aos-delay="300"
              data-aos="fade-up"
              key={data.id}
              className="relative group h-[500px] w-[100%] cursor-pointer"
            >
              <img
                src={data.img}
                className="h-full object-cover rounded-md w-[100%]"
                alt=""
              />
              <div className="absolute rounded-md top-0 bottom-0 right-0 left-0 h-full w-full bg-gradient-to-t from-[#000000a2] from-50% to-[#ffffff00] to-9 0% ... flex flex-col justify-end items-start gap-3 pb-10 px-8">
                <span className="fixed left-5 top-5 border-l border-t lg:w-0 lg:h-0 duration-1000 overflow-hidden lg:group-hover:w-44 w-44 lg:group-hover:h-44 h-44"></span>
                <div className="absolute top-10 lg:group-hover:scale-125 duration-700 right-10 bg-[#254edb] text-white py-[24px] px-[22px] font-medium rounded-full">
                  {data.badge}
                </div>
                <div>
                  <h1 className="text-[#d0cccc] font-semibold text-sm">
                    {data.title}
                  </h1>
                </div>
                <div>
                  <p className="text-white font-semibold text-xl lg:text-2xl leading-7">
                    {data.desc}
                  </p>
                  <div className="flex gap-1 mt-2">
                    <img src={rate} alt="" />
                    <span className="text-sm text-[#a19e9e]">4.88 (210)</span>
                  </div>
                </div>
                <div className="w-full z-10 mt-5 lg:h-0 overflow-hidden lg:group-hover:h-14 duration-500">
                  <button className="bg-main-color-2 w-full py-3 rounded-md text-sm font-semibold hover:scale-95 duration-300">
                    Buy Course
                  </button>
                </div>
                <span className="fixed right-5 bottom-5 border-r border-b lg:w-0 lg:h-0 duration-1000 overflow-hidden lg:group-hover:w-44 w-44 lg:group-hover:h-44 h-44"></span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#00000052] relative mt-24 lg:px-5 xl:px-24 py-5 md:py-14 lg:py-36 flex w-[100%] gap-5 lg:gap-0 flex-col lg:flex-row items-center justify-center lg:items-center lg:justify-between">
          <img
            src={empl}
            className="absolute h-full w-full left-0 object-cover z-[1]"
            alt=""
          />
          <div className="w-[100%] z-10 text-center lg:text-start lg:w-[70%] xl:w-[35%]">
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-3xl text-white md:text-4xl font-semibold w-[100%]"
            >
              Are you ready to start your journey?
            </h1>
          </div>
          <div
            data-aos="fade-up"
            className="flex z-10 flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 w-[100%] lg:w-[80%] xl:w-[50%]"
          >
            <button className="bg-transparent border border-white text-sm md:text-base text-white w-[50%] sm:w-[30%] md:w-[auto] md:px-12 lg:px-10 xl:px-12 py-3 mt-2 font-medium rounded-md hover:scale-95 duration-300">
              Browse Courses
            </button>
            <button className="bg-main-color-2  text-sm md:text-base text-black w-[50%] sm:w-[30%] md:w-[auto] md:px-12 lg:px-10 xl:px-12 py-3 mt-2 font-medium rounded-md hover:scale-95 duration-300">
              Became A Teacher
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDev;
