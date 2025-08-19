'use client';

import {useRef} from "react";
import { redirect } from "next/navigation";

function App() {
    let inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    redirect("/login");

    return (
        <div>
            <h1>Page is working..</h1>
             <input  ref={inputRef} />
            <button className="classic-link" onClick={handleClick} >Click to Increment</button>
        </div>
    )
}

export default App;
