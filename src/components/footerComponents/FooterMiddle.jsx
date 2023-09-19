import React from "react";
import {FooterMiddleList} from "../index";
import { middleList } from "../../utils/constants";




const FooterMiddle = () => {
  return (
    <div className="w-full m-auto bg-amazonClone-light_blue text-white">

      {/* top section */}
      <div className="w-full border-b border-gray-500 p-10">
        <div className="text-gray-300 m-auto">
          <div className="w-full p-4 grid grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-4 gap-6 md:place-items-center md:items-start ">
            {middleList.map((item) => (
              <FooterMiddleList
                key={item._id}
                title={item.title}
                ListItem={item.ListItem}
              />
            ))}
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className="w-full flex gap-6 items-center justify-center py-6">
        <div>
          <img
            className="w-20 m-auto "
            src="../src/assets/images/amazon.png"
          />
        </div>
        <div className="border-[1px] border-gray-500  p-1 rounded hover:border-amazonClone-yellow">
          <p>English</p>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
