import React from 'react'
import MyDiv3 from './MyDiv3'

export default function MyDiv2(probs) {
  return (
    <div className="flex flex-col justify-center items-center w-4/5 h-4/5 text-white bg-cyan-500 rounded-sm m-10 p-10">
        <p className="f w-full justify-start">{`${probs.dname1} > ${probs.dname2}`}</p>
        <MyDiv3 {...probs} />
    </div>
  )
}
