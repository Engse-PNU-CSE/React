import React from 'react'

export default function TailButton({caption, color, handleClick}) {
    const colorObj = {
      'sky' : 'bg-sky-600', 
      'pink' : 'bg-pink-400', 
      'blue' : 'bg-blue-600',
      'orange' : 'bg-orange-600'
    }
    const hoverObj = {
      'sky' : 'hover:bg-sky-500', 
      'pink' : 'hover:bg-pink-300', 
      'blue' : 'hover:bg-blue-500',
      'orange' : 'hover:bg-orange-500'
    }
    const bColor = `${colorObj[color]} ${hoverObj[color]} text-white rounded-md px-4 py-2 m-2`
  return (
    <button className={bColor} onClick={handleClick}>{caption}</button>
  )
}
