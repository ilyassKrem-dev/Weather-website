import sun from "public/Images/sun-Cloud.png"
import Image from "next/image"
export default function Weatherlogo(props:any) {


    return (
        <>
            <Image className="max-[300px]:w-6 max-[300px]:left-4 absolute -z-10 top-0 left-0 -translate-x-[3rem] translate-y-[-1rem] max-[1022px]:w-12 max-[1022px]:translate-y-[0] max-[1022px]:-translate-x-[1.8rem] " src={sun} alt="" width={80}/>
            <h1 className="max-[300px]:text-[1.6rem] text-white max-[400px]:text-[2rem]  text-[4.313rem]  align-top max-[1022px]:text-[3rem]   ">WeatherMe</h1>
            <p className="text-white font-[600] max-[400px]:text-[0.8rem] max-[400px]:mt-4 text-[1.188rem] text-right relative top-[-1rem]">
                {props.time}</p>

        </>
    )
}