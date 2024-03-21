import logo from "../logo.svg";
import spin from "../spin.png"
import "./clock.css"

function MyClockImage() {
  return (
    <div className="flex justify-center flex-row items-center">
      <img src={spin} className="clock-hours" alt="logo" />
      <img src={spin} className="clock-minutes" alt="logo" />
      <img src={spin} className="clock-seconds" alt="logo" />
      </div>
  );
}

export default MyClockImage;