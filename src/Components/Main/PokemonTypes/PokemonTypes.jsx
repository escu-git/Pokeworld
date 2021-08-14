import React,{useState, useEffect} from 'react'
import PokeTypes from '../../PokeTypes/PokeTypes'

const PokemonTypes = ({show}) => {
    const[types, setTypes]=useState(null);

    const fetchTypes = async()=>{
        fetch('https://pokeapi.co/api/v2/type')
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            let results = res.results;
            let array = results.map(x=>x.url)
            return array;
        }).then(res=>{let pokemonTypes = res.map(x=>fetch(x)
            .then(res=>{
            return res.json()
        }))
        return Promise.all(pokemonTypes)}).then(res=>{setTypes(res)})
    }
    useEffect(()=>{
        fetchTypes()
    },[])
    
    return (
        <>{show?
        <div className='typeCardContainer'>
            {types?.map(type=>{return(<PokeTypes key={type.name} pokeData={type}/>)})}
        </div>
        :null}
        </>
    )
}

export default PokemonTypes
