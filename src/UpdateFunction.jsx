//updater function = A function passed as an argument to setState(y => y + 1) usually ex. setYear(arrow function)
//Allow for safe updates based on the previous state
//Used with multiple state updates and asynchronous functions
//Good practice to use updater functions

import React,{useState} from "react";

function UpdaterFunction(){
    const [count,setCount] = useState(0);

    const increment =()=>{
        setCount(c=>c + 1);
        setCount(c=>c + 1);
        setCount(c=>c + 1);
    }

    const decrement =()=>{
        setCount(c=>c - 1);
        setCount(c=>c - 1);
        setCount(c=>c - 1);
    }

    const reset =()=>{
        setCount(c=>c = 0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={increment}>Increment</button>
            <button className="counter-button" onClick={reset}>Reset</button>
        </div>
    )
}

export default UpdaterFunction;