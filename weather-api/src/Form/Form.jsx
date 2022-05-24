import React,{useState} from "react";

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
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>Buscar</button>
    </form>
    </>
)

}
export default Form;