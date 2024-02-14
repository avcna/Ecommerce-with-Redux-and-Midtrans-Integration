import React from "react";
import { TStory } from "./Data/dataType";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { ClockIcon, HeartIcon } from "@heroicons/react/24/solid";

interface IStory {
  data: TStory;
}

const Stories: React.FC<IStory> = ({ data }) => {
  const { title, news } = data;
  return (
    <div className="nike-container mb-11">
      <Title title={title} />
      <Splide>
        {news.map((news, i) => (
          <SplideSlide key={i} className="mb-0.5">
            <div>
              <img src={news.img} alt="" className="w-[100px]" />
              <div className="flex">
                <HeartIcon className="icon-style text-[#fa3b3b]" />{" "}
                <span>{news.like}</span>
                <ClockIcon className="icon-style text-[#fa3b3b]"/>
                <span>{news.by}</span>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Stories;
