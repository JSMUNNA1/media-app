/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import menuKebab from "../../assets/menu-kebab.svg";
import { useDispatch } from "react-redux";
import { deletePost } from "../../Redux/Action";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export default function MenuKebab({ post }) {
  const dispatch = useDispatch();
  const [isshow, setIsShow] = useState(false);
  const dropdownRef = useRef(null);
  
  const navigator = useNavigate();
  const handleIsShow = () => {
    setIsShow((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShow(false);
      }
    };

    // Attach event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleDelete = () => {
    const { id } = post;
    dispatch(deletePost(id));
  };
  //handle Update Components
  const handleUpdate = () => {
    navigator("/update", { state: post });
  };

  return (
    <div>
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <div>
          <button
            onClick={handleIsShow}
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <img id="menukebab-123" src={menuKebab} alt="" />
            <Tooltip anchorSelect="#menukebab-123" place="bottom">
              more
            </Tooltip>
          </button>
        </div>

        {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
        {isshow && (
          <div
            className="absolute  right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {/* <!-- Active: "bg-gray-100 text-gray-900 outline-none", Not Active: "text-gray-700" --> */}
              <ul>
                <li
                  className="block px-4 cursor-pointer hover:bg-gray-300 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                  onClick={handleUpdate}
                >
                  Edit
                </li>
                <li
                  className="block px-4 py-2 cursor-pointer hover:text-red-500 hover:bg-gray-300 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                  onClick={handleDelete}
                >
                  Delete
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
