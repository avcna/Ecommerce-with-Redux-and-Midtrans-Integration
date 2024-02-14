import React from "react";
import { THighlight } from "./Data/dataType";

interface IHighlight {
  data: THighlight;
  className?: string;
}
const FlexContent: React.FC<IHighlight> = ({ data, className }) => {
  const { title, heading, text, img, url, btn } = data;
  return (
    <div className={`flex justify-between sm:flex-col m-[52px] ${className}`}>
      <div className="text-left w-[600px]">
        <h1 className="text-gradient text-4xl sm:text-3xl font-bold">
          {heading}
        </h1>
        <h1 className="text-5xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg">
          {title}
        </h1>
        <p>{text}</p>
        <a href={url} target="_BLANK">
          <button className="button-theme bg-slate-700 shadow-slate-700 text-white rounded-xl my-5">
            {btn}
          </button>
        </a>
      </div>
      <div className="px-[84px]">
        <img src={img} alt="" className="w-[500px]" />
      </div>
    </div>
  );
};

export default FlexContent;
