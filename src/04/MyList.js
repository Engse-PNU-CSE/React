import React from "react";

export default function MyList({ title, imgUrl, content }) {
  return (
    <div>
      <div className="flex">
          <img src={imgUrl} alt="title" />
        <div className="ml-2">
        <h1 className="text-2xl">{title}</h1>
          <p>{content}</p>
          <p className="flex justify-end">
          <span className="m-1">❤️</span>
          <span className="m-1">Like</span>
          <span className="m-1">0</span>
        </p>
        </div>
      </div>
    </div>
  );
}
