import { useEffect, useState } from "react"

import Weatherlogo from "./Weather-logo/Weatherlogo"
import Temp from "./Temp"
import SearchBar from "./Search-bar/Searchbar"
import Day from "./Day"
import Daymo from "./Daymob/Daymo"

export default function Top(props:any) {
    const [time , setTime] = useState<any>(getCurrentTime())

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
    
        
        hours = hours % 12;
        hours = hours ? hours : 12; 
    
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
    
        return `${hours}:${minutes} ${ampm}`;
      }

    


    return(
        <>
            <nav> 
                <div className="flex  flex-col items-center mt-2 lg:flex-row font-['Poppins'] lg:justify-between  items-center">
                    <div className="max-[400px]:mx-0 mx-20 relative z-10 flex flex-col max-[1022px]:items-center">
                        <Weatherlogo time={time}/>
                        <Temp click={props.click} tempChange={props.tempChange}/>
                    </div>
                    
                    <div>
                      {props.window <= 1023?
                      <Daymo activeContent={props.activeContent} click={props.setActive}/>
                          :
                      <Day click={props.setActive}/>}
                    </div>
                        
                    
                     
                           
                </div>
                <SearchBar changeId={props.changeId}/>
            </nav>
        </>
    )
}