import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router';
import '../../../Styles/styles.css';
import PokeCard from '../../PokeCards/PokeCard';
import fn from '../../../Helpers/functions';
const SpecificPokemon = ({random}) =>{
    console.log(random)
    let {id} = useParams();
    const[searchId] =useState(id || random);
    const[pokemon, setPokemon] = useState(null)

    useEffect(()=>{
        if(searchId){
            try{
                fn.fetchSpecificPokemon(id || searchId).then(res=>{
                   return setPokemon(res)
                })
            }catch(err){
                console.log(err)
            }
        }
    },[id, searchId])

    return (
        <div>
            <div>
                {pokemon && <PokeCard key={pokemon.id} pokeId={pokemon.name} pokemonData={pokemon}/>}
            </div>
        </div>
    )
}




export default SpecificPokemon;
