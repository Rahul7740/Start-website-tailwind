import React from "react";
import jsonData from "../json/header.json";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#74C69D] pt-[17px]  md:pt-[25px] lg:pt-[35px] pb-8 md:pb-10">
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-[10px] md:gap-[18px]">
            <img
              className="w-[45px] md:w-auto h-[31.06px] md:h-auto"
              src={require(`../assets/svg/main-logo.svg`).default}
              alt="main-logo"
            />
            <h1 className="text-[30px] sm:text-[35px] lg:text-[40px] leading-[37.5px] sm:leading-[44px] lg:leading-[50px] text-white font-medium font-work ">
              Start
            </h1>
          </div>
          <ul className="hidden sm:flex items-center gap-[15px] md:gap-[30px]">
            {jsonData.map((item, index) => (
              <li key={index} className="">
                <NavLink
                  to={item.path}
                  className="text-white text-[20px] leading-[25px] font-work font-normal relative
                  before:content-[''] before:absolute before:bottom-[-1px] before:left-0 before:bg-white before:h-[1px] before:w-0 hover:before:w-full before:transition-all duration-200 menuLinks
                  "
                  activeClassName="active"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="block sm:hidden">
            <img
              src={require(`../assets/svg/menu-icon.svg`).default}
              alt="menu-icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
