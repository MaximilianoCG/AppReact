import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './CharacterDetail.css';
import CharacterCard from '../../Components/ItemDetail/ItemDetail.com';
import Spinner from '../../Components/Spinner/Spinner';


const CharacterDetail = () => {
    const [character, setCharacter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let id = useParams();

    let userID = id.id;

    console.log(userID);

    useEffect(() => {
        axios(`https://www.breakingbadapi.com/api/characters/${userID}`).then((res) => setCharacter(res.data));
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [userID]);

    return (
        <div className='Character-list-Container'>
            {isLoading ? (
                <Spinner/>
            ) : (
                <div className='CharacterList-detail'>
                    {character.map((char) => {
                        return (
                            <div key={char.char_id}>
                                <CharacterCard data={char} />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default CharacterDetail;

/* {<img src={character.img} alt='img'/>
            <p>{character.name}</p>
            <p>{character.status}</p>} */