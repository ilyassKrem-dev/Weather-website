import { useEffect, useState } from "react"
import { nanoid } from "nanoid"

import Weatherlogo from "./Weather-logo/Weatherlogo"
import Temp from "./Temp"
import SearchBar from "./Search-bar/Searchbar"
import Day from "./Day"

interface Select{
    id:string,
    select:string
}
export default function Top(props:any) {

    const [change, setChange] = useState<string | null>(null);
    const [time , setTime] = useState<any>(getCurrentTime())
    const [changeDay , setChangeDay] = useState<Select[]>([{
        id: nanoid(),
        select:'Today'},
        {
        id: nanoid(),
        select:'Tommorow'}, 
        ])
    
    function handleClick(id:any ,name:any) {
        setChange(id)
        props.setActive(name)
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

    function handleClickTemp() {
        props.click()
    }

    const changeDayElement = changeDay.map((item) => {
        return <Day 
            key={item.id} 
            date={item.select} 
            click={() => handleClick(item.id , item.select)} 
            isActive={item.id === change}/>   
    })
    return(
        <>
            <nav> 
                <div className="flex font-['Poppins'] justify-between  items-center">
                    <div className="mr-20 relative z-10">
                        <Weatherlogo time={time}/>
                        <Temp click={handleClickTemp} tempChange={props.tempChange}/>
                    </div>
                    {changeDayElement}  
                </div>
                <SearchBar changeId={props.changeId}/>
            </nav>
        </>
    )
}