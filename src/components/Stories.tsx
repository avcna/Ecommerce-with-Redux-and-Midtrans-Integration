import React from "react";
import { TStory } from "./Data/dataType";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";

interface IStory {
  data: TStory;
}

const Stories: React.FC<IStory> = ({ data }) => {
  const { title, news } = data;
  return (
    <div className="nike-container mb-11">
      <Title title={title} />
      <Splide
        options={{
          type: "loop",
          perPage: 4,
          perMove: 1,
          rewind: true,
          gap: "1rem",
          keyboard: "global",
          pagination: false,
          breakpoints: {
            1200: { perPage: 3 },
            991: { perPage: 2.3 },
            768: { perPage: 2 },
            500: { perPage: 1.3 },
            425: { perPage: 1 },
          },
        }}
      >
        {news.map((item, i) => (
          <SplideSlide
            key={i}
            className="mb-0.5 border border-2 rounded-lg text-[14px] overflow-hidden"
          >
            <div className="object-cover">
              <img src={item.img} alt="" className="w-full" />
              <div className="px-4 pt-4 pb-0 mb-0 text-justify">
                <div className="grid grid-cols-3">
                  <span className="text-[12px] font-semibold">
                    {" "}
                    <HeartIcon className="icon-style text-[#fa3b3b] inline" />
                    {item.like}
                  </span>
                  <span className="text-[12px] font-semibold">
                    <ClockIcon className="icon-style text-[#fa3b3b] inline" />
                    {item.time.slice(0, 7)}
                  </span>
                  <span className="text-[#4d8bff] text-[12px] font-semibold">
                    {" "}
                    <HashtagIcon className="icon-style text-[#4d8bff] inline" />
                    {item.by.slice(0, 6)}
                  </span>
                </div>
                <div className="m-0">
                  <h1>{item.title}</h1>
                  <p>{item.text.slice(0, 175)}...</p>
                  <button className="button-theme bg-slate-700  text-white rounded-lg my-5 w-full">
                    <a href={item.url}>{item.btn}</a>
                  </button>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Stories;
