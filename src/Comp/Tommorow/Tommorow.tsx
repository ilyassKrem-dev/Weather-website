import { useEffect, useState } from "react"

import Tempbox from "../Same/Tempbox"
import Additioninfo from "../Same/Additioninfo"
import Location from "../Same/Location"
import Bottom from "./Bottom/Bottom"

function Tommorow(props:any) {
    const [currentDate, setCurrentDate] = useState('');

    const [currentDateTime, setCurrentDateTime] = useState('');

    const [filtered, setFiltered] = useState<any>([]);
    
    /*format date*/
    useEffect(() => {
        const today = new Date();
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + 1);
    
        const formattedDate = nextDay.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            weekday: 'short',
        });
    
        setCurrentDate(formattedDate);
    }, []);

    /*filter data to next day*/
    useEffect(() => {
        const now = new Date();
        now.setDate(now.getDate() + 1);
        const formattedDateTime = now.toISOString().slice(0, 10).replace("T", " ");
        setCurrentDateTime(formattedDateTime);
      }, []);
    
      useEffect(() => {
        const newFiltered = props.weatherList.filter((item: any) => {
          return item.dt_txt.split(" ")[0] === currentDateTime;
        });
        setFiltered(newFiltered);
      }, [props.weatherList, currentDateTime]);
      

    return (
        <>
            <div className="flex flex-col  items-center">
                <div className="flex flex-col max-[1022px]:items-center bg-gradient-to-br from-fuchsia-600 to-zinc-900 rounded-[1.875rem] shadow  flex flex-col p-5 max-[300px]:p-4 sm:p-6 text-white">

                    <Location city={props.city}/>

                    {filtered[0] && filtered[0].main &&
                    <Tempbox tempList={filtered[0]} tempChange={props.tempChange}/>}

                    <p className="font-[500] text-[1rem] underline max-[1022px]:mt-6">{currentDate}</p>

                    {filtered[0] && filtered[0] ? (
                    <Additioninfo window={props.window} tempinfo={filtered[0]} />) : (".." )}
                </div>
                {filtered.length > 0 ? (
                    <Bottom tempHours={filtered} tempChange={props.tempChange} />
                    ) : (
                    "No data available for tomorrow."
                    )}
            </div>  
        </>
    )
}
export default Tommorow