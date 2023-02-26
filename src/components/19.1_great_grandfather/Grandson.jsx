import React from "react";
import { useContext } from "react";
import { GiftConetext } from "./Grandfather";

// const GiftConetext = createContext([]);
function Grandson() {
  const gifts = useContext(GiftConetext);
  const Draw = () => {
    return (
      <ul>
        {gifts.giftArray.map((gift, index) => {
          return <li key={index}> {gift}</li>;
        })}
      </ul>
    );
  };
  return (
    <div>
      <h1> Grand son </h1>
      <h1>Gifts</h1>
      <div>{Draw()}</div>
    </div>
  );
}

export default Grandson;
