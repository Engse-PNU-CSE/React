import fdata from "./fooddata.json";
import FoodCard from "./FoodCard.js";
import { useState } from "react";
import TailButton from "../UI/TailButton.js"
export default function FoodMain() {
  const [isClick, setIsClick] = useState("");
  const handleList = (citem) => {
    setIsClick(citem);
  };
  const SELECTITEM = "시군구";
  let c1 = fdata.map((item) => item[SELECTITEM]);
  c1 = new Set(c1);
  c1 = [...c1];
  const c1bts = c1.map((item) => (
    <TailButton
      caption={item}
      color="sky"
      handleClick={() => {
        handleList(item);
      }}
      key={item}
    />
  ));
  const cards = fdata.map((item) =>
    item[SELECTITEM] == isClick ? (
      <FoodCard fobj={item} key={item["사업장명"]} />
    ) : (
      ""
    )
  );
  return (
    <div className="flex flex-col justify-center items-center m-5 p-5">
      <div className="grid grid-cols-3
                        md:grid-cols-6
                        xl:grid-cols-10
                        gap-2 m-5 p-5">{c1bts}</div>
      <div
        className="w-10/12 grid grid-cols-1
                        md:grid-cols-2
                        xl:grid-cols-3
                        gap-2 m-5 p-5"
      >
        {cards}
      </div>
    </div>
  );
}
