import React from "react";
import { TFooterApi } from "./Data/dataType";

interface IFooter {
  data: TFooterApi;
}

const Footer: React.FC<IFooter> = ({ data }) => {
  const { titles, links } = data;
  return (
    <div className="py-[50px] bg-theme text-white">
      <div className="grid grid-cols-3 justify-items-center">
        {titles.map((title, i) => (
          <div className="font-bold text-[16px]" key={i}>
            <p>{title.title.toUpperCase()}</p>
          </div>
        ))}
        {links.map((link, i) => (
          <div key={i}>
            {link.map((item, i) => (
              <p key={i} className="text-center hover:text-[#e7e7e7] cursor-pointer">{item.link}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
