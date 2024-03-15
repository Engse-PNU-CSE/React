import React from "react";

export default function My_CSS() {
  return (
    <div className="flex items-center justify-center bg-white w-2/5 h-2/5 p-5 m-5 rounded">
      <div>
        <img src="./images/css.png" a="css" className="h-3/5 w-3/5 p-1 m-1" />
      </div>
      <div className="flex flex-col">
        <p className="w-3/4 m-5">
          Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML
          포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어
        </p>
        <p>
            <span>❤️</span>
            <span>좋아요</span>
            <span>0</span>
        </p>
      </div>
    </div>
  );
}
