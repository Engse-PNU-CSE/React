import React from "react";
import TailButton from "../06/UI/TailButton";
import bank from "./img/bank.png";
import busan from "./img/busan.png";
import market from "./img/market.png";
import fdlist from "./fooddata.json";

export default function Foodcard() {
    let lstBusan = []
    let lstMarket = []
    let lstBank = []
    fdlist.map(name => {
        name.구분 == "광역지원센터" ? lstBusan.push(name) : name.구분 == "기초푸드뱅크" ? lstBank.push(name) : lstMarket.push(name)
    });

    const foodlist = fdlist.map((item) => (
        <div className="flex bg-white">
          <img
            src={
              item.구분 === "광역지원센터"
                ? busan
                : item.구분 === "기초푸드뱅크"
                ? bank
                : market
            }
            alt="title"
            className="rounded"
          />
          <div className="ml-2 w-4/6 flex flex-col justify-center">
            <h1 className="text-2xl">{item.사업장명}</h1>
            <p className="text-sm">{item.구분}</p>
            <p className="text-sm">{item["사업장 소재지"]}</p>
            <p className="text-sm">{item["연락처(대표번호)"]}</p>
          </div>
        </div>
      ));
  return {foodlist};
}
