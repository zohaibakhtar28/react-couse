import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(()=> {
        

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]));

    }, [currency])
    return data;
}

export default useCurrencyInfo;



/*
    Our custom hook steps : -

    1.) Each hook return a variable and a function in array.
    2.) our function takes a currency variable and using useEffect() whenevr our currency changes we fetch data from an API.
    3.) data returned is String so we'll convert to JSON.
    4.) After fetchhing we save it in our variable data using a useState.
    5.) Return the data -> converted rate.
    6.) Export our hook to use in app.jsx

*/