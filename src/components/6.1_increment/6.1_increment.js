import React ,{useState} from "react"

const Counter =( )=>{
    const [count,setcount]=useState(1)
    const clickHandler =() =>{
        setcount(count+1)
    }
return <div>
    <label> {count}</label>
    <button onClick={clickHandler}>increment</button>
</div>
} 
 export default Counter