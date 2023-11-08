import { useEffect, useState } from "react"

import Top from "@/Comp/Top/Top"
import Middle from "@/Comp/middle/Middle"
import Bottom from "@/Comp/Bottom/Bottom"
function Main() {
    const [api , setApi] = useState("https://api.openweathermap.org/data/2.5/forecast?id=2553604&appid=c373cb30deb4bc19b25eac57de187d67")
    
    const [weather , setWeather] = useState({city:{name:""} , list:[]})
    const [currentDateTime, setCurrentDateTime] = useState('');
    const [tempChange , setTempChange] = useState(true)

    function handleClick() {
        setTempChange(prev => !prev)
    }
    
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
                .then(data => setWeather(data))

    } , [])
    useEffect(() => {
        const now = new Date();
        const formattedDateTime = now.toISOString().slice(0, 19).replace('T', ' ');
        setCurrentDateTime(formattedDateTime);
    }, []);
    /*console.log(weather)*/
   /* console.log(currentDateTime)*/
    const weatherToday = weather.list[0]
    return (
        <>
            <main className="w-full mx-20">
                <Top />
                <Middle city={weather.city.name} tempList={weatherToday} click={handleClick} tempChange={tempChange}/>
                {weather && weather.list && weather.list.length > 0 ? <Bottom tempHours={weather.list}tempChange={tempChange}/>: "..."}
            </main>
        </>
    )
}

export default Main