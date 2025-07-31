import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddPost from "../pages/AddPost";
import Post from "../pages/Post";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
