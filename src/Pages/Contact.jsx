import React from "react";
import jsonData from "../json/contects.json";
import Buttons from "../Snippets/Buttons";

function Contact() {
  return (
    <section className="pt-[36px] md:pt-[30px] pb-[59px] sm:pb-[75px] lg:pb-[93px]">
      <div className="container">
        <div className="flex flex-col items-center gap-[45px] md:gap-[67px]">
          <div className="flex flex-col items-center gap-4 max-w-[411px] w-full text-center m-auto">
            <h3 className="text-black font-bold font-crimson text-[24px] md:text-[40px] leading-[30px] md:leading-[50px] ">
              Contact Us
            </h3>
            <p className="font-normal text-black text-[20px] leading-[25px] font-work ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-[21px]">
            <form className="flex flex-col gap-[21px]">
              {jsonData.map((item, index) => (
                <div key={index} className="flex flex-col items-start gap-4">
                  <label
                    className="font-normal text-black text-[20px] leading-[25px] font-work"
                    htmlFor={index}
                  >
                    {item.label}
                  </label>
                  <input
                    className="bg-[#EEEEEE] hover:border-[#51da97] transition-all text-[#2e5542] border-[1px] border-solid border-[#000000] w-full rounded-[5px] p-[6px_15px] focus:border-[#74C69D] focus:shadow-[2px_3px_12px_1px_#74c69d73]"
                    type={item.type || "text"}
                    id={index}
                    required
                  />
                </div>
              ))}
              <div className="flex flex-col items-start gap-4">
                <label
                  className="font-normal text-black text-[20px] leading-[25px] font-work"
                  htmlFor="text"
                >
                  Message
                </label>

                <textarea
                  name="message"
                  className="bg-[#EEEEEE] outline-0 hover:border-[#51da97] transition-all text-[#2e5542] border-[1px] border-solid border-[#000000] w-full rounded-[5px] p-[6px_15px] focus:border-[#74C69D] focus:shadow-[2px_3px_12px_1px_#74c69d73]"
                  id="text"
                  rows="2"
                ></textarea>
              </div>
              <Buttons name="Submit" type="submit" />
            </form>
            <img className="row-start-1 md:col-start-2" src={require(`../assets/img/contact-map.png`)} alt="map" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
