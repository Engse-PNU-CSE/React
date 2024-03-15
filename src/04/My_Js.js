import React from "react";

export default function My_Js() {
  return (
    <div className="flex items-center justify-center bg-white p-5 m-5 rounded">
      <div className="w-4/5">
        <img src="./images/js.png" a="js" className="p-1 m-1 imgsize" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex text-2xl">
          <h1>Js</h1>
        </div>
        <p className="w-3/4 m-1">
          It's a scripted language for web pages that is light, interpreter, or Just-in-time compilation programming language that supports first-class functions
        </p>
        <p className="flex justify-end">
          <span className="m-1">❤️</span>
          <span className="m-1">Like</span>
          <span className="m-1">0</span>
        </p>
      </div>
    </div>
  );
}
