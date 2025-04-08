import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Home1/Navbar/Navbar";
import Footer from "./Components/Home1/Footer/Footer";
import Footer2 from "./Components/Home1/Footer/Footer2";
import About from "./Components/Home1/About/About.jsx";
import Course from "./Components/Home1/Course/Course.jsx";
import FAQs from "./Components/Home1/FAQ/FAQs.jsx";
import Pricing from "./Components/Home1/Pricing/Pricing.jsx";
import Career from "./Components/Home1/Career/Career.jsx";
import Events from "./Components/Home1/Events/Events.jsx";
import Team from "./Components/Home1/Team/Team.jsx";
import Blog from "./Components/Home1/Blog/Blog.jsx";
import Contact from "./Components/Home1/Contact/Contact.jsx";
import Login from "./Components/Home1/Login/Login.jsx";
import Signup from "./Components/Home1/Signup/Signup.jsx";
import Design from "./Components/Home1/Categories/CategoriesDetail/Design.jsx";
import Finance from "./Components/Home1/Categories/Finance/Finance.jsx";
import Development from "./Components/Home1/Categories/Development/Development.jsx";
import Management from "./Components/Home1/Course/CourseDetails/Management/Management.jsx";
import CourseDesign from "./Components/Home1/Course/CourseDetails/CourseDesign/CourseDesign.jsx";
import CourseFin from "./Components/Home1/Course/CourseDetails/CourseFin/CourseFin.jsx";
import ScrollToTop from "./Components/Home1/ScrollToTop/ScrollToTop.jsx";
import DeniedPage from "./Components/Home1/DeniedPage/DeniedPage.jsx";
import CourseDev from "./Components/Home1/Course/CourseDetails/CourseDev/CourseDev.jsx";
import BlogOne from "./Components/Home1/Blog/BlogDetail/BlogOne.jsx";
import BlogTwo from "./Components/Home1/Blog/BlogDetail/BlogTwo.jsx";
import BlogThree from "./Components/Home1/Blog/BlogDetail/BlogThree.jsx";
import BlogFour from "./Components/Home1/Blog/BlogDetail/BlogFour.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <App />
            <Footer />
          </>
        }
      />
      <Route
        path="about"
        element={
          <>
            <About />
            <Footer2 />
          </>
        }
      />
      <Route
        path="course"
        element={
          <>
            <Course />
            <Footer />
          </>
        }
      />
      <Route
        path="faq"
        element={
          <>
            <FAQs />
            <Footer2 />
          </>
        }
      />
      <Route
        path="pricing"
        element={
          <>
            <Pricing />
            <Footer2 />
          </>
        }
      />
      <Route
        path="event"
        element={
          <>
            <Events />
            <Footer />
          </>
        }
      />
      <Route
        path="career"
        element={
          <>
            <Career />
            <Footer2 />
          </>
        }
      />
      <Route
        path="team"
        element={
          <>
            <Team />
            <Footer2 />
          </>
        }
      />
      <Route
        path="blog"
        element={
          <>
            <Blog />
            <Footer2 />
          </>
        }
      />
      <Route
        path="contact"
        element={
          <>
            <Contact />
            <Footer />
          </>
        }
      />
      <Route
        path="category/design"
        element={
          <>
            <Design />
            <Footer2 />
          </>
        }
      />
      <Route
        path="category/finance"
        element={
          <>
            <Finance />
            <Footer2 />
          </>
        }
      />
      <Route
        path="category/development"
        element={
          <>
            <Development />
            <Footer2 />
          </>
        }
      />
      <Route
        path="course/management"
        element={
          <>
            <Management />
            <Footer2 />
          </>
        }
      />
      <Route
        path="course/design"
        element={
          <>
            <CourseDesign />
            <Footer2 />
          </>
        }
      />
      <Route
        path="course/finance"
        element={
          <>
            <CourseFin />
            <Footer2 />
          </>
        }
      />
      <Route
        path="course/development"
        element={
          <>
            <CourseDev />
            <Footer2 />
          </>
        }
      />
      <Route
        path="blog/blog1"
        element={
          <>
            <BlogOne />
            <Footer2 />
          </>
        }
      />
      <Route
        path="blog/blog2"
        element={
          <>
            <BlogTwo />
            <Footer2 />
          </>
        }
      />
      <Route
        path="blog/blog3"
        element={
          <>
            <BlogThree />
            <Footer2 />
          </>
        }
      />
      <Route
        path="blog/blog4"
        element={
          <>
            <BlogFour />
            <Footer2 />
          </>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="denied" element={<DeniedPage />} />
    </Routes>
  </BrowserRouter>
);
