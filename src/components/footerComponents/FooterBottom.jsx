import React from "react";
import { footerBottomItems } from "../../utils/constants";

const FooterBottom = () => {
  return (
    <div className="w-full bg-amazonClone py-8 pt-10">
      <div className="max-w-5xl m-auto p-5 ">
        <div className="w-full grid grid-cols-3 md:grid-cols-5 mdl:grid-cols-6 lgl:grid-cols-7 gap-4 place-content-center text-gray-400">
          {footerBottomItems.map((item) => (
            <div key={item._id}>
              <h3 className=" w-24 font-semibold text-sm xl:text-base mb-2 footerBottomHover">
                {item.title}
              </h3>
              <p className=" w-24 tracking-tight text-xs xl:text-sm text-[#999]  footerBottomHover ">
                {item.des}
              </p>
            </div>
          ))}
        </div>
        <div className="amazon-bg-light_blue text-gray-500 mt-20 divide-y divide-gray-400 m-auto">
          <div className=" flex flex-col text-center justify-end text-xs">
            <div>Conditions of Use Privacy Notice</div>
            <div>Your Ads Privacy Choices</div>
            <div> &copy; 1996-2023, Amazon.com, Inc. or its affiliates</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
