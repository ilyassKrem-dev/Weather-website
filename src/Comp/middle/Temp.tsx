

export default function Temp(props:any) {


    return(
        <>
            <div className="flex items-center">
                <p className="text-white mr-1">°C</p>
                <div onClick={props.click} className="w-[3.5rem] h-[1.25rem] bg-gradient-to-r from-green-500 to-black-900 rounded-[1.375rem] cursor-pointer">
                    <div className={`w-[1.2rem] h-[1.25rem] bg-neutral-900 rounded-full ${props.tempChange ? "translate-x-[2.1rem]":"translate-x-[0.05rem]"} `}></div>
                </div>
                <p className="text-white ml-1">°F</p>   
            </div>
        </>
    )
}