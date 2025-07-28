import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddPost from "../pages/AddPost";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Navbar />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/addpost" element={<AddPost />} />
      <Footer />
    </Routes>
  );
};

export default AppRoutes;
