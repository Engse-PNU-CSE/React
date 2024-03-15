import React from 'react'
import My_CSS from './My_CSS'
import My_Html from './My_Html'
import My_Js from './My_Js'
import My_React from './My_React'

export default function My_List() {
  return (
    <div className="flex items-center flex-wrap justify-center m-10 bg-teal-500">
        <My_Html />
        <My_CSS />
        <My_Js />
        <My_React />
    </div>
  )
}
