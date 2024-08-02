import React, { useEffect } from "react";
import { useState } from "react";

 function Github ()
{
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch('https://api.github.com/users/zohaibakhtar28')
        .then(res => res.json())
        .then(data => {
            setData(data);
        })
    }, [])
    return(
        <>

        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">{data.name} <br /> Github Followers : {data.followers}</div>
        <img  className= " text-center " src= {data.avatar_url} alt="Github Profile Pic" width = { 300} />
        </>
    )

}

export default Github;