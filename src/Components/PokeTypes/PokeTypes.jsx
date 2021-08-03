import React, {useState} from 'react'

const PokeTypes = ({pokeData}) => {
    let pokeTypeColor = pokeData.name
    const[selected, setSelected]=useState(null)

    const clickHandler = (type) =>{
        console.log(type)
    }

    return (
        <div class={`typeCard ${pokeTypeColor}`} onClick={()=>{clickHandler(pokeData.name)}}>
            {pokeData.name}
        </div>
    )
}

export default PokeTypes
