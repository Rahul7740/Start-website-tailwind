import React from "react";
import Buttons from "../Snippets/Buttons";

function SecondBanner() {
  return (
    <section className="pb-[40.13px] sm:pb-[65px] lg:pb-[80px] xl:pb-[102.27px]">
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-2 xl:flex xl:flex-row items-center justify-between gap-[30px] pb-[60.12px] sm:pb-[65px] lg:pb-[73.57px]">
          <img src={require(`../assets/img/second-banner.png`)} alt="banner" />
          <div className="md:max-w-[470px] w-full flex flex-col items-start gap-4">
            <h3 className="text-black font-bold font-crimson text-[24px] md:text-[40px] leading-[30px] md:leading-[50px] ">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p className="text-[#21252980] text-[15px] font-work leading-[18.75px] font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
            <Buttons name="Learn More" />
          </div>
        </div>

        <div className="flex flex-col-reverse md:grid grid-cols-2 xl:flex xl:flex-row items-center justify-between gap-[30px]">
          <div className="md:max-w-[470px] w-full flex flex-col items-start gap-4">
            <h3 className="text-black font-bold font-crimson text-[24px] md:text-[40px] leading-[30px] md:leading-[50px] ">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <p className="text-[#21252980] text-[15px] font-work leading-[18.75px] font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
            <Buttons name="Learn More" />
          </div>
          <img src={require(`../assets/img/third-banner.png`)} alt="banner" />
        </div>
      </div>
    </section>
  );
}

export default SecondBanner;
