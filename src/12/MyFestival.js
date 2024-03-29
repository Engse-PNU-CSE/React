import React, { useEffect, useRef, useState } from "react";
import TailSelect from "../UI/TailSelect";
import GalleryCard from "../11/GalleryCard";

export default function MyFestival() {
    const[tdata, setTdata] = useState()
    const[mydropbox, setDropbox] = useState([])
    const[selTags, setselTags] = useState()
    const[feList, setFeList] = useState([])
    const selectTag = useRef()

  const getDataFetch = (url) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setTdata(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {

    var url =
      "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr"; /*URL*/
    var queryParams =
      "?" +
      encodeURIComponent("serviceKey") +
      "=" +
      `${process.env.REACT_APP_FESTIVALKEY}`; /*Service Key*/
    queryParams +=
      "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("numOfRows") +
      "=" +
      encodeURIComponent("50"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("resultType") +
      "=" +
      encodeURIComponent("json"); /**/
    getDataFetch(url+queryParams);
  }, []);

  useEffect(() => {
    if(!tdata) return;
    let tm = tdata.getFestivalKr.item.map(item => item["GUGUN_NM"]);
    tm = new Set(tm)
    tm = [...tm].sort()
    setDropbox(tm)
}, [tdata])
useEffect(() => {
    if(!selTags) return;
    let tm = tdata.getFestivalKr.item.filter(item => item["GUGUN_NM"] === selTags);
    setFeList(tm)
  }, [selTags]);
const handleSelect = (event) => {
    setselTags(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="text-5xl m-10">Busan Festival Service</div>
      <div className="w-full">
        <TailSelect mydata={mydropbox} onChange={handleSelect}/>
      </div>
    <div className="flex justify-center items-center p-10">
        <GalleryCard gallerylist={feList} />
    </div>
    </div>
  );
}
