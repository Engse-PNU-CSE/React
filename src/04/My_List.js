import React from 'react'
import listdata from "./MyListData.json"
import MyList from './MyList';

export default function My_List() {
  console.log(listdata)
  const myItems = listdata.map(item => 
    <MyList title={item.title} imgUrl={item.imgUrl} content={item.content} key={item.title}/>
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-10 p-5 bg-sky-300">
        {/* <My_Html />
        <My_CSS />
        <My_Js />
        <My_React /> */}
        {myItems}
    </div>
  )
}
