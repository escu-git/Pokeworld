import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router';
import '../../Styles/styles.css';
import fetching from '../../JavaScript/functions';
import PokeCard from '../PokeCards/PokeCard';
import SearchBar from '../Search/SearchBar';

const MainContainer = () =>{
    const[pokemon, setPokemon] = useState(null)
    const[search, setSearch] = useState(null)
    let {id} = useParams();
    console.log(id)
    console.log(`Este es el useparams: ${id}`)
    useEffect(()=>{
        if(id !== null || undefined){
            try{
                fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res=>{
                return res.json()
                .then(res=>{
                   setPokemon(res)
                })
            })
            }catch(err){
                console.log(err)
            }
        }
    },[id])
    console.log(pokemon)
    return (
        <div>
            <SearchBar/>
            <div>
                {pokemon && <PokeCard key={pokemon.name} pokemonData={pokemon}/>}
            </div>
        </div>
    )
}




export default MainContainer
