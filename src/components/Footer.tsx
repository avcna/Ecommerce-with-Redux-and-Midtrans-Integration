import React from "react";
import { TFooterApi } from "./Data/dataType";

interface IFooter {
  data: TFooterApi;
}

const Footer: React.FC<IFooter> = ({ data }) => {
  const { titles, links } = data;
  return (
    <div className="py-6 bg-theme text-white">
      <div className="grid grid-cols-3">
        {titles.map((title) => (
          <div className="font-bold text-[16px]">
            {title.title.toUpperCase()}
          </div>
        ))}
        {links.map((link) => (
          <div>
            {" "}
            {link.map((item) => (
              <p>{item.link}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
