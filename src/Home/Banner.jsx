import React from "react";
import Buttons from "../Snippets/Buttons"

function Banner() {
  return (
    <section className="bg-[#74C69D] pb-[40.39px] sm:pb-[60px] lg:pb-[82.87px]">
      <div className="container">
        <div className="flex flex-col-reverse md:grid grid-cols-2 xl:flex xl:flex-row items-center justify-between gap-[30px]">
          <div className="flex flex-col items-start gap-[15px] md:max-w-[416px] w-full">
            <h4 className="text-white font-bold text-[16px] leading-5 font-work">WELCOME</h4>
            <h2 className="text-white font-bold text-[28px] sm:[34px] lg:text-[40px] leading-[35px] md:leading-[50px] font-crimson">Lorem ipsum dolor sit amet consectetur </h2>
            <p className="text-[#FFFFFFBF] text-[15px] leading-[18.75px] font-normal mb-[10px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
            <Buttons name="Learn More" bg="bg-white" color="text-[#000000]" />
          </div>
          <img src={require(`../assets/img/banner.png`)} alt="banner" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
