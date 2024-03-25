import React, { useEffect, useRef, useState } from "react";
import TailButton from "../UI/TailButton";
import TailInput from "../UI/TailInput";

export default function RefInput() {
  const inputRef = useRef();
  const [lst, setLst] = useState(new Set());
  const [myList, setMyList] = useState([]);

  const handleAdd = () => {
    const value = inputRef.current.value;
    if (value === "") {
      alert("Input Value");
      inputRef.current.focus();
    } 
    else if (lst.has(value)) {
      alert("Already Exist");
      inputRef.current.focus();
    } 
    else {
      setLst(new Set(lst.add(value)));
    }
  };

  const handleRemove = () => {
    const value = inputRef.current.value;
    if (value === "") {
      alert("Input Value");
      inputRef.current.focus();
    } 
    else if (!lst.has(value)) {
      alert("Value is not Exist");
      inputRef.current.focus();
    } 
    else {
      const tm = new Set(lst);
      tm.delete(value);
      setLst(tm);
    }
  };

  const clickRemove = (caption) => {
    const tm = new Set(lst);
      tm.delete(caption);
      setLst(tm);
  }

  useEffect(() => {
    if(!myList) return;
    const tm = Array.from(lst).map((item) => (
      <TailButton caption={item} color="orange" handleClick={() => clickRemove(item)} key={`bt${item}`} />
    ));
    setMyList(tm);
  }, [lst]);
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <TailInput type="date" id="val" ref={inputRef} ph="input txt"/>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div>
          <TailButton caption="Input" color="sky" handleClick={handleAdd} />
        </div>
        <div>
          <TailButton caption="Remove" color="pink" handleClick={handleRemove}
          />
        </div>
      </div>
      <div>{myList}</div>
    </div>
  );
}
