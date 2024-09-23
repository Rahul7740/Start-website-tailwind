import React from "react";
import jsonData from "../json/team.json";
import Buttons from "../Snippets/Buttons";

function Team() {
  return (
    <section className=" pb-[39px] sm:pb-[46px] lg:pb-[54px] ">
      <div className="container">
        <div className="flex flex-col items-center gap-[43px] md:gap-[45px]">
          <div className="flex flex-col items-center gap-4 max-w-[411px] w-full text-center">
            <h2 className="text-[#74C69D] font-bold text-[16px] leading-5 tracking-[5px] text-center font-work uppercase">
              team
            </h2>
            <h3 className="text-black font-bold font-crimson text-[24px] md:text-[40px] leading-[30px] md:leading-[50px] ">
              Our Talents
            </h3>
            <p className="font-normal text-black text-[20px] leading-[25px] font-work ">
              Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos,
              ab,
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-between gap-[30px] md:gap-[20px] w-full">
            {jsonData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-[19px] px-[39px] pt-5 pb-[19px] shadow-[3px_4px_12px_1px_#00000040] bg-white md:max-w-[252px] w-full rounded"
              >
                <img src={require(`../assets/img/${item.img}`)} alt="team" />
                <div className="flex flex-col items-start gap-[17px] min-w-[202px] w-full">
                  <h3 className="font-bold text-[#212529] text-[24px] leading-[32px] text-crimson ">{item.name}</h3>
                  <p className="text-[#212529BF] text-[15px] leading-[18.75px] font-normal">{item.course}</p>
                </div>
              </div>
            ))}
          </div>
          <Buttons name="View Team" />
        </div>
      </div>
    </section>
  );
}

export default Team;
