// We have a parent component, that renders three
// CustomButton components which are simple buttons.
// Each time the user presses one of the buttons, the
// parent should show which color in the button was
// selected.
// 1. Create a CustomButton component. //done

import { useState } from "react";

const CustomButton =({color,onClick})=>{
return <button style={{backgroundColor:color , width:"100px", height:'50px', display:'flex' ,flexDirection:'column' , justifyContent:"space-between"}}  onClick={() => onClick(color)}>{color} </button>
}

// i create a custom button when i click on btn that hava a color take the color 
 const Parent =()=>{
   const [selectedColor,setselectedColor] =useState(null)

  const  ClickHandel =(color)=>{
setselectedColor(color)
  }
    const colors = ["blue","red","yellow"];

    return(

    <div>
    {colors.map((color) => (
        <CustomButton key={color} color={color} onClick={ClickHandel} />
      ))}
<p style={{fontSize:'20px',fontWeight:'bold'}}>
    the selected color is  ::  {selectedColor }
</p>
    </div>
    )
    // render custom btn / simple btn 
 }
  export default Parent