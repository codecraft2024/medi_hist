'use client';

import {useEffect, useRef, useState} from "react";
import {Fader} from "next/dist/client/components/react-dev-overlay/ui/components/fader";

function App() {
    let inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }


    return (
        <div>
            <h1>Page is working..</h1>
             <input  ref={inputRef} />
            <button className="classic-link" onClick={handleClick} >Click to Increment</button>
        </div>
    )
}

export default App;
