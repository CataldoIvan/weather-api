import React,{useState} from "react";
import "./Form.css"
const Form =({onChangeCity})=>{
const [city,setCity]=useState(null)

const handleChange=(e)=>{
    let value=e.target.value.toLowerCase()
    
    setCity(value)   
}

const handleSubmit=(e)=>{
    e.preventDefault()
    onChangeCity(city)
  }

return(
    
    <form className="row" onSubmit={handleSubmit}>
        <input className="col-10" type="text" onChange={handleChange} />
        <button className="col-2">Buscar</button>
    </form>
    
)

}
export default Form;