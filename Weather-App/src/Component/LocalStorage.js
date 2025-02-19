import React, { useEffect, useState } from 'react'

import Weather from './Weather';

function LocalStorage() {
   
    const storedItems = JSON.parse(localStorage.getItem("city")) || [];   // initialize an empty array.
    const [city , setCity]  = useState(storedItems); 

    useEffect(()=>{
        console.log("Add city :",city)
        localStorage.setItem("(city)",JSON.stringify(city)); // method converts a JavaScript object into a JSON string.
    },[city])

    
  return (
    <div>
        <Weather items={city} setCity={setCity}/>
    </div>
  )
}

export default LocalStorage