import React from 'react'
import MyDiv3 from './MyDiv3'

export default function MyDiv2({dname1, dname2, dname3}) {
  return (
    <div className="flex flex-col justify-center items-center w-4/5 h-4/5 text-white bg-cyan-500 rounded-sm m-10 p-10">
        <p className="f w-full justify-start">{dname1} {'>'} {dname2}</p>
        <MyDiv3 dname1 = {dname1} dname2 = {dname2} dname3 = {dname3} />
    </div>
  )
}
