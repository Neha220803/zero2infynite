import "./App.css";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import AllCoursesPage from "./pages/courses";
import Homepage from "./pages/homepage";

function Layout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/all-courses" element={<AllCoursesPage />} />
      </Routes>
      {/* Show Footer only if not on specified Landing Pages */}
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
