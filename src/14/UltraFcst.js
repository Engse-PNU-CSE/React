import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import TailSelectV2 from '../UI/TailSelectV2';
import getcode from './getcode.json'

export default function UltraFcst() {
    const dt = useParams().dt.replaceAll("-", "");
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;
    const gubun = "단기예보"

    const[frcdata, setFrcdata] = useState();
    const[frctable, setFrctable] = useState([]);
    const[seleteitem, setSelectitem] = useState();
    const itemRef = useRef();
    const codelist = getcode.filter(item => item["예보구분"]===gubun).map(item => `${item["항목명"]}(${item["항목값"]})`)

    const getDataFetch = (url) => {
        fetch(url)
          .then((resp) => resp.json())
          .then((data) => setFrcdata(data.response.body.items.item))
          .catch((err) => console.log(err));
      };
      useEffect(() => {
            let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`
            url = url + `serviceKey=${process.env.REACT_APP_FRCSTKEY}`
            url = url + `&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`
        getDataFetch(url);
      }, []);

      useEffect(() => {
        if(!frcdata) return;
        const list = frcdata.filter(item => item["fcstDate"] === dt && item["category"] === seleteitem).map(item =>
            <tr className="bg-white dark:bg-gray-800" key={item["fcstTime"]+item["category"]}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item["fcstDate"].slice(0, 4)}-{item["fcstDate"].slice(4, 6)}-{item["fcstDate"].slice(6, 8)} 
            </th>
            <td className="px-6 py-4">
                {item["fcstTime"].slice(0,2)}:{item["fcstTime"].slice(2,4)}
            </td>
            <td className="px-6 py-4">
                {item["category"]}
            </td>
            <td className="px-6 py-4">
                {item["fcstValue"]}
            </td>

        </tr>)
        setFrctable(list)
      }, [seleteitem])
      const handleSel = () => {
        let item = itemRef.current.value
        setSelectitem(item.slice(item.length-4, item.length-1))
      }


  return (
      

<div className="relative overflow-x-auto">
    <div>{area} {gubun}</div>
    <TailSelectV2 ops={codelist} opDefault={"---Select Item---"} selRef={itemRef} handleSel={handleSel}/>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3" >
                    date
                </th>
                <th scope="col" className="px-6 py-3">
                    Hours
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Value
                </th>

            </tr>
        </thead>
        <tbody>
            {frctable}
            
        </tbody>
    </table>
</div>

  )
}
