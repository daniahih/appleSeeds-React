import {useState} from "react"
function AddPerson (){
const [firstName, setFirstName] = useState('')
const [LastName, setLastName] = useState('')
const [Age, setAge] = useState('')
const [Textarea, setTextarea] = useState('')
const SubmitHandler=(e)=>{
    e.preventDefault()
return (
    <div>
    </div>
)
}
    return <div style={{marginLeft:"20vw" , marginTop:"20vh"}}>
        <form onSubmit={SubmitHandler} style={{display:'flex' , flexDirection:'column' , width:"200px"}}>
    
        <label> First Name</label>
        <input type='text' onChange={(e)=>setFirstName(e.target.value)}/>
        <label> Last Name</label>
        <input type='text' onChange={(e)=>setLastName(e.target.value)}/>
        <label> Age</label>
        <select name="age" id="age" onChange={(e)=>setAge(e.target.value)}>
      <option value="0-15"> Age 0-15</option>
      <option value="0-30">Age 0-30</option>
      <option value="0-45">Age 0-45</option>
      <option value="0-60">Age 0-60</option>
    </select>
    <label> Free Text</label>
    <textarea id="textarea"  rows="4" cols="50" onChange={(e)=>{setTextarea(e.target.value)}}></textarea>
    <button >Countine</button>
    </form>

   
    <FormPage firstName={firstName}  LastName={LastName} Age={Age} Textarea={Textarea}/>
    </div>
}
const FormPage =(props)=>{
    return(
        <div>
            <h1>{props.firstName} </h1>
            <h1>{props.LastName} </h1>
            <span>{props.Age}</span>
            <p>{props.Textarea}</p>
        </div>
    )
}

export default AddPerson;