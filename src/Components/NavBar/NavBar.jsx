import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../Styles/styles.css'
import LoginIcon from '../Login/LoginIcon';
import SearchBar from '../Search/SearchBar';
import PokeLogo from './Logo/PokeLogo';


const NavBar = () => {
    return (
        <div className='navBar'>
            <LoginIcon/>
        <NavLink to='/'>
            <PokeLogo/>
        </NavLink>
            <NavLink to='/pokemons/all'>
            <button>TODOS</button>
        </NavLink>
        </div>
    )
}

export default NavBar
