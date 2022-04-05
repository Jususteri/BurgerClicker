import burger from './images/burger.png';
import React, { useState } from 'react';

function Burger(props) {
    const [pressed, setPressed] = useState(false);
    const classValue = pressed ? "burger__img burger__img--pressed" : "burger__img";
      return (
        <div className="burger">
        <img 
        src={burger} 
        className={classValue}
        alt="" 
        onClick={props.onClick}
        onPointerDown={() => setPressed(true)}
        onPointerUp={() => setPressed(false)}
        />
        </div>
      );
    }

    export default Burger;