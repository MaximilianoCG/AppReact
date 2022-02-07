import React, {useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../CharacterCard/CharacterCard';

import { NavLink } from "react-router-dom";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios('https://breakingbadapi.com/api/characters').then(res => 
        setCharacters(res.data)
        );
    }, []);
    return (
        <div>
            {characters.map(char => {
                return(
                    <div>
                        <NavLink to={`/detail/${char.char_id}`}>
                        <CharacterCard data={char}/>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    )
};

export default CharacterList;
