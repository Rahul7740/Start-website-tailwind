import React from "react";
import jsonData from "../json/portFolio.json"
import Buttons from './../Snippets/Buttons';

function Portfolio() {
  return (
    <section className="pt-[34px] sm:pt-[30px] pb-[30px] sm:pb-[50px] md:pb-[70px] lg-[99px]">
      <div className="container">
        <div className="flex flex-col items-center gap-[27px] sm:gap-[40px]   lg:gap-[64px]">
          <div className="flex flex-col items-center gap-4 max-w-[411px] w-full text-center m-auto">
            <h2 className="text-[#74C69D] font-bold text-[16px] leading-5 tracking-[5px] text-center font-work uppercase">
              Works
            </h2>
            <h3 className="text-black font-bold font-crimson text-[24px] md:text-[40px] leading-[30px] md:leading-[50px] ">
              Portfolio
            </h3>
            <p className="font-normal text-black text-[20px] leading-[25px] font-work ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="mt-[18px] grid grid-cols-1 sm:grid-cols-2 w-full gap-[55px] sm:gap-[30px] lg:gap-[55px] items-center justify-between">
            {jsonData.map((item,index)=>(
              <div key={index} className="transition-all w-full duration-200 hover:shadow-[3px_4px_20px_5px_#74C69D] cursor-pointer">
                <img className="w-full h-full" src={require(`../assets/img/${item.img}`)} alt="projects" />
              </div>
            ))}
          </div>
          <Buttons name="Learn More" />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
