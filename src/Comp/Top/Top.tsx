import { useEffect, useState } from "react"

import Day from "./Day"
import { nanoid } from "nanoid"

interface Select{
    id:string,
    select:string
}
export default function Top() {

    const [change, setChange] = useState<string | null>(null);
    const [time , setTime] = useState<any>(getCurrentTime())
    const [changeDay , setChangeDay] = useState<Select[]>([{
        id: nanoid(),
        select:'Today'},
        {
        id: nanoid(),
        select:'Tommorow'}, 
        {
        id: nanoid(),
        select:'Monthly Forecast'
    }])
    
    function handleClick(id:any) {
        setChange(id)
    }
    useEffect(() => {
        setChange(changeDay[0].id)
    } , [])
    useEffect(() => {
        // Update the time every second
        const interval = setInterval(() => {
          setTime(getCurrentTime());
        }, 5000);
    
        // Cleanup the interval on unmount
        return () => clearInterval(interval);
    }, []);
    
    function getCurrentTime() {
        const date = new Date();
        let hours: number = date.getHours();
        let minutes: any = date.getMinutes();
        let ampm = hours >= 12 ? "PM" : "AM";
    
        // Convert hours to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // 12 should be displayed as 12 AM
    
        // Ensure minutes are displayed with two digits (e.g., "03" instead of "3")
        minutes = minutes < 10 ? "0" + minutes : minutes;
    
      return `${hours}:${minutes} ${ampm}`;
      }
    const changeDayElement = changeDay.map((item) => {
        return <Day 
            key={item.id} 
            date={item.select} 
            click={() => handleClick(item.id)} 
            isActive={item.id === change}/>
    })
    return(
        <>
            <div className="flex font-['Poppins'] justify-between  items-center">
                    <div className="mr-20">
                        <h1 className="text-white text-[4.313rem]  align-top">WeatherMe</h1>
                        <p className="text-white font-[600] text-[1.188rem] text-right relative top-[-1rem]">{time}</p>
                    </div>
                    {changeDayElement}
            </div>

        </>
    )
}