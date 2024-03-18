import React from "react";
import { GoHeartFill } from "react-icons/go";
import { useState } from "react";

export default function MyList({ title, imgUrl, content }) {
  let count = 0
  //state val
  const[countHeart, setcountHeart] = useState(0);

  const handleLike = () => {
    setcountHeart(countHeart+1);
  }


  return (
    <div className="bg-white rounded">
      <div className="flex">
        <img src={imgUrl} alt="title" className="h-1/3 w-1/3 rounded"/>
        <div className="ml-2 w-4/6 flex flex-col justify-between">
          <h1 className="text-2xl">{title}</h1>
          <p className="text-sm">{content}</p>
          <p className="flex justify-end">
            <span className="m-1 cursor-pointer" onClick={() => handleLike()}><GoHeartFill className="text-red-600 hover:text-blue-600"/></span>
            <span className="m-1">Like</span>
            <span className="m-1">{countHeart}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
