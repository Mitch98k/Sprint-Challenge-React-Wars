import React from 'react';
import {MyCharacter, CharMass, CharSkin, CharBirth} from './Styles.js';

const CharactersCard = props => {
    return (
        <div className = 'character-list' key = {props.id}>
            <MyCharacter>Character: {props.name}</MyCharacter>
            <p>Height: {props.height}</p>
            <CharMass>Weight: {props.mass}</CharMass>
            <p>Hair color: {props.hair}</p>
            <CharSkin>Skin type: {props.skin}</CharSkin>
            <p>Eye color: {props.eyes}</p>
            <CharBirth>Born: {props.birthyear}</CharBirth>
            <p>Gender: {props.gender}</p>
        </div>
    )
}
export default CharactersCard;