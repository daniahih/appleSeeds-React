import React, { useState } from "react";
import Father from "./Father";
import { createContext } from "react";
export const GiftConetext = createContext();

function Grandfather() {
  const [giftArray, setGiftArray] = useState([]);

  return (
    <div>
      <h1> Grand Father </h1>
      <GiftConetext.Provider value={{ giftArray, setGiftArray }}>
        <Father />
      </GiftConetext.Provider>
    </div>
  );
}

export default Grandfather;
