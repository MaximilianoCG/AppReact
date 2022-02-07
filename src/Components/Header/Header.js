import React from 'react'
import './Header.css';
import img from './superman.png';

const Header = () => {
    return (
        <div className='Header'>
            <h1>Superman and Lois</h1>
            <img src={img} alt='Superman and Lois'
            width='200px' />
        </div>
    )
}

export default Header; 
