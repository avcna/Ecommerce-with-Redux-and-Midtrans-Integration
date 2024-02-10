import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { TItems } from "../Data/dataType";

interface IItems {
  data: TItems;
}

const Item: React.FC<IItems> = ({ data }) => {
  const { id, color, shadow, title, text, img, btn, rating, price } = data;
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center rounded-[24px] h-[350px]`}
      >
        <div className="grid items-center grid-cols-2">
          <div className="order-last md:order-first flex flex-col">
            <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
              {title}
            </h1>
            <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
              {text}
            </p>

            <h1 className="">${price}</h1>

            <p>
              <StarIcon className="icon-style text-slate-900 inline" />
              {rating}
            </p>

            <button type="button" className="flex justify-center">
              <ShoppingBagIcon className="icon-style text-slate-900 " />
              {btn}
            </button>
          </div>

          <div>
            <img src={img} alt="img/item-img" className="w-[500px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
