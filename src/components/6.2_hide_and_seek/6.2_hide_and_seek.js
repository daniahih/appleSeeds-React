import React, { useState } from 'react';
import './6.2.css'
const Box = () =>{
    const [show, setShow] = useState(true);
    function toggleShow() {
        setShow(!show);
      }


    return (

    <div className='parentBox' >
        <button onClick={toggleShow}> show/hide </button>
        <div className='box'>

        </div>
    </div>
    )
}

 export default Box