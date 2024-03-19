import React from 'react'

export default function TailButton({caption, handleclick, color}) {
    
  return (
    <button className="bg-sky-600 text-white rounded-md px-4 py-2 m-2" onClick={handleclick}>{caption}</button>
  )
}
