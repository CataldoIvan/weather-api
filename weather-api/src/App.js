import React ,{useEffect, useState}from "react"
import logo from './logo.svg';
import './App.css';
import Form from "./Form/Form";
import MainInfo from "./MainInfo/MainInfo";

function App() {
const[data,setData]=useState(null)

useEffect(()=>{
  loadInfo()
},[])

const loadInfo =async  (city="buenos aires")=>{
  try {
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
        <MainInfo weather={data}/>
      </div>
    </div>
  );
}

export default App;
