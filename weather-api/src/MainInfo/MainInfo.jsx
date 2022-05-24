import React from "react";

const MainInfo=({weather})=>{

    return(
        <>
        <div>Ciudad: {weather?.location.name }</div>
        <img src={`http:${weather.current.condition.icon}`} alt="" />
        <div>Condicion:{weather.current.condition.text }</div>
        <div>Temperatura:{weather.current.temp_c}*</div>
        <div>Humedad:{weather.current.humidity}%</div>
 
        </>
    )
}
export default MainInfo;