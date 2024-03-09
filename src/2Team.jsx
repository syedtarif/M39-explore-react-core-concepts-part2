import { useState } from "react"

export default function Team() {
    //declaring stateCount
    const [team, setTeam] = useState(11);

    // handling btn for adding player
    const handleAdd = () => {
        setTeam(team + 1);
    }

    // handling btn for removing player
    const handleRemove = () => {
        setTeam(team - 1);
    }

    //styling on div
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}