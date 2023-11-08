import { useEffect, useState } from "react"

import Temp from "./temp-info/Temp"
import Tempbox from "./temp-info/Tempbox"
import Additioninfo from "./temp-info/Additioninfo"
import Location from "./temp-info/Location"
import Bottom from "./Bottom/Bottom"

function Tommorow(props:any) {
    const [currentDate, setCurrentDate] = useState('');
    
    
    const tempList = props.tempList
    useEffect(() => {
        const date = new Date().toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        weekday: 'short'
        });
        setCurrentDate(date);
    }, []);

    function handleClick() {
        props.click()
    }

    return (
        <>
            <Temp click={handleClick} tempChange={props.tempChange}/>

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
export default Tommorow