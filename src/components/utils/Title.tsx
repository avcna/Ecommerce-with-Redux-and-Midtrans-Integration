import React from "react";
interface ITitle {
  title: string;
}

const Title: React.FC<ITitle> = ({ title }) => {
  return (
    <h1 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg mt-[100px] mb-[48px] text-left">
      {title}
    </h1>
  );
};

export default Title;
