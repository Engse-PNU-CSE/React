import React, { useEffect, useRef } from "react";
import BoxOfficeTb from "./BoxOfficeTb";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeInfo from "./BoxOfficeInfo";
import { useState } from "react";
import TailInput from "../UI/TailInput";

export default function RefMyBoxOffice() {
  const[tdata, setTdata] = useState();
  const [selMv, setSelMv] = useState();
  const [selDate, setSelDate] = useState();
  const inputRef = useRef();
  const [dataMovies, setDataMovies] = useState([])

  const inchange = () => {
    let str = inputRef.current.value;
    let str1 = str.replaceAll("-", "");
    setSelDate(str1);
  };

  const getDataFetch = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTdata(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if(!selDate) return;
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = `${url}key=${process.env.REACT_APP_MY_API}`;
    url = `${url}&targetDt=${selDate}`
    getDataFetch(url);
  }, [selDate]);

  useEffect(() => {
    if(!tdata) return;
    setDataMovies(tdata.boxOfficeResult.dailyBoxOfficeList)
}, [tdata])

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <TailInput
        className="w-2/3"
        type="date"
        id="Choose Date"
        inchange={inchange}
        ref={inputRef}
        ph=""
      />
      <div className="m-10 w-5/6 ">
        <table className="w-full justify-center text-center">
          <BoxOfficeThead />
          <BoxOfficeTb boxList={dataMovies} setSelMv={setSelMv} />
          <BoxOfficeInfo selMv={selMv} />
        </table>
      </div>
    </div>
  );
}
