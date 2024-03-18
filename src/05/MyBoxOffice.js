import React from "react";
import listMovie from "./BoxOffice.json";
import Movies from "./Movies";

export default function MyBoxOffice() {
  const movies = listMovie.boxOfficeResult.dailyBoxOfficeList.map((movie) => 
    <Movies rank = {movie.rank} movieNm = {movie.movieNm} salesAcc = {movie.salesAcc} audiAcc = {movie.audiAcc} rankInten = {movie.rankInten} key={movie.movieNm}/>
  );
  return (
    <div className="m-10 w-5/6">
      <table className="w-full justify-center text-center">
        <thead className="bg-sky-300 text-white">
          <tr>
            <th>순위</th>
            <th>영화명</th>
            <th>누적 매출액</th>
            <th>누적 관객수</th>
            <th>순위 변동</th>
          </tr>
        </thead>
        <tbody >
          {movies}
        </tbody>
        <tfoot>
        <tr>
          <td colSpan={5} id="textarea" className="bg-black text-white"></td>
        </tr>
        </tfoot>
      </table>
    </div>
  );
}
