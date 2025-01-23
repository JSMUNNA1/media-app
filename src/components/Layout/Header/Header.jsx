import { useState } from "react";
import logo from "../../../assets/Header/Storefront.svg";
import menuIcon from "../../../assets/Header/icons8-menu.svg";
import closeIcon from "../../../assets/Header/icons8-close.svg";
import Button from "../../../assets/Components/Button";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Lock body scrolling when sidebar is open
  if (isSidebarOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="relative bg-primary-color text-white  z-50">
      {/* Main Navbar */}
      <div className="container flex justify-between items-center lg:w-[95%] min-h-28 mx-auto px-4 lg:px-0">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="cursor-pointer h-8 md:h-10" />
          <h2 className="text-xl font-bold cursor-pointer">NFT Marketplace</h2>
        </div>

        {/* Nav Links (Hidden on small screens) */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="cursor-pointer hover:text-orange-300">
            Marketplace
          </div>
          <div className="cursor-pointer hover:text-orange-300">Rankings</div>
          <div className="cursor-pointer hover:text-orange-300">
            Connect a wallet
          </div>
          <Button height={"h-[60px]"} width={"w-[120px]"}>
            Sign Up
          </Button>
        </div>

        {/* Menu Icon  */}
        <img
          src={menuIcon}
          className={`lg:hidden h-6 w-6 cursor-pointer`}
          alt="menu icon"
          onClick={() => setIsSidebarOpen(true)} // Open sidebar on click
        />
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicking outside
        ></div>
      )}

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 right-0 h-full bg-primary-color  w-72 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <img
            src={closeIcon}
            alt="Close"
            className="h-6 w-6 cursor-pointer"
            onClick={() => setIsSidebarOpen(false)} // Close sidebar on click
          />
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-4 p-4">
          <div className="cursor-pointer hover:text-orange-300">
            Marketplace
          </div>
          <div className="cursor-pointer hover:text-orange-300">Rankings</div>
          <div className="cursor-pointer hover:text-orange-300">
            Connect a wallet
          </div>
          <Button height={"h-[60px]"} width={"w-[120px]"}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
