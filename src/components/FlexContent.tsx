import React from "react";
import { THighlight } from "./Data/dataType";

interface IHighlight {
  data: THighlight;
  className?: string;
}
const FlexContent: React.FC<IHighlight> = ({ data, className }) => {
  const { title, heading, text, img, url, btn } = data;
  return (
    <div className={`flex justify-between md:flex-col sm:flex-col xsm:flex-col m-[52px] box-border items-center gap-y-6 ${className}`}>
      <div className="text-left">
        <h1 className="text-gradient text-4xl sm:text-3xl xsm:text-2xl font-bold">
          {heading}
        </h1>
        <h1 className="text-5xl md:text-3xl sm:text-2xl xsm:text-xl font-bold text-slate-900 filter drop-shadow-lg">
          {title}
        </h1>
        <p className="text-wrap sm:text-sm xsm:text-sm">{text}</p>
        <a href={url} target="_BLANK">
          <button className="button-theme bg-slate-700 shadow-slate-700 text-white rounded-xl my-5 sm:text-sm xsm:text-sm">
            {btn}
          </button>
        </a>
      </div>
      <div className="px-[84px] md:px-[52px] sm:px-[40px] xsm:px-0">
        <img src={img} alt="" className="w-[600px] md:w-[400px] sm:w-[300px] xsm:w-[200px]" />
      </div>
    </div>
  );
};

export default FlexContent;
