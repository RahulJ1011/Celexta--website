
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CoursesPage from "./pages/Courses";
import Lectures from "./pages/Lectures/Lectures";
import Congrats from "./pages/Lectures/Congrats";
import Certificate from "./pages/Lectures/Certificate";
// import About from "./pages/About/About";




const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Services />} />
            <Route path="/courses" element={<CoursesPage/>} />
            {/* <Route path="/about-us" element={<About />} /> */}
            <Route path="/contact-us" element={<Home />} />
            <Route path="/lecture" element={<Lectures />} />
            <Route path="/congrats" element={<Congrats />} />
            <Route path="/certificate" element={<Certificate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
