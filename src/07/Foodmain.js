import React from 'react'
import Foodcard from './Foodcard'
export default function Foodmain() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-10 p-5 bg-sky-300">
      <Foodcard />
    </div>
  )
}
