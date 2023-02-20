import { useState,useEffect } from "react"
// 1. Create in a component a state called “favoriteColor” and
// its value some color string.//done
// . In your, JSX creates an h1 element that will display your
// favorite color coming from the state. e.g. “My favorite
// color is blue //done
//. In your, JSX create an empty div with an id attribute.
// 4. Just when the component mounts to the screen create a
// setTimeout function that will be invoked after 1 second.
// Inside your setTimeout function change the state’s value
// of your favoriteColor to some other color. //done 
 const FavoriteColor =()=>{
 const [color,setColor] = useState('blue')
 useEffect(() => {
    const timer = setTimeout(() => {
        setColor('Red')}, 1000);}, []);// after 1 sec i what to change the color so i will use the state to make the new color by set color  
    //empty array mean 
  // Runs ONCE after initial rendering
    return ( //initail rendering
        <>
        <h1>
            your favourite color is {color}
        </h1>
        <div id='emptydiv'>
            
        </div>
        
        </>
    )
 }
  export default FavoriteColor