import React from 'react';
import './ItemCount.css'


const ItemCount = ({stock, counter, setCounter}) => {
    
    
    const clickSum = () => {
        counter<stock ?  setCounter(counter+1) :  setCounter(counter)
    }

    let clickRest= () => {
        counter< 1 ? setCounter(counter): setCounter(counter-1)
    } 

  return <div>
            <button className='btn-count' id="btnRest" onClick={clickRest}>-</button>
            <span className='input'>{counter}</span>
            <button  className='btn-count' id="btnSum" onClick={clickSum}>+</button>
        </div>;
};

export default ItemCount;
