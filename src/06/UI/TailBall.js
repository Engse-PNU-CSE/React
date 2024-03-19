import React from 'react'

export default function TailBall({n, key}) {
    
    const bcolor = [
        'bg-red-400',
        'bg-orange-400',
        'bg-yellow-400',
        'bg-green-400',
        'bg-blue-400',
        'bg-purple-400'
    ]
    const ballColor = `m-3 p-3 w-16 h-16 font-bold text-xl rounded-full flex justify-center items-center ${bcolor[parseInt(n/10)]} text-white`
  return (
    <div className= {ballColor}>
      {n}
    </div>
  )
}
