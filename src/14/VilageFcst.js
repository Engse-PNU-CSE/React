import React from 'react'
import { useParams } from 'react-router-dom'

export default function VilageFcst() {
  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;

  console.log(dt, area, x, y);
  return (
    <div>
      AH!
    </div>
  )
}