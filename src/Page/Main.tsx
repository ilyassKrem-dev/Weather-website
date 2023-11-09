import { useEffect, useState } from "react"

import Top from "@/Comp/Top/Top"
import Today from "@/Comp/Today/Today"
import Tommorow from "@/Comp/Tommorow/Tommorow"
function Main() {
    const [api , setApi] = useState("https://api.openweathermap.org/data/2.5/forecast?id=2553604&appid=c373cb30deb4bc19b25eac57de187d67")
    
    const [weather , setWeather] = useState({city:{name:""} , list:[]})
    const [currentDateTime, setCurrentDateTime] = useState('');
    const [tempChange , setTempChange] = useState(true)
    const [activeContent, setActiveContent] = useState('Today');
    function handleClick() {
        setTempChange(prev => !prev)
    }
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
                .then(data => setWeather(data))

    } , [api])
    useEffect(() => {
        const now = new Date();
        const formattedDateTime = now.toISOString().slice(0, 19).replace('T', ' ');
        setCurrentDateTime(formattedDateTime);
    }, []);
    /*console.log(weather)*/
   /* console.log(currentDateTime)*/
    function setActive(active:string) {
        setActiveContent(active)
    }
    function handleClickId(id:string) {
        console.log(id)
        setApi(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=c373cb30deb4bc19b25eac57de187d67`);
    }
    const weatherToday = weather.list[0]
    
    return (
        <>
            <main className="w-full mx-20">
                
                <Top setActive={setActive} click={handleClick} tempChange={tempChange} changeId={handleClickId}/>

                {activeContent=== "Today"&&weather.list.length > 0 &&
                <Today city={weather.city.name} tempList={weatherToday} click={handleClick} tempChange={tempChange} weatherList={weather.list}/>}

                {activeContent=== "Tommorow"&&weather.list.length > 0 &&
                <Tommorow city={weather.city.name} tempList={weatherToday} click={handleClick} tempChange={tempChange} weatherList={weather.list}/>}
            </main>
        </>
    )
}

export default Main