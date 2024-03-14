import React from "react";

export default function HelloYellow() {
  const helloDisign = {
    backgroundColor : 'white',
    color : 'yellow',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div style={helloDisign}>
      <h1>Hello, React</h1>
    </div>
  );
}
