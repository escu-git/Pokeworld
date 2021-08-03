import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../Styles/styles.css'
import LoginIcon from '../Login/LoginIcon';
import PokemonTypes from '../Main/PokemonTypes/PokemonTypes';
import PokeLogo from './Logo/PokeLogo';


const NavBar = () => {
    return (
        <div className='navBar'>
        <NavLink to='/'>
            <PokeLogo/>
        </NavLink>
            <LoginIcon/>
            <NavLink to='/all'>
            <button>TODOS</button>
            </NavLink>
        </div>
    )
}

export default NavBar
