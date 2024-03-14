import React from "react";
import logo from "../logo.svg";
import styles from "./HelloWhite.module.css"

export default function Hellowhite() {
  const helloDisign = {
    backgroundColor : 'white',
    color : 'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div styles = {helloDisign} >
      <h1>Hello, React</h1>
      <p className={styles.ch1} >Hello, VSCode</p>
    </div>
  );
}
