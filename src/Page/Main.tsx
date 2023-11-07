import { useEffect, useState } from "react"

import Top from "@/Comp/Top/Top"
import Middle from "@/Comp/middle/Middle"
function Main() {
    const [api , setApi] = useState("https://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=c373cb30deb4bc19b25eac57de187d67")
    
    const [weather , setWeather] = useState({city:{name:""} , list:[]})
    
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
                .then(data => setWeather(data))

    } , [1])
    console.log(weather)
    console.log(weather.list[0])
    return (
        <>
            <main className="w-full mx-20">
                <Top />
                <Middle city={weather.city.name}/>
            </main>
        </>
    )
}

export default Main