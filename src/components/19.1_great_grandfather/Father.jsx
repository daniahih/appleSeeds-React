import React, { useEffect } from "react";
import Son from "./Son";
import { useContext } from "react";
import { GiftConetext } from "./Grandfather";
function Father() {
  const giftContext = useContext(GiftConetext);

  useEffect(() => {
    giftContext.setGiftArray(["toy", "atari", "palystation"]);
  }, []);
  return (
    <div>
      <h1>Father </h1>
      <Son />
    </div>
  );
}

export default Father;
