import React from "react";
import TailButton from "./UI/TailButton";
import TailBall from "./UI/TailBall";
import { useState } from "react";

export default function MyLotto() {
  const [currentlottos, setLottos] = useState();
  const handleClick = () => {
    let lottos = new Set();
    while (lottos.size < 7) {
      lottos.add(Math.floor(Math.random() * 45 + 1));
    }
      const mkLottos = [...lottos];
      const mk1 = mkLottos.splice(0, 6).sort(function(a, b){
        return a < b ? -1 : a > b ? 1 : 0
      })
      const bns = mkLottos
      mk1.push(bns)
      setLottos(mk1);
  };
  const tm = currentlottos.map((item, idx) => {
    if(idx === 5) return <><TailBall n = {item} key={`ball ${item}`} /><div className="text-2xl font-bold">+</div></>
    return <><TailBall n = {item} key={`ball ${item}`} /></>
  })
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-row justify-center items-center">
        {tm}
      </div>
      <div>
        <TailButton caption="Make Lotto" color="sky" handleClick={handleClick} />
      </div>
    </div>
  );
}
