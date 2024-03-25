import React from 'react'
import TailButton from '../UI/TailButton'

export default function TrafficNav({title, category, sel, setSel}) {
  const handelbtclick = (item) => {
    setSel(item)
  }
  const bts = category.map(item => 
    <TailButton caption={item} color={item === sel ? "pink" : "blue"} handleClick={() => handelbtclick(item)} />
    )

  return (
    <div className="flex w-11/12 justify-between items-center">
      <h1 className="text-xl font-bold"> Traffic Accident {title}</h1>
      <div>{bts}</div>
    </div>
  )
}
