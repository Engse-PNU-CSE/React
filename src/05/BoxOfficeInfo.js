import React from 'react'

export default function BoxOfficeInfo({selMv}) {
  return (
    <tfoot>
        <tr>
          <td colSpan={5} id="textarea" className="bg-black text-white">{selMv}</td>
        </tr>
    </tfoot>
  )
}
