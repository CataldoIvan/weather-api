import React ,{useEffect, useState}from "react"
import logo from './logo.svg';
import './App.css';
import Form from "./Form/Form";
import MainInfo from "./MainInfo/MainInfo";
import Axios from "axios"

function App() {
const[data,setData]=useState(null)

useEffect(()=>{
  loadInfo()
},[])

const loadInfo =async  (city="buenos aires")=>{

 fetch(`http://api.weatherapi.com/v1/current.json?key=fde928b461004847a7121945222405&q=${city}&aqi=no`)
.then((data)=>data.json())
.then((res)=>setData(res))
console.log(data);
  /* 
Axios.get(`http://api.weatherapi.com/v1/current.json?key=fde928b461004847a7121945222405&q=${city}&aqi=no`)
.then(Response=>{
  setData(Response.data)
  console.log(Response.data)
})
 */
  /* try {
    const request=await fetch(`http://api.weatherapi.com/v1/current.json?key=fde928b461004847a7121945222405&q=${city}&aqi=no`)
    const requesyJson=await request.json()
    setData(requesyJson)
    if(data){
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log(city);
    
  }
  */

}
const handleChangeCity=(city)=>{
  loadInfo(city)
}

  return (
    <div className="App">
      
     <button onClick={loadInfo}>click</button>
      <div>
      {/* {data?.current.cloud} */}
      <Form onChangeCity={handleChangeCity}/>
      </div>
      <div>
      {data? 
        <MainInfo weather={data}/>
      :null}
      </div>
     
        {data?
      <iframe className="iframe" src={`https://maps.google.com/?ll=${data.location.lat},${data.location.lon}7&z=10&t=m&output=embed`} height="600" width="800" style={{border:0}} allowfullscreen  aria-hidden="false" tabindex="0"></iframe>
         :null}
      
    </div>

  );
}

export default App;
