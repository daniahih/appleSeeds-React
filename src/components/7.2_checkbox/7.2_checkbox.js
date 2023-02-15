import React ,{useState} from "react"
const Checkbox =(props)=>{
    const [isChecked,setisChecked]=useState(false)
  const checked =()=>{
    setisChecked(!isChecked)
  }
    return(
    <div>
<input type="checkbox" id="checkbox" checked={props.isChecked}/>
<label>{props.discription}</label>

    </div>
    )
}
 export default Checkbox


 // what to add in    index.js
//   <div>
// <Checkbox discription='I read the term of the app' />
// <Checkbox discription='I accept the term of the app' />
// <Checkbox discription='I want to get the weekly news letter'/>
// <Checkbox discription='I want to get offers and sales'/>

//     </div>