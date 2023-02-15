import React ,{useState} from "react"
import './6.2.css'
const Box = () =>{
     const [isVisable,setApperance] = useState(false)
      const clickHandler =()=>{
        setApperance(!isVisable)
      }
    return(

    <div className="parentBox">
<button onClick={clickHandler}>
show/hide
</button>
{isVisable && <div className="box"></div>}
    </div>
    )
}
 export default Box