import React from "react";
import listMovie from "./BoxOffice.json";
import BoxOfficeTb from "./BoxOfficeTb";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeInfo from "./BoxOfficeInfo";
import { useState } from "react";

export default function MyBoxOffice() {
  const movies = listMovie.boxOfficeResult.dailyBoxOfficeList
  const [selMv, setSelMv] = useState() ;
  return (
    <div className="m-10 w-5/6">
      <table className="w-full justify-center text-center">
        <BoxOfficeThead />
        <BoxOfficeTb boxList={movies} setSelMv={setSelMv}/>
        <BoxOfficeInfo selMv={selMv}/>
      </table>
    </div>
  );
}
