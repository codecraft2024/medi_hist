'use client';

import {useState} from "react";

function App() {
    const [counter,setCounter] = useState<number>(0);

    const handleClick = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>Page is working..</h1>
            <div>Count : {counter}</div>
            <button className="classic-link" onClick={handleClick} >Click to Increment</button>
        </div>
    )
}

export default App;
