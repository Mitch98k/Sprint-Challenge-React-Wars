import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharactersCard from './CharactersCard';

export default function CharacterList() {
    const [people, setPeople] = useState([]);
useEffect(() => {
    axios
    .get('https://swapi.co/api/people/')
    .then(response => {
      console.log(response);
      setPeople(response.data.results);
    })
    .catch(error => {
      console.log("data not returned", error);
    });
    }, []);
    return (
        <div>
        {people.map(characters => {
            return (
                <CharactersCard
                key = {characters.id}
                name = {characters.name}
                height = {characters.height}
                mass = {characters.mass}
                hair = {characters.hair_color}
                skin = {characters.skin_color}
                eyes = {characters.eye_color}
                birthyear = {characters.birth_year}
                gender = {characters.gender}
                homeworld = {characters.homeworld}
                />
            );
        })}
        </div>
    );
}