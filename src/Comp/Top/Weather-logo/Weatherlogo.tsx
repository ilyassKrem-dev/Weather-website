import sun from "public/Images/sun-Cloud.png"
import Image from "next/image"
export default function Weatherlogo(props:any) {


    return (
        <>
            <Image className="absolute -z-10 top-0 left-0 -translate-x-[3rem] translate-y-[-1rem]" src={sun} alt="" width={80}/>
            <h1 className="text-white text-[4.313rem]  align-top">WeatherMe</h1>
            <p className="text-white font-[600] text-[1.188rem] text-right relative top-[-1rem]">
                {props.time}</p>

        </>
    )
}