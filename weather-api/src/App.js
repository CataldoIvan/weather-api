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
    <div className="App container">
      
     
     
      {/* {data?.current.cloud} */}
      <Form onChangeCity={handleChangeCity}/>
      
      <br/>
      <div>
      {data? 
        <MainInfo weather={data}/>
      :null}
      </div>
     
       
      
    </div>

  );
}

export default App;
