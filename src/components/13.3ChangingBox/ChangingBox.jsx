import React, { useState, useEffect } from 'react';

function ChangingBox() {
  const [color, setColor] = useState('red');
  const [shape, setShape] = useState('box');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
      setColor(getRandomColor());
      if (count === 4) {
        setShape('circle');
      }
    }, 500);
    return () => clearInterval(interval);
  }, [count]);

  function getRandomColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div>
      {shape === 'box' ? (
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: color
          }}
        />
      ) : (
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: color,
            borderRadius: '50%'
          }}
        />
      )}
    </div>
  );
}

export default ChangingBox;
