import React from "react";


const FooterMiddleList = ({title, ListItem}) => {
  return (
    <div className="w-full ">
      <h3 className="text-white text-base font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 ">
        {
          ListItem.map((item) => (item.ListData.map((data, i) => 
          <li key={i} className="footerHover">{data}</li>
          )))
          }
      </ul>
    </div>
  );
};

export default FooterMiddleList;
