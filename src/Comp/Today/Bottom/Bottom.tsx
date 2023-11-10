import { useEffect, useState } from "react";

import Timetem from "@/Comp/Same/info-time/Timetemp";
function Bottom(props:any) {
    const [tempHours , setTempHours] = useState(props.tempHours)
    const [currentDateTime, setCurrentDateTime] = useState('');
    useEffect(() => {
        const now = new Date();
        const formattedDateTime = now.toISOString().slice(0, 10).replace('T', ' ');
        setCurrentDateTime(formattedDateTime);
    }, []);
    const filtered = tempHours.filter((item:any) => {
        return item.dt_txt.split(" ")[0] === currentDateTime
    })
    const filteredTime = filtered.map((data:any,index:number) => {
        return <Timetem key={index} temp={data} tempChange={props.tempChange} />
    })
    
    return (
        <>
            <div className={`flex  mt-10 text-white text-center ${filtered.length > 1 ? "max-[800px]:w-80" : ""} max-[800px]:overflow-x-scroll [&::-webkit-scrollbar]:hidden `}>
                
                {filteredTime}
            </div>
            
        </>
    )
}

export default Bottom