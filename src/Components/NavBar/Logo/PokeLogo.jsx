import React from 'react'
import pokemonLogo from '../../../assets/images/pokemonLogo.png';

const PokeLogo = () => {
    return (
        <div>
           <img src={pokemonLogo} alt='Pokémon' className='pokemonLogo'/>
        </div>
    )
}

export default PokeLogo
