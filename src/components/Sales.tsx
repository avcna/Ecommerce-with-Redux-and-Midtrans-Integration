import React from "react";
import Title from "./utils/Title";
import Item from "./utils/Item";
import { TPopularSales } from "./Data/dataType";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItem } from "../app/CartSlice";

interface ISales {
  endpoint: TPopularSales;
  className: string;
}

const Sales: React.FC<ISales> = ({ endpoint, className }) => {
  const { title, items } = endpoint;
  const dispatch = useDispatch();
  const res = useSelector(selectCartItem);
  return (
    <>
      <div className="mx-[52px]">
        <Title title={title} />
        <div className={className}>
          {items?.map((item) => (
            <Item
              data={item}
              key={item.id}
              addToCart={() => {
                dispatch(addToCart(item));
                console.log(res);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
