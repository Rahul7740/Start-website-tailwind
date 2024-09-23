import React from "react";
import jsonData from "../json/footer.json"

function Footer() {
  return (
    <footer className="bg-[#74C69D] py-[31px] sm:py-[40px] lg:py-[50px]">
      <div className="container">
        <div className="flex items-center flex-col md:flex-row justify-between gap-5">
          <div className="flex items-center gap-5">
            {
              jsonData.map((item,index)=>(
                <a key={index} href={item.link}>
                  <img src={require(`../assets/svg/${item.img}`)} alt="social-media" />
                </a>
              ))
            }
          </div>
          <p className="font-normal text-white text-[20px] leading-[25px] font-work ">
            © Start, 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
