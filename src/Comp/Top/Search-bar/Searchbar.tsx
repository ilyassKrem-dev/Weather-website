import cityListData from './city-list.json';
import {useEffect, useMemo, useState } from "react"


interface City {
    id: string;
    name: string;
    
};

export default function SearchBar(props:any) {
    const cityList = cityListData as City[];
    const [userInput , setUserInput] = useState("")
    const [showResults, setShowResults] = useState(false);

    const maxResults = 10;
    
    const uniqueCityNamesSet = new Set();

    useEffect(() => {
        function hide() {
            setShowResults(false)
        }
        document.addEventListener('click' , hide)

        return function() {
            document.removeEventListener('click' , hide)
        }
    } , [showResults])

    
    const isCityNameAlreadyInSet = (cityName:string) => {
        if (uniqueCityNamesSet.has(cityName)) {
            return true; 
        } else {
            uniqueCityNamesSet.add(cityName); 
            return false; 
        }
    };

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const input = event.target.value;
        const capitalizedInput = input.charAt(0).toUpperCase() + input.slice(1);
        setUserInput(capitalizedInput);
    }

    const filteredCities = cityList.filter((city) => {
        const cityName = city.name.toLowerCase();
        const userInputLower = userInput.toLowerCase();

        // Check if the city name contains the user's input and is not already in the Set
        return cityName.includes(userInputLower) && !isCityNameAlreadyInSet(cityName);
    });
    
    function handleClick(name:string) {
        const find = cityList.find(item => item.name === name)
        if (find) {
            props.changeId(find.id)
        }
        setShowResults(false)    
    }
    const limitedResults = filteredCities.slice(0, maxResults);
    const cityElement = useMemo(() => {
        return limitedResults.map((city,index) => (
             <p onClick={() => handleClick(city.name)}  key={index} className='cursor-pointer capitalize border-b-2 border-black mb-2'>{city.name}</p>
        ))
    }, [limitedResults]) 
    
    return (
        <>
            <div className="flex justify-center mb-5">
                <div className="relative">
                    <div>
                        <div onClick={() => handleClick(userInput)}  className="absolute left-2 top-[0.2rem] cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                            <path d="M43.242 34.755L36.8145 28.395C35.6805 27.27 34.167 26.64 32.5335 26.64C32.0025 26.64 31.473 26.715 30.9735 26.85L28.8885 24.78C30.7035 22.23 31.761 19.11 31.761 15.75C31.761 7.05 24.651 0 15.8805 0C7.11 0 0 7.05 0 15.75C0 24.45 7.11 31.5 15.8805 31.5C19.0725 31.5 22.0515 30.555 24.5325 28.935L26.7105 31.095C26.5605 31.59 26.5005 32.115 26.5005 32.64C26.5005 34.245 27.1185 35.76 28.2705 36.885L34.6815 43.245C35.817 44.37 37.3455 45 38.964 45C40.584 45 42.0945 44.37 43.245 43.245C45.585 40.905 45.585 37.095 43.242 34.755ZM3.027 15.75C3.027 8.715 8.787 3 15.882 3C22.977 3 28.737 8.715 28.737 15.75C28.737 22.785 22.974 28.5 15.882 28.5C8.79 28.5 3.027 22.785 3.027 15.75ZM41.094 41.13C39.915 42.3 37.9935 42.3 36.8145 41.13L30.402 34.755C29.8275 34.2 29.5245 33.45 29.5245 32.64C29.5245 31.83 29.8425 31.08 30.402 30.525C30.9765 29.955 31.7325 29.64 32.535 29.64C33.351 29.64 34.11 29.955 34.683 30.525L41.0955 36.885C42.2745 38.055 42.2745 39.96 41.0955 41.13H41.094Z" fill="#4E5254"/>
                            </svg>
                        </div>
                        <input onClick={() => setShowResults(true)} onChange={handleChange} value={userInput} className="bg-white rounded-[25px] h-[2.2rem] w-[25rem] max-[450px]:w-[15rem] max-[300px]:w-[10rem] max-[300px]:text-[0.8rem] px-2 pl-11 outline-none font-[600]" type="text" placeholder="Search location..."/>
                    </div>
                    {showResults&& userInput.length > 0 &&
                    <div className='bg-white rounded-[1rem] p-1 px-8 font-bold text-[1rem] absolute w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden h-[13rem]'>
                        {cityElement}
                    </div>}
                </div>
                
             </div>
        </>
    )
}