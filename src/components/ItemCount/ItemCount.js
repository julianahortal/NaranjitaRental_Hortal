import React from 'react';


const ItemCount = ({stock, counter, setCounter}) => {
    
    
    const clickSum = () => {
        counter<stock ?  setCounter(counter+1) :  setCounter(counter)
    }

    let clickRest= () => {
        counter< 1 ? setCounter(counter): setCounter(counter-1)
    } 

  return <div>
            <button id="btnRest" onClick={clickRest}>-</button>
            <span>{counter}</span>
            <button id="btnSum" onClick={clickSum}>+</button>
        </div>;
};

export default ItemCount;
