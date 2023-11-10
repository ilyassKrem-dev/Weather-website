import { nanoid } from "nanoid"
import { useEffect, useState } from "react"

interface Select{
    id:string,
    select:string
}

export default function Day(props:any) {

    const [change, setChange] = useState<string | null>(null);

    const [changeDay , setChangeDay] = useState<Select[]>([{
        id: nanoid(),
        select:'Today'},
        {
        id: nanoid(),
        select:'Tommorow'}, 
        ])
    
    function handleClick(id:any ,name:any) {
        setChange(id)
        props.click(name)
    } 

    useEffect(() => {
        setChange(changeDay[0].id)
    } , [])


    const changeDayElement = changeDay.map((item , index) => {
        return (
            <div key={index} className={`text-white flex max-[1022px]:mr-0  mr-10 ${change === item.id ? "border-b-2 border-[#695D5D]": ""}`}>
                <p onClick={()=>handleClick(item.id , item.select)} className={`text-[1.775rem] cursor-pointer ${change === item.id ? "font-bold" : "font-300"} max-[1022px]:text-[1.5rem]`} >{item.select}</p>
            </div>
        ) } )
    return(
        <>
            <div className="flex max-[1022px]:flex-col max-[1022px]:items-center max-[1022px]:my-6">
                {changeDayElement}
            </div>
            
        </>
    )
}