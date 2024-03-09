import { useEffect, useState } from "react"

export default function Users() {

    const usersStyle = {
        border: '2px solid yellow',
        padding: '15px',
        borderRadius: '15px'
    }

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h3>Users: </h3>
        </div>
    )
}

/**
 * 1. declaring a state to hold the data.
 * 2. useEffect with call back and dependency array.
 * 3. use fetch to load data
 * 4. 
 */