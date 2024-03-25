import React from 'react'

export default function BoxOfficeThead() {
  return (
    <thead className="bg-sky-300 text-white">
          <tr>
            <th>순위</th>
            <th>영화명</th>
            <th>누적 매출액</th>
            <th>누적 관객수</th>
            <th>순위 변동</th>
          </tr>
    </thead>
  )
}
