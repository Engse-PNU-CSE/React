import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";

function MyClock8() {
    return(
        <div className="bg-slate-500 w-full justify-center flex items-center flex-col text-white">
            <MyClockImage />
            <MyClockTime />
        </div>
    );
}
export default MyClock8