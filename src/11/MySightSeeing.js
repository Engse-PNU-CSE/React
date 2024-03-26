import React, { useEffect, useRef, useState } from 'react'
import GalleryCard from './GalleryCard'
import TailInput from "../UI/TailInput";
import TailButton from '../UI/TailButton';

export default function MySightSeeing() {
    const keyword = useRef()
    const [tdata, setTdata] = useState()
    const [selKeyword, setSelKeyword] = useState()
    const [seldata, setSeldata] = useState()
    const [btscancle, setBtsCancle] = useState(false)
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
        url = `${url}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${selKeyword}`
        url = `${url}&_type=json`
        console.log("url = ", url)
        getDataFetch(url)
    }, [selKeyword])
    useEffect(() => {
        if(!tdata) return
        setSeldata(tdata.response.body.items)
        console.log("tdata = ", tdata)
    },[tdata])
    const handleClick = () => {
        const value = encodeURI(keyword.current.value)
        setBtsCancle(true)
        setSelKeyword(value)
    }
    const handleCancle = () => {
      setBtsCancle(false)
    }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row">
          <TailInput
            type="text"
            id="Search"
            ref={keyword}
            ph="input text..."
          />
          <TailButton caption="Search" color="sky" handleClick={handleClick}/>
          <TailButton caption="Cancle" color="pink" handleClick={handleCancle}/>
      </div>

      <div className="flex justify-center items-center p-10">
        {<GalleryCard gallerylist={seldata} />}
      </div>
    </div>
  )
}
