import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import left from "public/arrows/left.png"
import down from "public/arrows/down.png"
import Image from "next/image"
interface Select{
    id:string,
    select:string
}

export default function Daymo(props:any) {


    
    const [clicked , setClicked] = useState(false)

    const [changeDay , setChangeDay] = useState<Select[]>([{
        id: nanoid(),
        select:'Today'},
        {
        id: nanoid(),
        select:'Tommorow'}, 
        ])
    
    function handleClick(name:any) {
        props.click(name)
        setClicked(false)
    } 

    
    useEffect(() => {
        function close() {
            setClicked(false)
        }
        document.addEventListener('click',close)

        return function() {
            document.removeEventListener('click' , close)
        }
    } , [clicked])
    const changeDayElement = changeDay.map((item , index) => {
        return (
            <div key={index} className={`text-white text-center ${props.activeContent === item.select ? "border-b-2 border-[#695D5D]": ""}`}>
                <p onClick={()=>handleClick(item.select)} className={`text-[1.775rem] cursor-pointer ${props.activeContent === item.select ? "font-bold" : "font-300"} max-[400px]:text-[1.2rem]  max-[1022px]:text-[1.5rem]`} >{item.select}</p>
            </div>
        ) } )
    return(
        <>
            
                <div className="flex flex-col items-center justify-center  my-6 relative">
                    <div className="flex items-center" onClick={() => setClicked(prev => !prev)}>  
                        <p className="text-white text-[1.775rem] cursor-pointer font-bold max-[1022px]:text-[1.5rem] mr-16 max-[400px]:text-[1.2rem] max-[400px]:mr-10 max-[200px]:mr-2" >{props.activeContent}
                        </p>
                            
                        {!clicked ? 
                        <Image   src={left} alt="" width={30} />
                        :
                        <Image   src={down} alt="" width={30} />}
                    </div>
                    {clicked&&<div className="max-[400px]:text-[1.2rem] bg-stone-600 p-4 mt-4 px-12 rounded-[1rem] absolute top-[2rem] z-50">
                        {changeDayElement}
                    </div>}
                    
                </div>
                
            
            
            
        </>
    )
}