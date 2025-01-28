import { useState } from "react";
import logo from "../../../assets/Header/Storefront.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigator = useNavigate();

  const handleLikePage = () => {
    navigator("/like");
  };
  const handleHomePage = () => {
    navigator("/");
  };
  const handleCreatePost = () => {
    navigator("/create");
  };
  const handleShowPost = () => {
    navigator("/showposts");
  };
  const handleunLikePost = () => {
    navigator("/unlike");
  };
  return (
    <div className="relative bg-primary-color text-white z-50">
      {/* Header Section */}
      <div className="container flex justify-between items-center lg:w-[95%] min-h-28 mx-auto px-4 lg:px-0">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="cursor-pointer h-8 md:h-10" />
          <h2 className="text-xl font-bold cursor-pointer">Media</h2>
        </div>

        {/* Dropdown Menu */}
        <div className="relative">
          <div
            className="cursor-pointer flex items-center space-x-2 hover:text-orange-300"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <span>Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Dropdown Items */}
          {isDropdownOpen && (
            <div className="absolute top-10 right-0 bg-primary-color shadow-lg rounded-md text-white z-50">
              <div className="p-4">
                <ul>
                  <li
                    onClick={handleLikePage}
                    className=" cursor-pointer hover:text-orange-300"
                  >
                    LikedPost
                  </li>
                  <li
                    onClick={handleHomePage}
                    className=" cursor-pointer hover:text-orange-300"
                  >
                    home
                  </li>
                  <li
                    onClick={handleCreatePost}
                    className=" cursor-pointer hover:text-orange-300"
                  >
                    CreatePost
                  </li>
                  <li
                    className=" cursor-pointer hover:text-orange-300"
                    onClick={handleShowPost}
                  >
                    ShowPosts
                  </li>
                  <li
                    className=" cursor-pointer hover:text-orange-300"
                    onClick={handleunLikePost}
                  >
                    unLikePost
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
