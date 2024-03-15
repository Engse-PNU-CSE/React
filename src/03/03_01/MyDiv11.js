import React from 'react'
import MyDiv22 from './MyDiv22';

export default function MyDiv11() {
    const dname1 = "div11";
    const dname2 = "div22";
    const dname3 = "div33";


  return (
    <div className="flex flex-col justify-center items-center w-2/3 h-2/3 text-white bg-cyan-700 rounded-sm m-10 p-10">
      <p className="flex w-full justify-start">{dname1}</p>
      <MyDiv22 dname1 = {dname1} dname2 = {dname2} dname3 = {dname3} />
    </div>
  )
}
