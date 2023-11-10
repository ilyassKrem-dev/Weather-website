import {useEffect,useState } from "react";

import Timetem from "@/Comp/Same/info-time/Timetemp";
function Bottom(props:any) {

    const [tempHours , setTempHours] = useState(props.tempHours)
    useEffect(() => {
        setTempHours(props.tempHours);
      }, [props.tempHours]);


    const filteredTime = tempHours.map((data:any,index:number) => {
        return <Timetem key={index} temp={data} tempChange={props.tempChange} />
    })
    
    return (
        <>
            <div className={`flex  mt-10 text-white text-center  max-[200px]:w-32 max-[440px]:w-64 max-[780px]:w-96 max-[800px]:w-60 max-[1150px]:w-[50rem] max-[1150px]:overflow-x-scroll max-[800px]:overflow-x-scroll [&::-webkit-scrollbar]:hidden`}>
                {filteredTime}
            </div>
            
        </>
    )
}

export default Bottom