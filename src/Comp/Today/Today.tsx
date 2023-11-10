
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
            <div className="flex flex-col  items-center">
                <div className="flex flex-col max-[1022px]:items-center bg-gradient-to-br from-fuchsia-600 to-zinc-900 rounded-[1.875rem] shadow  flex flex-col p-5 max-[300px]:p-4 sm:p-6 text-white">

                    <Location city={props.city}/>   
                    {props.tempList && props.tempList.main&&
                    <Tempbox tempList={props.tempList} tempChange={props.tempChange}/>}

                    <p className="font-[500] text-[1rem] underline max-[1022px]:mt-6">{currentDate}</p>

                    {props.tempList && props.tempList.main ? (
                    <Additioninfo window={props.window} tempinfo={props.tempList} />) : (".." )}
                    
                </div>
                <Bottom tempHours={props.weatherList} tempChange={props.tempChange}/>
            </div>
        </>
    )
}
export default Today