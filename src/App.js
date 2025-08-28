import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
import CompTIAPage from "./pages/all-courses-pages/CompTIAPage";
import IsacaPage from "./pages/all-courses-pages/IsacaPage";
import CustomCourse from "./pages/all-courses-pages/CustomCourse";
import CyberDiplomaPage from "./pages/all-courses-pages/CyberDiplomaPage";
import CloudPage from "./pages/all-courses-pages/CloudPage";
import ScrollToTop from "./components/scroll/ScrollToTop";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <SimpleNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/all-courses" element={<AllCoursesPage />} />

        <Route path="/ec-council" element={<EcCounsilPages />} />
        <Route path="/comptia" element={<CompTIAPage />} />
        <Route path="/isaca" element={<IsacaPage />} />
        <Route path="/cloud-computing" element={<CloudPage />} />
        <Route path="/z2i-cyber-diploma" element={<CyberDiplomaPage />} />
        <Route path="/z2i-custom-courses" element={<CustomCourse />} />

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

        <Route
          path="/ec-council/cpent"
          element={<IndividualCourses courseType="CPENT" />}
        />

        <Route
          path="/ec-council/ecih"
          element={<IndividualCourses courseType="ECIH" />}
        />

        <Route
          path="/ec-council/wahs"
          element={<IndividualCourses courseType="WAHS" />}
        />

        <Route
          path="/ec-council/case-java"
          element={<IndividualCourses courseType="CJAVA" />}
        />
        <Route
          path="/ec-council/case-net"
          element={<IndividualCourses courseType="CNET" />}
        />
        <Route
          path="/ec-council/ccse"
          element={<IndividualCourses courseType="CCSE" />}
        />
        <Route
          path="/ec-council/ecde"
          element={<IndividualCourses courseType="ECDE" />}
        />

        <Route
          path="/comptia/security-plus"
          element={<IndividualCourses courseType="Security" />}
        />

        <Route
          path="/isaca/cisa"
          element={<IndividualCourses courseType="CISA" />}
        />

        <Route path="/about" element={<AboutUsPage />} />

        <Route path="/internship" element={<InternshipPage />} />

        {/* <Route path="/services" element={<ServicesPage />} /> */}

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
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
