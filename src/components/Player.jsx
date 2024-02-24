import { useState } from "react";

const Player = ({ name, symbol, isActive, onChangeName }) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ isName, setIsName ] = useState(name);


    const editHandler = () => {
        setIsEditing(isEditing => !isEditing)  //Best Practice

        if(isEditing) onChangeName(symbol, isName)
    }

    const changePlayerName = (e) => {
       setIsName(e.target.value)
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span className="player">
                {!isEditing ? (
                    <span className="player-name">{isName}</span>
                ) : (
                    <input type="text" value={isName} onChange={(value) => changePlayerName(value)} required />
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editHandler}>
                {!isEditing ? 'Edit' : 'Save'}
            </button>
        </li>
    )
}

export default Player;