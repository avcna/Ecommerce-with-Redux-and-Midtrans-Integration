import React from "react";
import Title from "./utils/Title";
import Item from "./utils/Item";
import { TPopularSales } from "./Data/dataType";

interface ISales {
  endpoint: TPopularSales;
}
const Sales: React.FC<ISales> = ({ endpoint }) => {
  const { title, items } = endpoint;
  return (
    <>
      <div className="mx-[24px]">
        <Title title={title} />
        <div className="flex flex-col gap-y-12">
          {items?.map((item, i) => <Item data={item} key={i} />)}
        </div>
      </div>
    </>
  );
};

export default Sales;
