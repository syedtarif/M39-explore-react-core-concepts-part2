import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);  // useState is counter which is made by react

    function handleClick() {
        const newCount = count + 1;
        setCount(newCount);
    }

    function handleClick2() {
        const newCount = count - 1;
        setCount(newCount);
    }

    function handleClick3() {
        const newCount = count * 2;
        setCount(newCount);
    }

    return (
        <div style={{ border: '2px solid yellow' }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>Add</button>
            <button onClick={handleClick2}>Reduction</button>
            <button onClick={handleClick3}>Multiplication of Two</button>
        </div>
    )
}