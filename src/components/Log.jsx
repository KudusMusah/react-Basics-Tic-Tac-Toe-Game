export default function Log({turns}) {
    return <ol id="log">
        {turns.map((gameTurn) => 
            <li key={`${gameTurn.square.rowIndex}${gameTurn.square.colIndex}`}>{gameTurn.player} Selected square ({gameTurn.square.rowIndex}, {gameTurn.square.colIndex})</li>
        )}
    </ol>
}