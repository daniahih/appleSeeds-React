import React, { useState } from 'react';

const Counter =() =>{
    const [count,setcount]=useState(0);
    const increment =() =>{
        return setcount(count +1)
    }
return (

<div>
    <label> counter :{count}  </label>
    <button onClick={ increment}> increment</button>
</div>

)

}
export default Counter