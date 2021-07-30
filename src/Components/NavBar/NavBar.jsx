import React from 'react'
import '../../Styles/styles.css'
import LoginIcon from '../Login/LoginIcon';
import PokeLogo from './Logo/PokeLogo';


const NavBar = () => {
    return (
        <div className='navBar'>
            <PokeLogo/>
            <LoginIcon/>
        </div>
    )
}

export default NavBar
