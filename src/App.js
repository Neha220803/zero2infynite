import "./App.css";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import AllCoursesPage from "./pages/courses";
import Homepage from "./pages/homepage";
import FooterComp from "./components/footer/footer";
import EcCounsilPages from "./pages/EcCouncilPage";
import SimpleNavbar from "./components/nav/newNav";
import AboutUsPage from "./pages/aboutUsPage";
import InternshipPage from "./pages/internshipPage";
import ServicesPage from "./pages/servicesPage";
import BlogPage from "./pages/blogPage";
import IndividualCourses from "./pages/individualCourses";
import TestimonialPage from "./pages/testimonialPage";

function Layout() {
  return (
    <>
      <SimpleNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/all-courses" element={<AllCoursesPage />} />

        <Route path="/ec-council" element={<EcCounsilPages />} />
        <Route
          path="/ethical-hacking-training-in-chennai"
          element={<IndividualCourses courseType="CEH" />}
        />

        <Route
          path="/ec-council/chfi"
          element={<IndividualCourses courseType="CHFI" />}
        />

        <Route
          path="/ec-council/cnd"
          element={<IndividualCourses courseType="CND" />}
        />

        <Route path="/about" element={<AboutUsPage />} />

        <Route path="/internship" element={<InternshipPage />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/testimonial" element={<TestimonialPage />} />

        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
      {/* <WhatsappButtonsComp /> */}
      <FooterComp />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/zero2infynite">
      <Layout />
    </BrowserRouter>
  );
}

export default App;
