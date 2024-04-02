import TailInputV2 from "../UI/TailInputV2" ;
import TailSelectV2 from "../UI/TailSelectV2";
import TailButton from "../UI/TailButton";
import getxy from "./getxy.json" ;

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Frcst() {
    const navigator = useNavigate();
  const ops = getxy.map(item => item['1단계']) ;

  const [x, setX] = useState();
  const [y, setY] = useState();
  const [dt, setDt] = useState();

  const dRef = useRef() ;
  const sRef = useRef() ;

  const handleDate = () => {
    console.log(dRef.current.value) ;
    setDt(dRef.current.value);
  }

  const handleArea = () => {
    if(sRef.current.value === '' || sRef.current.value === undefined) {
        alert('select date!')
    }
    let tm = getxy.filter(item => item['1단계'] === sRef.current.value) ;
    setX(tm[0]["격자 X"]) ;
    setY(tm[0]["격자 Y"]) ;
  }

  useEffect(() => {
    console.log(x, y)
  } , [x, y]) ;
  const handleUltra = () => {
    navigator(`/urtra/${dt}/${sRef.current.value}/${x}/${y}`)
  }
  const handleVilage = () => {
    navigator(`/vilage/${dt}/${sRef.current.value}/${x}/${y}`)
  }
  return (
    <div className="w-11/12 justify-start 
                    grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
      <div>
        <TailInputV2 type = "date"
                   inputRef = {dRef}
                   ph ="날짜선택"
                   handleChange ={handleDate}/>
      </div>
      <div>
        <TailSelectV2 ops = {ops}
                    opDefault = "---지역선택---"
                    selRef = {sRef}
                    handleSel = {handleArea} />
      </div>
      <div>
      <TailButton caption = "초단기예보"
                  color = "blue"
                  handleClick={handleUltra}/> 
      </div>
      <div>
      <TailButton caption = "단기예보"
                  color = "blue"
                  handleClick={handleVilage}/> 
      </div>
    </div>
  )
}