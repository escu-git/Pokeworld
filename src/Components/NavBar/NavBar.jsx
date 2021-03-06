import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../Styles/styles.css'
import LoginIcon from '../Login/LoginIcon';
import PokeLogo from './Logo/PokeLogo';


const NavBar = () => {
    return (
        <div className='navBar'>
            <LoginIcon/>
        <NavLink to='/'>
            <PokeLogo/>
        </NavLink>
        </div>
    )
}

export default NavBar
