import React from "react";
import Title from "./utils/Title";
import Item from "./utils/Item";
import { TPopularSales } from "./Data/dataType";

interface ISales {
  endpoint: TPopularSales;
  className: string;
}

const Sales: React.FC<ISales> = ({ endpoint, className }) => {
  const { title, items } = endpoint;
  return (
    <>
      <div className="mx-[24px]">
        <Title title={title} />
        <div className={className}>
          {items?.map((item) => <Item data={item} key={item.id} />)}
        </div>
      </div>
    </>
  );
};

export default Sales;
