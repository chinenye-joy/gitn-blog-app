import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddPost from "../pages/AddPost";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/add-post" element={<AddPost />} />
    </Routes>
  );
};

export default AppRoutes;
