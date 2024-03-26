import React, { useEffect, useRef, useState } from 'react'
import datalist from "./gallerydata.json"
import GalleryCard from './GalleryCard'
import TailInput from "../UI/TailInput";
import TailButton from '../UI/TailButton';

export default function MySightSeeing() {
    const mydata = datalist.response.body.items
    const keyword = useRef()
    const [tdata, setTdata] = useState()
    const [selKeyword, setSelKeyword] = useState()
    const [seldata, setSeldata] = useState()
    const getDataFetch = (url) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data))
        .catch(err => console.log(err))
    };
    useEffect(() => {
        if(!selKeyword) return
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = `${url}serviceKey=${process.env.REACT_APP_SIGHTKEY}`
        url = `${url}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyword.current.value}`
        url = `${url}&_type=json`
        console.log("url = ", url)
        getDataFetch(url)
    }, [selKeyword])
    useEffect(() => {
        if(!tdata) return
        setSeldata(tdata)
        console.log("tdata = ", tdata)
    },[tdata])
    const inChange = () => {}
    const handleClick = () => {
        const value = keyword.current.value
        setSelKeyword(value)
    }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row">
          <TailInput
            className="w-2/3"
            type="text"
            id="Search"
            onChange={inChange}
            ref={keyword}
            ph="input text..."
          />
          <TailButton caption="Search" color="sky" handleClick={handleClick}/>
      </div>

      {seldata && <GalleryCard gallerylist={seldata} />}
    </div>
  )
}
