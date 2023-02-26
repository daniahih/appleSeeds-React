import React, { useState } from "react";
export const ThemeContext = React.createContext();
export default function MoodChange() {
  const [darkTheme, setdarkTheme] = useState(false);

  function ToggleTheme() {
    setdarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <>
      <ThemeContext.provider value={darkTheme}>
        <button onClick={ToggleTheme}></button>
      </ThemeContext.provider>
    </>
  );
}
