import Image from "next/image"
import tempsvg from "../../../../public/Images/temp.svg"
import cloudsvg from "../../../../public/Images/Cloud.svg"

export default function Tempbox(props:any) {


    return (

        <>
            <div className="flex items-center justify-center mt-[2.5rem]">
                    <Image src={tempsvg} alt="" width={10}/>
                    <p className="font-[300] text-[3rem] ml-3">
                        {props.tempList && props.tempList.main ? (
                            props.tempChange
                            ? (props.tempList.main.temp - 273.15).toFixed(0) + "°C"
                            : ((props.tempList.main.temp-273.15)*9/5).toFixed(0) + "°F"
                        ) : (
                            ".." // Display a message when data is not available
                        )}
                    </p>
                    <div className="relative">
                        <Image src={cloudsvg} alt="" width={90} className="relative z-20 "/>
                        <Image src={cloudsvg} alt="" width={90} className="absolute top-0 translate-x-5 -translate-y-4 z-5	"/>
                    </div>
                </div>
        </>
    )
}