import React from "react";
import logo from "../logo.svg";

export default function Hellocss() {
  const helloDisign = {
    backgroundColor : 'black',
    color : 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const imgsize = {
    width : '50vmin',
    height : '50vmin'
  };
  return (
    <div style={helloDisign}>
      <img style = {imgsize} src={logo} className="logo" alt="logo" />
      <h1>Hello, React</h1>
    </div>
  );
}
