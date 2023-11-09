
export default function Additioninfo(props:any) {

    return (
        <>
            <div className="flex items-center mt-20 justify-between">
                    <div className="font-[500]">
                        <p className="uppercase">Humidity</p>
                        <p className="text-center">{props.tempinfo.main.humidity}%</p>
                    </div>
                    <div className="font-[500]">
                        <p className="uppercase">Visiblity</p>
                        <p className="text-center">{props.tempinfo.visibility /1000}km</p>
                    </div>
                    <div className="font-[500]">
                        <p className="uppercase">Air Pressure</p>
                        <p className="text-center">{props.tempinfo.main.pressure}hPa</p>
                    </div>
                    <div className="font-[500]">
                        <p className="uppercase">Wind</p>
                        <p className="text-center">{props.tempinfo.wind.speed}mph</p>
                    </div>
                </div>
        </>
    )
}