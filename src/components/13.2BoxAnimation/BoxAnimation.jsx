import React, { useState, useEffect } from 'react';

function Box({ size }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setIsVisible(true), 1000);
    const hideTimer = setTimeout(() => setIsVisible(false), 5000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const style = {
    width: size,
    height: size,
    backgroundColor: 'lightblue',
    display: isVisible ? 'block' : 'none',
  };

  return <div style={style}></div>;
}
 export default Box