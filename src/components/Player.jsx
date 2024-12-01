import { useState } from "react"

export default function Player({playerName, playerSymbol, isActve, onUpdatePlayerName}){
    const [name, setName] = useState(playerName);
    const [isEditting, setIsEditting] = useState(false);

    function onButtonClicked() {
        setIsEditting((val) => !val);

        if(isEditting) {
            onUpdatePlayerName(playerSymbol, name)
        }
    }

    function onInputChanged(event) {
        setName(event.target.value);
    }

    let displayTag = <span className="player-name">{name}</span>;

    if (isEditting) {
        displayTag = <input type="text" onChange={onInputChanged} required value={name} />
    }



    return <li className={isActve ? "active" : ""}>
        <span className="player">
            {displayTag}
            <span className="player-symbol">{playerSymbol}</span>
        </span>
        <button onClick={onButtonClicked}>{isEditting ? "Save" : "Edit"}</button>
    </li>
}