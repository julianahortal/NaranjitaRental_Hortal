import React from 'react';


const ItemCount = () => {
    const [counter, setCounter] = React.useState(1);
    
    const clickSum = () => {
        setCounter(counter++)
    }

    let clickRest= () => {
        setCounter(counter--)
    }
    
    if(counter<1) {
        clickRest = () => setCounter(1);
      }

  return <div>

            <button id="btnRest" onClickFunc={clickRest}>-</button>
            <span>{counter}</span>
            <button id="btnSum" onClickFunc={clickSum}>+</button>

  </div>;
};

export default ItemCount;
