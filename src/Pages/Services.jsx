import React from "react";
import jsonData from "../json/services.json";
import Buttons from './../Snippets/Buttons';

function Services() {
  return (
    <section className="pt-[21px] md:pt-[35px] pb-[68px] sm:pb-[80px] md:pb-[100px]  lg:pb-[135px]">
      <div className="container">
        <div className="flex flex-col items-center gap-[46px] md:gap-[60px] lg:gap-[78px]">
          <div className="flex flex-col items-center gap-4 max-w-[411px] w-full text-center m-auto">
            <h2 className="text-[#74C69D] font-bold text-[16px] leading-5 tracking-[5px] text-center font-work uppercase">
              Plans
            </h2>
            <h3 className="text-black font-bold font-crimson text-[24px] md:text-[40px] leading-[30px] md:leading-[50px] ">
              Our Services
            </h3>
            <p className="font-normal text-black text-[20px] leading-[25px] font-work ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-between gap-y-[50px] gap-[15px] w-full">
            {jsonData.map((item, index) => (
              <div
                key={index}
                className="p-[46px_30px] m-auto rounded-[5px] max-w-[339px] w-full flex flex-col items-center shadow-[3px_4px_12px_1px_#00000040] transition-all duration-200 hover:shadow-[3px_4px_12px_1px_#74C69D] cursor-default"
              >
                <p className="text-[#000000] text-[15px] leading-[18.75px] font-work font-normal">
                  {item.title}
                </p>
                <div className="flex items-center gap-[9px] ">
                  <h3 className="text-[40px] leading-[50px] text-black font-bold font-work">
                    {item.price}
                  </h3>
                  <p className="text-[#000000] text-[15px] leading-[18.75px] font-normal font-work">
                    /month
                  </p>
                </div>
                <p className="text-[#21252980] text-[15px] leading-[18.75px] font-work font-normal mt-[10px] mb-[52px] text-center">
                  {item.p}
                </p>
                <div className="flex flex-col items-start gap-[11px] self-start mb-[45px]">
                  {item.services.map((i, index) => (
                    <div key={index} className="flex items-center gap-[11px]">
                      <img
                        src={require(`../assets/svg/tick-icon.svg`).default}
                        alt="tick"
                      />
                      <p className="text-[#212529] text-[15px] leading-[18.75px] font-work font-normal ">
                        {i}
                      </p>
                    </div>
                  ))}
                </div>
                <Buttons name="Learn More" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
