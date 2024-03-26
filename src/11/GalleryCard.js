import React from 'react'
import TailButton from '../UI/TailButton'

export default function GalleryCard({gallerylist}) {
    const makebts = (mylist) => {
        let bts = mylist.split(', ').map(item => 
          <TailButton caption={item} color="orange" key={`bts${item}`}/>)
        return bts
    };
    let trs = gallerylist.item.map( item => 
        <div className="flex justify-center flex-col">
            <div className="">
                <img src={item["galWebImageUrl"]}></img></div>
            <div className="text-2xl">{item["galTitle"]}</div>
            <div>{item["galPhotographyLocation"]}</div>
            <div className="grid grid-cols-2 gap-1 text-xs">{makebts(item["galSearchKeyword"])}</div>
        </div>
        )
    console.log(gallerylist)
  return (
    <div className="grid grid-cols-3 gap-3 w-10/12">
      {trs}
    </div>
  )
}
