import React, { useEffect, useRef, useState } from 'react'
import TailButton from '../UI/TailButton'


export default function RefVal() {
    let localCnt = 0;
    const [stateCnt, setStateCnt] = useState(0);
    const refCnt = useRef(0);

    const handleLocal = () => {
        localCnt = localCnt + 1;
        console.log('localCnt = ', localCnt)
    }
    const handleState = () => {
        setStateCnt(stateCnt + 1)
    }
    const handleRef = () => {
        refCnt.current = refCnt.current + 1
        console.log('refCnt = ', refCnt.current)
    }

    useEffect(() => {console.log('stateCnt = ', stateCnt)},[stateCnt])

  return (
    <div className="grid w-10/12 grid-cols-3 gap-2 m-1 p-1 items-center justify-center text-center">
        <div>
            Component val(local val) : {localCnt}
        </div>
        <div>
            State val : {stateCnt}
        </div>
        <div>
            Ref val : {refCnt.current}
        </div>
        <div>
            <TailButton caption="Component Val" color="sky" handleClick={handleLocal} />
        </div>
        <div>
            <TailButton caption="State Val" color="pink" handleClick={handleState} />
        </div>
        <div>
            <TailButton caption="Ref Val" color="orange" handleClick={handleRef} />
        </div>
    </div>
  )
}
