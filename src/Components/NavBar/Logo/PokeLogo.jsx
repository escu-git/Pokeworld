import React from 'react'
import '../../../Styles/styles.css'
import pokemonLogo from '../../../assets/images/pokemonLogo.png';

const PokeLogo = () => {
    return (
        <div>
           <img src={pokemonLogo} alt='Pokémon' className='pokemonLogo'/>
        </div>
    )
}

export default PokeLogo
