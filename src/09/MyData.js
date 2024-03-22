import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import TrafficNav from './TrafficNav';
import TrafficDetail from './TrafficDetail';

export default function MyData() {
    const[tdata, setTdata] = useState();
    const[C1, setC1] = useState(); //대분류
    const[selC1, setselC1] = useState()
    const[C2, setC2] = useState(); //중분류
    const[selC2, setselC2] = useState()

    const[detail, setDetail] = useState() //상세내용

    const getDataFetch = (url) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.data))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`
        url = `${url}page=1&perPage=20&`
        url = `${url}serviceKey=${process.env.REACT_APP_APTKEY}`
        getDataFetch(url)
    }, [])

    useEffect(() => {
        if(!tdata) return;
        let tm = tdata.map(item => item.사고유형_대분류);
        tm = new Set(tm)
        tm = [...tm]
        setC1(tm)
    }, [tdata])

    useEffect(() => {
        if(!tdata) return;
        let tm = tdata.filter(element => element.사고유형_대분류===selC1).map(item => item.사고유형_중분류);
        tm = new Set(tm)
        tm = [...tm]
        setC2(tm)
    }, [selC1])
    useEffect(() => {
        if(!C1) return;
        let tm = tdata.filter(element => element.사고유형_대분류===selC1 && element.사고유형_중분류===selC2).map(item => item);
        tm = new Set(tm)
        tm = [...tm]
        setDetail(tm[0])
    }, [selC2])
    const[info, setinfo] = useState();

     useEffect(() => {
        if(!detail) return
        const keyArr = ['사고건수', "사망자수", "중상자수", "경상자수", "부상신고자수"]
        let tm = keyArr.map( k => 
            <div>
                <div>{k}</div>
                <div>{detail[k]}</div>
            </div>);
        setinfo(tm)
     },[detail])
    return (
    <div className="w-full flex flex-col justify-start items-center h-full">
        {C1 && <TrafficNav title="대분류" category={C1} sel={selC1} setSel={setselC1} />}
        {C2 && <TrafficNav title="중분류" category={C2} sel={selC2} setSel={setselC2} />}
        {detail && <TrafficDetail detail={detail}/>}
        {/* <div className="grid w-10/12 grid-cols-4 md:grid-cols-8 sm:grid-cols-4">{info}</div> */}
    </div>
  )
}
