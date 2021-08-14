import React from 'react'
import image from '../../assets/icons/masterPokeball.svg'
const ShowAllBtn = ({fn}) => {
    return (
        <div className='allBtn' onClick={()=>fn()}>
           <span>SHOW ALL</span>
           <img src={image} alt=''/>
           <span> POKEMONS!</span>
        </div>
    )
}

export default ShowAllBtn
