import Image from "next/image"
import tempsvg from "public/Images/temp.svg"

import { useState } from "react"

export default function Tempbox(props:any) {
    const [weatherType , setWeatherType] = useState(props.tempList)
    type WeatherMainType = "Clouds" | "Clear" | "Rain" | "Snow" | "Thunderstorm"; 


    const weatherImages: Record<WeatherMainType, string> = {
        "Clouds": "/Images/clouds.png",
        "Clear": "/Images/clear.png",
        "Rain": "/Images/Rain.png",
        "Snow": "/Images/snow.png",
        "Thunderstorm": "/Images/thunderstorm.png",
 
    };
    const weatherMain = weatherType.weather[0].main as WeatherMainType;
    const imageSource = weatherImages[weatherMain] || weatherImages.Clouds;

    return (

        <>
            <div className="flex items-center justify-center max-[1022px]:mt-6 mt-[2.5rem]">
                    <Image src={tempsvg} alt="" width={10}/>
                    <p className="font-[300] text-[2rem] sm:text-[3rem] ml-3">
                        {props.tempList && props.tempList.main ? (
                            props.tempChange
                            ? (props.tempList.main.temp - 273.15).toFixed(0) + "°C"
                            : ((props.tempList.main.temp-273.15)*9/5).toFixed(0) + "°F"
                        ) : (
                            ".."
                        )}
                    </p>
                    <div className="ml-2">
                        <Image src={imageSource} alt="" width={80} height={80}/>
                    </div>
                </div>
        </>
    )
}