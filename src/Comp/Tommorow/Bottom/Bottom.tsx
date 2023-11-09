import {useState } from "react";

import Timetem from "../../Same/info-time/Timetemp";
function Bottom(props:any) {
    const [tempHours , setTempHours] = useState(props.tempHours)
    const filteredTime = tempHours.map((data:any,index:number) => {
        return <Timetem key={index} temp={data} tempChange={props.tempChange} />
    })
    return (
        <>
            <div className="flex items-center justify-center mt-10 text-white text-center">
                {filteredTime}
            </div>
            
        </>
    )
}

export default Bottom