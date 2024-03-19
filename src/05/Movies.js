import React from 'react'
import { useState } from 'react'
import { FaArrowUp , FaArrowDown} from "react-icons/fa";

//rank: 순위, moivenum : 영화이름, salesAcc : 누적 매출액, audiAcc: 누적 관광객 ranklnten : 영화순위 증감률
export default function Movies({rank, movieNm, salesAcc, audiAcc, rankInten}) {
  const [movies, setmovies] = useState("Select the Movie");
  
  const ontable = () => {  
    setmovies(`Movie Name : ${movieNm}, Total Sales : ${parseInt(salesAcc).toLocaleString()}원 , Total Audience : ${parseInt(audiAcc).toLocaleString()}명`);
    document.querySelector("#textarea").innerHTML = `${movies}`
  }
  const leavetable = () => {  
    // setmovies(`select movie`);
    // document.querySelector("#textarea").innerHTML = `${movies}`
  }
  return (
    <tr key = {movieNm} className="bg-white hover:bg-slate-400" onMouseEnter={ontable} onMouseLeave={leavetable}>
        <th>{rank} 위</th>
        <td>{movieNm}</td>
        <td>{parseInt(salesAcc).toLocaleString()} 원</td>
        <td>{parseInt(audiAcc).toLocaleString()} 명</td>
        <td className = {parseInt(rankInten) === 0 ? " flex justify-center items-center": parseInt(rankInten)>0 ? " flex justify-center items-center text-red-600 " : " flex justify-center items-center text-blue-600"}>{parseInt(rankInten) === 0 ? "-": parseInt(rankInten)>0 ? <FaArrowUp /> : <FaArrowDown />}{parseInt(rankInten) === 0 ? "" : Math.abs(parseInt(rankInten))}</td>
    </tr>
  )
}
