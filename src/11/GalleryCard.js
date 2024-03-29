import React from 'react'

export default function GalleryCard({gallerylist}) {
    const makeimgs = (mylist) => {
        return <img src={mylist} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt={mylist}></img>
    }
    let trs = gallerylist ? gallerylist.map( item => 
        <div className="flex justify-center flex-col h-full" key={item["TITLE"]}>
                {makeimgs(item["MAIN_IMG_THUMB"])}
            <div className="text-2xl">{item["TITLE"]}</div>
            <div>{item["ADDR1"]}</div>
            <div className="text-xs">{item["TRFC_INFO"]}</div>
            <div className=" text-xs w-10/12 truncate">{item["ITEMCNTNTS"]}</div>
            <span className="rounded-lg bg-cyan-200 inline-block">{item["USAGE_DAY_WEEK_AND_TIME"]}</span>
        </div>
        ) : null
  return (
    <div className="grid grid-cols-2 gap-3 w-10/12 h-full">
      {trs}
    </div>
  )
}
