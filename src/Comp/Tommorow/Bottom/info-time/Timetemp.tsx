

import Image from "next/image";

export default function Timetem(props:any) {
    const timeParts = props.temp.dt_txt.split(" ")[1].split(":");
    let hours = parseInt(timeParts[0]);
    let minutes = timeParts[1];
    let period = "am";

    if (hours >= 12) {
    period = "pm";
    }

    
    const formattedTime = `${hours}:${minutes}${period}`;

    type WeatherMainType = "Clouds" | "Clear" | "Rain" | "Snow" | "Thunderstorm"; 


    const weatherImages: Record<WeatherMainType, string> = {
        "Clouds": "/Images/clouds.png",
        "Clear": "/Images/clear.png",
        "Rain": "/Images/Rain.png",
        "Snow": "/Images/snow.png",
        "Thunderstorm": "/Images/thunderstorm.png",
 
    };
    const weatherMain = props.temp.weather[0].main as WeatherMainType;
    const imageSource = weatherImages[weatherMain] || weatherImages.Clouds;

    return (
        <>
            <div className="flex justify-center flex-col bg-gradient-to-b from-fuchsia-600 to-zinc-300 rounded-[2rem] relative mx-6">
                    <div className="py-3 px-5 relative z-10">
                        <p className="text-[0.8rem]">{formattedTime}</p>
                        <Image src={imageSource} alt="" width={50} height={50}/>
                        <p className="font-[300] text-[0.75rem] mt-1">
                            {props.tempChange
                            ? (props.temp.main.temp - 273.15).toFixed(0) + "°C"
                            : ((props.temp.main.temp-273.15)*9/5).toFixed(0) + "°F"}
                        </p>
                    </div>
                    <div className="bg-gradient-to-r from-stone-600 to-stone-800 rounded-[1.563rem] shadow backdrop-blur-[0.563rem] w-full h-[3.5rem] absolute bottom-0 z-0"></div>
                </div>
        </>
    )
}