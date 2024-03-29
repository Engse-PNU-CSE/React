import React from 'react'
import MyDiv2 from './MyDiv2';

export default function MyDiv1() {
    const dname1 = "div1";
    const dname2 = "div2";
    const dname3 = "div3";


  return (
    <div className="flex flex-col justify-center items-center w-2/3 h-2/3 text-white bg-cyan-700 rounded-sm m-10 p-10">
      <p className="flex w-full justify-start">{dname1}</p>
      <MyDiv2 dname1 = {dname1} dname2 = {dname2} dname3 = {dname3} />
    </div>
  )
}
