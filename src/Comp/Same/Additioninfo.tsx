
export default function Additioninfo(props:any) {

    return (
        <>
            <div className="grid grid-cols-2	 max-[300px]:grid-cols-1  lg:flex  lg:items-center max-[1022px]:mt-10 mt-20 justify-between">
                    <div className="font-[500] max-[300px]:mr-0 mr-6 sm:mr-16">
                        <p className="uppercase">Humidity</p>
                        <p className="text-center">{props.tempinfo.main.humidity}%</p>
                    </div>
                    {props.window > 300&&<div className="font-[500]  sm:mr-16">
                        <p className="uppercase">Visiblity</p>
                        <p className="text-center">{props.tempinfo.visibility /1000}km</p>
                    </div>}
                    {props.window > 450&&<div className="font-[500] mr-16 mt-6 lg:mt-0">
                        <p className="uppercase">Air Pressure</p>
                        <p className="text-center">{props.tempinfo.main.pressure}hPa</p>
                    </div>}
                    {props.window > 450&&<div className="font-[500]  mt-6 lg:mt-0 lg:mr-0">
                        <p className="uppercase">Wind</p>
                        <p className="text-center">{props.tempinfo.wind.speed}mph</p>
                    </div>}
                </div>
        </>
    )
}