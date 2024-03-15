import React from 'react'

export default function MyDiv33(probs) {
  return (
    <div className="flex flex-col justify-center items-center w-4/5 h-4/5 text-white bg-cyan-300 rounded-sm m-10 p-10">
        <p className="f w-full justify-start">{`${probs.dname1} > ${probs.dname2} > ${probs.dname3}`}</p>
    </div>
  )
}
