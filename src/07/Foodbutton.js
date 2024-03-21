import React from 'react'
import TailButton from '../06/UI/TailButton'

export default function Foodbutton() {
    const handleClick  = () => {};
  return (
    <div className="flex justify-center items-center">
      <TailButton caption="광역지원센터" color="sky" handleClick={handleClick}/>
      <TailButton caption="기초푸드뱅크" color="pink" handleClick={handleClick}/>
      <TailButton caption="기초푸드마켓" color="orange" handleClick={handleClick}/>
    </div>
  )
}
