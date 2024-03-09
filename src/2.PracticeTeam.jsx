import { useState } from "react"

export default function PracticeTeam() {
    // declaring useState hooks for handling the Lodo Player count
    const [player, setPlayer] = useState(4)
    // handling plus and minus player
    const handlePlayerPlus = () => { setPlayer(player + 1); };
    const handlePlayerMinus = () => { setPlayer(player - 1); }
    // styling Lodo box
    const styleLodoBox = {
        border: '2px solid cyan',
        padding: '15px',
        margin: '15px',
        borderRadius: '15px'
    }

    return (
        <div style={styleLodoBox}>
            <button onClick={handlePlayerPlus}>Plus</button>
            <h3>Lodo: {player}</h3>
            <button onClick={handlePlayerMinus}>Minus</button>
        </div>
    )
}