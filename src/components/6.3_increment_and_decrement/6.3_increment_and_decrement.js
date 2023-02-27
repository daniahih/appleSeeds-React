import React, { useState } from "react";
import "./6.3.css";
const IncrementAndDecrement = () => {
  const [count, setcount] = useState(0);
  const clickHandlerIN = () => {
    if (count >= 10) {
      return (count = 10);
    }
    setcount(count + 1);
  };
  const clickHandlerDE = () => {
    if (count <= -10) {
      return (count = -10);
    }
    setcount(count - 1);
  };

  return (
    <div>
      <button onClick={clickHandlerIN}> Increment</button>
      <button onClick={clickHandlerDE}> Decrement</button>
      <label className={count > 0 ? "green" : " red"}>count :{count}</label>
    </div>
  );
};

// We want to create two buttons and one label. //done
// The first button will increment the counter. //done
// The second button will decrement the counter //done
// A label that displays the current value. //done
// The counter range can only be from -10 to 10. //done
// If the counter is negative the label will be a red color.
export default IncrementAndDecrement;
