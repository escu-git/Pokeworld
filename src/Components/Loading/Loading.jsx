import React from 'react'
import pokeImage from '../../assets/icons/greenPokeball.svg'

const Loading = () => {
    
    return (
        <div className='loadingContainer'>
            <img src={pokeImage} alt='Loading spinner' className='spinnerImage'/>
        </div>
    )
}

export default Loading
