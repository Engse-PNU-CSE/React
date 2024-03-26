import React, { useEffect, useRef, useState } from 'react'
import GalleryCard from './GalleryCard'
import TailInput from "../UI/TailInput";
import TailButton from '../UI/TailButton';

export default function MySightSeeing() {
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
        if(!selKeyword) {
          return
        }
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = `${url}serviceKey=${process.env.REACT_APP_SIGHTKEY}`
        url = `${url}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${selKeyword}`
        url = `${url}&_type=json`
        console.log("url = ", url)
        getDataFetch(url)
    }, [selKeyword])
    useEffect(() => {
        if(!tdata) return
        setSeldata(tdata.response.body.items)
    },[tdata])
    const handleClick = () => {
        if(!keyword.current.value) {
          alert("input txt")
          return
        }
        const value = encodeURI(keyword.current.value)
        setSelKeyword(value)
    }
    const handleCancle = () => {
      setSeldata()
    }
  return (
    <div className="flex flex-col justify-center items-center m-10 w-full">
      <div className="flex flex-row justify-around w-2/3">
          <TailInput
            type="text"
            id="Search"
            ref={keyword}
            ph="input text..."
          />
          <div className="flex flex-row">
            <TailButton caption="Search" color="sky" handleClick={handleClick}/>
            <TailButton caption="Cancle" color="pink" handleClick={handleCancle}/>
          </div>
      </div>

      <div className="flex justify-center items-center p-10">
        {<GalleryCard gallerylist={seldata} />}
      </div>
    </div>
  )
}
