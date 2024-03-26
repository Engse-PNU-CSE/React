import React from 'react'

export default function GalleryCard({gallerylist}) {
    const makebts = (mylist) => {
        let bts = mylist.split(', ').map(item => 
          <span className="bg-orange-300 text-center rounded m-1" key={item}>{item}</span>)
        return bts
    };
    const makeimgs = (mylist) => {
        let change=mylist.replaceAll("http","https")
        return <img src={change} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt={change}></img>
    }
    let trs = gallerylist && gallerylist.item ? gallerylist.item.map( item => 
        <div className="flex justify-center flex-col" key={item["galTitle"]}>
                {makeimgs(item["galWebImageUrl"])}
            <div className="text-2xl">{item["galTitle"]}</div>
            <div>{item["galPhotographyLocation"]}</div>
            <div className=" text-xs w-10/12">{makebts(item["galSearchKeyword"])}</div>
        </div>
        ) : null
  return (
    <div className="grid grid-cols-3 gap-3 w-10/12">
      {trs}
    </div>
  )
}
