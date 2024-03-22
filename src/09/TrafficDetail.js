import React, { useState } from 'react'
import { useEffect } from 'react';

export default function TrafficDetail({detail}) {
    const[info, setinfo] = useState();

    useEffect(() => {
        if(!detail) return
        const keyArr = ['사고건수', "사망자수", "중상자수", "경상자수", "부상신고자수"]
        let tm = keyArr.map( k => 
            <div className="bg-white rounded flex flex-row items-center justify-between">
                <div className="bg-sky-300">{k}</div>
                <div className="pr-3">{detail[k]}</div>
            </div>);
        setinfo(tm)
     },[detail])
  return (
    <div className="grid w-10/12 grid-cols-5 md:grid-cols-15 bg-cyan-100 gap-2 m-1 p-1 items-center justify-center">{info}</div>
  )
}
