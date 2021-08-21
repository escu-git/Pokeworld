import React, {useState, useEffect} from 'react'
import SpecificPokemon from '../Main/SpecificPokemon/SpecificPokemon';

const Random = () => {
    const[random, setRandom]=useState()
    
    const randomNumber = () =>{
        let randomNumber = Math.floor(Math.random() * (899 - 1)) + 1;
        setRandom(randomNumber);
    }

    useEffect(()=>{
        randomNumber()
    },[])
    
    console.log(random)
    return (
        <div>
            <button>RANDOM!</button>
            {random && <SpecificPokemon random={random}/>}
        </div>
    )
}

export default Random
