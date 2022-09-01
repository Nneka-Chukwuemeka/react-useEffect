import React from 'react';
import { useEffect, useState } from 'react';
import '../assets/UseEffect.css';

function UseEffect() {
  //  state ....
  const [color, setColor] = useState('white');

  useEffect(() => {
    //Do Something
    document.body.style.backgroundColor = getRandomColor();
  }, [color]);

  //   click Even Handler
  const clickEventHandler = (event) => {
    event.preventDefault();
    setColor(getRandomColor());
  };

  const getRandomColor = () => {
    return '#' + Math.random().toString(16).slice(2, 8);
  };
  return (
    <div className="container" style={{ backgroundColor: color }}>
      <p> backgroundColor : {color} </p>
      <button onClick={clickEventHandler}> change color</button>
    </div>
  );
}

export default UseEffect;
