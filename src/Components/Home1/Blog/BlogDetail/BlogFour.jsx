import { NavLink } from "react-router-dom";
import quote from "../../../../assets/images/Home1/66cff274c1ce9bc0b1d47e56_Quote Icons.svg";
import empl from "../../../../assets/images/Home1/66d9685910e51570ad70d12e_Employ Images.webp";
import blog1 from "../../../../assets/images/Home1/bl4.jpg";
import { CategoryData6 } from "../../Categories/CategoryData";

function BlogFour() {
  return (
    <>
      <div className="flexrelative flex-col lg:flex-row md:order-2 xl:order-1 bg-blog4 bg-cover px-5 bg-no-repeat items-center justify-between md:gap-10 lg:gap-0 py-32 h-[585px]">
        <div className="flex flex-col gap-5 justify-center items-center px-5 w-full text-white absolute left-0 right-0 top-0 h-full bg-[#00000092]">
          <p className="text-white font-semibold">CAREER EDWARD BRAUN</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-5xl font-semibold w-[100%] md:w-[70%] lg:w-[60%]">
            The evolution of teaching tools in the 21st century
          </h1>
          <p className="text-white font-semibold">September 17, 2024</p>
        </div>
      </div>

      <div className="flex flex-col items-center w-full justify-center relative -top-20  md:-top-20">
        <div className="w-[97%] flex gap-12 flex-col shadow-xl bg-white rounded-md px-2 md:px-20 py-20">
          <div>
            <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px]">
              Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam
              quam etiam donec pellentesque ut. Nisl pellentesque at aliquam
              scelerisque non consequat amet curabitur. Imperdiet habitant purus
              pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus
              velit elit senectus auctor vitae tristique velit. Feugiat
              consequat diam ipsum suspendisse vestibulum ipsum malesuada.
            </p>
            <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-4">
              Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum
              pulvinar tempor tincidunt. Lorem mi velit rhoncus ipsum nisl et.
              Volutpat arcu id faucibus sit eget quis dui dui. Nisl sed
              ullamcorper at malesuada pellentesque enim amet pulvinar semper.
              Id lacus amet ornare justo justo venenatis quam. Condimentum lacus
              at augue tortor viverra dui. Turpis sed ut leo dignissim
              scelerisque.Adipiscing aliquam id aliquam lorem. Tempor ut nullam
              et amet. Sed nulla blandit tellus tincidunt aliquam odio amet sed
              interdum. Facilisis eget nullam ultrices elementum in congue id
              vestibulum. Pellentesque morbi est lobortis eget arcu curabitur.
              Tortor phasellus non in lacus turpis proin arcu mollis. Amet id
              nunc at ipsum adipiscing varius lacus tristique ante. Nibh
              habitant tellus turpis nec risus diam cursus convallis nec. Enim
              ut massa pellentesque viverra. ‍
            </p>
          </div>
          <div className="bg-main-color-3 flex flex-col md:flex-row py-10 w-[97%] px-8 gap-5 justify-center items-start">
            <img src={quote} alt="quote" className="w-20" />
            <p className="text-[#0e0d0d] text-sm md:text-[17px] w-[100%] leading-[27px]">
              Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam
              quam etiam donec pellentesque ut. Nisl pellentesque at aliquam
              scelerisque non consequat amet curabitur. Imperdiet habitant purus
              pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus
              velit elit senectus auctor vitae tristique velit. Feugiat
              consequat diam ipsum suspendisse vestibulum ipsum malesuada.
            </p>
          </div>
          <div>
            <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
              Integration of technology
            </h1>
            <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
              Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum
              pulvinar tempor tincidunt. Condimentum lacus at augue tortor
              viverra dui. Turpis sed ut leo dignissim scelerisque.Adipiscing
              aliquam id aliquam lorem. Tempor ut nullam et amet. Sed nulla
              blandit tellus tincidunt aliquam odio amet sed interdum. Facilisis
              eget nullam ultrices elementum in congue id vestibulum.
              Pellentesque morbi est lobortis eget arcu curabitur. Tortor
              phasellus non in lacus turpis proin arcu mollis. Amet id nunc at
              ipsum adipiscing varius lacus tristique ante. Nibh habitant tellus
              turpis nec risus diam cursus convallis nec. Enim ut massa
              pellentesque viverra.
            </p>
          </div>
          <div>
            <h1 className="text-xl md:text-[23px] font-semibold text-main-color-1">
              Collaboration and exchange between educational systems
            </h1>
            <p className="text-[gray] text-sm md:text-[17px] w-[96%] leading-[27px] mt-2">
              Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum
              pulvinar tempor tincidunt.Tempor ut nullam et amet. Sed nulla
              blandit tellus tincidunt aliquam odio amet sed interdum. Facilisis
              eget nullam ultrices elementum in congue id vestibulum.
              Pellentesque morbi est lobortis eget arcu curabitur. Tortor
              phasellus non in lacus turpis proin arcu mollis.
            </p>
          </div>
          <div className="bg-main-color-1 flex flex-col justify-center items-center md:flex-row py-10 w-[100%] md:w-[97%] px-5 md:px-20 gap-5 md:justify-center md:items-start">
            <img src={blog1} alt="quote" className="w-48 h-48 rounded-full" />
            <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2">
              <h1 className="text-white font-semibold">AUTHOR</h1>
              <h1 className="text-white font-semibold text-3xl">
                Nina Leffler
              </h1>
              <p className="text-[gray] text-center md:text-start text-sm md:text-[17px] leading-[27px]">
                Lorem ipsum dolor sit amet consectetur. Interdum mauris ac ipsum
                pulvinar tempor tincidunt.Tempor ut nullam et amet. Sed nulla
                blandit tellus tincidunt aliquam odio amet sed interdum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 justify-center items-center py-20">
        <div className="flex flex-col justify-center items-center gap-5">
          <p data-aos="fade-up" className="text-md font-[500]">
            MORE JOURNALS
          </p>
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-4xl font-semibold w-[95%] md:w-[600px] text-center"
          >
            Related blogs
          </h1>
          <div data-aos="fade-up" className="w-[65%] text-center">
            <p className="text-[gray] font-semibold">
              Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus
              tempus facilisis scelerisque vitae consectetur vitae. Amet
              faucibus venenatis donec mattis.
            </p>
          </div>
        </div>
      </div>
      <div className="grid mb-20 px-5 md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-5">
        {CategoryData6.map((data) => (
          <div
            key={data.id}
            className="relative shadow-lg group h-auto hover:shadow-boxShadow cursor-pointer duration-500 w-[90vw] md:w-[100%] lg:w-[100%] pb-5 bg-white flex flex-col gap-7"
          >
            <NavLink to={data.link}>
              <div className="overflow-hidden">
                <img
                  src={data.img}
                  className="w-full h-64 group-hover:scale-110 duration-1000"
                  alt=""
                />
              </div>
            </NavLink>
            <div className="px-5 flex flex-col gap-5">
              <p className="text-sm font-medium">{data.title}</p>
              <h1 className="text-[20px] sm:text-[20px] font-medium w-[100%] md:w-[90%]">
                {data.desc}
              </h1>
              <div className="flex gap-1">
                <span className="text-sm text-[#a19e9e]">4.88 (210)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#00000052] relative mt-5 lg:px-5 xl:px-24 py-5 md:py-14 lg:py-36 flex w-[100%] gap-5 lg:gap-0 flex-col lg:flex-row items-center justify-center lg:items-center lg:justify-between">
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

export default BlogFour;
