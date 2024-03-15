import React from "react";

export default function My_CSS() {
  return (
    <div className="flex items-center justify-center bg-white p-5 m-5 rounded">
      <div className="w-4/5">
        <img src="./images/css.png" a="css" className="p-1 m-1 imgsize" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex text-2xl">
            <h1>Css</h1>
        </div>
        <p className="m-1">
        Cascading Style Sheets (CSS) are HTML or XML (SVG, XHTML) dialects
            style sheet language for describing how documents are displayed,
            including
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
