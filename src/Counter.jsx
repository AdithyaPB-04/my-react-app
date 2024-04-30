//React hook= special functional components to use React features without writing class components(useState, useEffect, useContext, useReducer,useCallback, and more ....)
//useState() = a react hook that allows the creaton of a stateful variable and a setter function to update its value in the virtual dom[name,setName]

import React,{useState} from "react";

function Counter(){

    // const [name, setName] = useState("Guest");
    // const [age, setAge] = useState(0);
    // const [isEmployed, setIsEmployed] = useState(false);

    // const updateName = ()=>{
    //     setName("Spongebob");
    // }

    // const updateAge = ()=>{
    //     setAge(age + 1);
    // }

    // const updateIsEmployed = ()=>{
    //     setIsEmployed(!isEmployed);
    // }

    // return(<div>
    //     <p>Name:{name}</p>
    //     <button onClick={updateName}>Set Name</button>

    //     <p>Age:{age}</p>
    //     <button onClick={updateAge}>Increment Age</button>

    //     <p>Is employed :{isEmployed ? "Yes" : "No"}</p>
    //     <button onClick={updateIsEmployed}>Employee</button>
    // </div>
    // )
                        //Another Example
    const [count,setCount] = useState(0);

    const increment =()=>{
        setCount(count+1);
    }

    const decrement =()=>{
        setCount(count-1);
    }

    const reset =()=>{
        setCount(0);
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

export default Counter;
