import React from "react";
import jsonData from "../json/partners.json";
import Buttons from "../Snippets/Buttons";

function Partners() {
  return (
    <section className="pt-[22px] sm:pt-[33px] md:pt-[45px] lg:pt-[60px] pb-[59.55px] sm:pb-[65px] lg:pb-[73px] lg:px-[10px]">
      <div className="container">
        <div className="flex flex-col items-center gap-[55px]">
          <div className="flex flex-col items-center gap-4 max-w-[411px] w-full text-center">
            <h2 className="text-[#74C69D] font-bold text-[16px] leading-5 tracking-[5px] text-center font-work uppercase">
              partners
            </h2>
            <h3 className="text-black font-bold font-crimson text-[24px] md:text-[40px] leading-[30px] md:leading-[50px] ">
              Lorem Ipsum Dolor
            </h3>
            <p className="font-normal text-black text-[20px] leading-[25px] font-work ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-10 sm:gap-4">
            {jsonData.map((item, index) => (
              <a key={index} href={item.link}>
                <img
                  src={require(`../assets/img/${item.img}`)}
                  alt={item.img}
                />
              </a>
            ))}
          </div>
          <Buttons name="Learn More" />
        </div>
      </div>
    </section>
  );
}

export default Partners;
