import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggelMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);
  return (
    <nav className=" bg-gray-800 text-white shadow-md">
      {/* Logo */}
      <div className="max-w-[1200px] mx-auto p-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold font-mono text-blue-600 z-20 ">
          Frontend<span className="text-white text-3xl">Blog</span>
        </Link>
        {!isOpen && (
          <div onClick={toggelMenu} className="cursor-pointer md:hidden">
            <GiHamburgerMenu size={30} />
          </div>
        )}
        {isOpen && (
          <div onClick={toggelMenu} className="cursor-pointer md:hidden z-20">
            <IoIosClose size={34} />
          </div>
        )}
        {isOpen ? (
          <div className="bg-black overflow-y-hidden fixed z-10 left-0 top-0 w-screen min-h-screen flex justify-center items-center flex-col gap-10 duration-300 ease-in">
            <ul >
              <li>
                <Link to="/"  onClick={() => setIsOpen(false)} className="text-white hover:text-blue-600 font-bold font-serif">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about"  onClick={() => setIsOpen(false)} className="text-white font-bold font-serif hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/addpost"  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-blue-600 font-serif font-bold"
                >
                  AddPost
                </Link>
              </li>
            </ul>
            <div>
              {/* CTA Button */}
              <Link
                to="/view-more"
                className="ml-2 px-4 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
              >
                View More
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white overflow-y-hidden fixed z-10 left-[-150%] top-0 w-screen min-h-screen flex justify-center items-center flex-col gap-10 duration-300 ease-in"></div>
        )}
        {/* Navigation + CTA */}
        <div className=" items-center gap-4 hidden md:flex">
          <ul className="flex gap-4 text-sm font-medium">
            <li>
              <Link to="/" className="text-white text-xl hover:text-blue-600 font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white  text-xl hover:text-blue-600 font-bold">
                About
              </Link>
            </li>
            <li>
              <Link to="/addpost" className="text-white  text-xl hover:text-blue-600 font-bold">
                Add Post
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex ">
          {/* CTA Button */}
          <Link
            to="/view-more"
            className="ml-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition"
          >
            View More
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
