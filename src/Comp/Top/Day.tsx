
export default function Day(props:any) {
    
    return(
        <>
            <div className={`text-white flex mr-10 ${props.isActive ? "border-b-2 border-[#695D5D]": ""}`}>
                        <p onClick={props.click} className={`text-[1.775rem] cursor-pointer ${props.isActive ? "font-bold" : "font-300"}`} >{props.date}</p>
            </div>
        </>
    )
}