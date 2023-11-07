import { useState } from "react"
import Image from "next/image"
import Temp from "./Temp"
import tempsvg from "../../../public/Images/temp.svg"
import cloudsvg from "../../../public/Images/Cloud.svg"
function Middle(props:any) {

    const [tempChange , setTempChange] = useState(false)

    function handleClick() {
        setTempChange(prev => !prev)
    }
    return (
        <>
            <Temp click={handleClick} tempChange={tempChange}/>
            <div className="bg-gradient-to-br from-fuchsia-600 to-zinc-800 rounded-[1.875rem] shadow mx-72 flex flex-col p-6 text-white">
                <div className="flex">
                    <p className="text-white font-[300] text-xl">{props.city}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31 31" fill="none">
                        <path d="M24.5417 11.625C24.5417 6.63142 20.4936 2.58334 15.5 2.58334C10.5064 2.58334 6.45834 6.63142 6.45834 11.625C6.45834 13.4165 6.98793 15.0828 7.88564 16.4881H7.8753C10.9236 21.2608 15.5 28.4167 15.5 28.4167L23.1247 16.4881H23.1157C24.0121 15.0828 24.5417 13.4165 24.5417 11.625ZM15.5 15.5C13.3597 15.5 11.625 13.7653 11.625 11.625C11.625 9.48471 13.3597 7.75 15.5 7.75C17.6403 7.75 19.375 9.48471 19.375 11.625C19.375 13.7653 17.6403 15.5 15.5 15.5Z" fill="#E4D9D9"/>
                    </svg>
                </div>
                <div className="flex items-center justify-center">
                    <Image src={tempsvg} alt="" width={10}/>
                    <p className="font-[300] text-[3rem] ml-3">27°C</p>
                    <div className="relative">
                        <Image src={cloudsvg} alt="" width={90} className="relative z-20 "/>
                        <Image src={cloudsvg} alt="" width={90} className="absolute top-0 translate-x-5 -translate-y-4 z-5	"/>
                    </div>
                </div>
                <p className="font-[500] text-[1rem] underline">Aug 23,  Tue</p>
                <div className="flex items-center mt-20 justify-between">
                    <div className="font-[500] uppercase	">
                        <p>Humidity</p>
                        <p className="text-center">99%</p>
                    </div>
                    <div className="font-[500] uppercase	">
                        <p>Visiblity</p>
                        <p className="text-center">99%</p>
                    </div>
                    <div className="font-[500] uppercase	">
                        <p>Air Pressure</p>
                        <p className="text-center">99%</p>
                    </div>
                    <div className="font-[500] uppercase	">
                        <p>Wind</p>
                        <p className="text-center">99%</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Middle