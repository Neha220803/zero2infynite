import "./App.css";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import AllCoursesPage from "./pages/courses";
import Homepage from "./pages/homepage";
import FooterComp from "./components/footer/footer";
import EcCounsilPages from "./pages/EcCouncilPage";
import SimpleNavbar from "./components/nav/newNav";

function Layout() {
  return (
    <>
      <SimpleNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/all-courses" element={<AllCoursesPage />} />

        <Route path="/ec-council" element={<EcCounsilPages />} />
      </Routes>
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
