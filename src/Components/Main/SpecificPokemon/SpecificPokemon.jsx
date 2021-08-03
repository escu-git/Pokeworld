import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router';
import '../../../Styles/styles.css';
import PokeCard from '../../PokeCards/PokeCard';
import SearchBar from '../../Search/SearchBar';
import fn from '../../../JavaScript/functions';
const SpecificPokemon = () =>{
    const[pokemon, setPokemon] = useState(null)
    let {id} = useParams();
    useEffect(()=>{
        if(id !== null || undefined){
            try{
                fn.fetchSpecificPokemon(id).then(res=>{
                   return setPokemon(res)
                })
            }catch(err){
                console.log(err)
            }
        }
    },[id])

    return (
        <div>
            <SearchBar/>
            <div>
                {pokemon && <PokeCard key={pokemon.id} pokeId={pokemon.name} pokemonData={pokemon}/>}
            </div>
        </div>
    )
}




export default SpecificPokemon;
