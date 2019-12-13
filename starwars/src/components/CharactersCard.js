import React from 'react';

const CharactersCard = props => {
    return (
        <div className = 'character-list' key = {props.id}>
            <h2>Character: {props.name}</h2>
            <p>Height: {props.height}</p>

        </div>
    )
}
export default CharactersCard;