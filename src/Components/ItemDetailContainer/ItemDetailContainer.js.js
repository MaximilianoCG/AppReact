import React, {useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../ItemDetail/ItemDetail.com';
import './ItemDetailContainer.css';

import { NavLink } from "react-router-dom";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios('https://breakingbadapi.com/api/characters')
        .then(res => setCharacters(res.data));
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, []);
    return (
        <div>
            {characters.map((char) => {
                return(
                    <div className='CharacterList-container'>
                        <NavLink to={`/detail/${char.char_id}`} className='Link'>
                        {isLoading ? <p>Loading...</p> : <CharacterCard data={char}/>}
                        </NavLink>
                    </div>
                );
            })}
        </div>
    )
};

export default CharacterList;
