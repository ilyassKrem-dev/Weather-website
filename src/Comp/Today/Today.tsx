import { useEffect, useState } from "react"

import Tempbox from "../Same/Tempbox"
import Additioninfo from "../Same/Additioninfo"
import Location from "../Same/Location"
import Bottom from "../Today/Bottom/Bottom"

function Today(props:any) {
    const [currentDate, setCurrentDate] = useState('');
    
    
    useEffect(() => {
        const date = new Date().toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        weekday: 'short'
        });
        setCurrentDate(date);
    }, []);

    return (
        <>

            <div className="bg-gradient-to-br from-fuchsia-600 to-zinc-900 rounded-[1.875rem] shadow mx-60 flex flex-col p-6 text-white">

                <Location city={props.city}/>
                {props.tempList && props.tempList.main&&<Tempbox tempList={props.tempList} tempChange={props.tempChange}/>}

                <p className="font-[500] text-[1rem] underline">{currentDate}</p>

                {props.tempList && props.tempList.main ? (
                    <Additioninfo tempinfo={props.tempList} />) : (".." )}
            </div>
            <Bottom tempHours={props.weatherList} tempChange={props.tempChange}/>
        </>
    )
}
export default Today