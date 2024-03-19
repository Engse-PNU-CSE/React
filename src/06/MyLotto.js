import React from 'react'
import TailButton from './UI/TailButton'

export default function MyLotto() {
    const handleLottoClick = () => {
        console.log("click")
    }
  return (
    <div>
        <TailButton caption = 'makelotto' handleClick = {handleLottoClick} color = "sky"/>
        <TailButton caption = 'button' handleClick = {handleLottoClick} />
    </div>
  )
}
