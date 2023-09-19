import React, {  useState } from "react";
import {Bars3Icon, XMarkIcon , UserCircleIcon } from "@heroicons/react/24/outline";
import {SideNavContent} from "../index";


const HeaderBottom = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      {/* LIST ITEMS START */}

      <ul className="flex items-center gap-3 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="headerHover flex items-center space-x-2"
        >
          <Bars3Icon className="h-6" />
          All
        </li>
        <li className="headerHover hidden md:inline-flex">Today's Deal</li>
        <li className="headerHover hidden md:inline-flex">Customer Service</li>
        <li className="headerHover hidden md:inline-flex">Gift Cards</li>
        <li className="headerHover hidden md:inline-flex">Registry</li>
        <li className="headerHover hidden md:inline-flex">Sell</li>
      </ul>

      {/* LIST ITEM END  */}
      {/* SIDE NAV START  */}

      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazonClone-light_blue bg-opacity-50 ">
          <div className="w-full h-full relative">
            <div className="w-[350px] h-full bg-white border border-black ">
              <div className="w-full bg-amazonClone-light_blue text-white py-2 px-6 flex items-center gap-4 ">
                <UserCircleIcon className="h-9" />

                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </div>
              <div className="h-full overflow-y-scroll overflow-x-hidden">
                <SideNavContent
                  title="Digital Content & Devices"
                  one="Amazon Music"
                  two="Kindle E-readers & Books"
                  three="Amazon App Store"
                />

                <SideNavContent
                  title="Shop By Department"
                  one="Electronics"
                  two="Computers"
                  three="Smart Home"
                />

                <SideNavContent
                  title="Help & Settings"
                  one="Your Account"
                  two="Customer Services"
                  three="Contact Us"
                />

                <SideNavContent
                  title="Programs & Features"
                  one="Gift Cards"
                  two="Amazon Live"
                  three="International Shopping"
                />
              </div>
              <span
                onClick={() => setSidebar(false)}
                className="cursor-pointer absolute top-1  left-[355px] text-white  flex items-center justify-center duration-300"
              >
                <XMarkIcon className="h-9 bg-white text-black" />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* SIDE NAV END  */}
    </div>
  );
};

export default HeaderBottom;
