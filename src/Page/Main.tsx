
import { useEffect, useState } from "react"

import Top from "@/Comp/Top/Top"
import Today from "@/Comp/Today/Today"
import Tommorow from "@/Comp/Tommorow/Tommorow"
function Main() {
    const [api , setApi] = useState("https://api.openweathermap.org/data/2.5/forecast?id=2553604&appid=c373cb30deb4bc19b25eac57de187d67")
    
    const [weather , setWeather] = useState({city:{name:""} , list:[]})
    const [windowSize , setWindowSize] = useState(0)
    const [tempChange , setTempChange] = useState(true)

    const [activeContent, setActiveContent] = useState('Today');
    
    useEffect(() => {
      
        if (typeof window !== "undefined") {
          setWindowSize(window.innerWidth);
        }
    
       
        const handleResize = () => {
          setWindowSize(window.innerWidth);
        };
    
       
        window.addEventListener("resize", handleResize);
    
       
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    function handleClick() {
        setTempChange(prev => !prev)
    }
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
                .then(data => setWeather(data))

    } , [api])
    
    function setActive(active:string) {
        setActiveContent(active)
    }
    function handleClickId(id:string) {
        setApi(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=c373cb30deb4bc19b25eac57de187d67`);
    }
    const weatherToday = weather.list[0]
    return (
        <>
            <main className="w-full">
                
                <Top activeContent={activeContent} setActive={setActive} click={handleClick} tempChange={tempChange} changeId={handleClickId} window={windowSize}/>

                {activeContent=== "Today"&&weather.list.length > 0 &&
                <Today window={windowSize} city={weather.city.name} tempList={weatherToday} click={handleClick} tempChange={tempChange} weatherList={weather.list}/>}

                {activeContent=== "Tommorow"&&weather&&weather.list.length > 0 &&
                <Tommorow window={windowSize} city={weather.city.name} click={handleClick} tempChange={tempChange} weatherList={weather.list}/>}
            </main>
        </>
    )
}

export default Main