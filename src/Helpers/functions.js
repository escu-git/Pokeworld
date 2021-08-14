
const fn = {
    importImages: async(requiredImages)=>{
        let images ={};
        requiredImages.keys().forEach((item, index)=>{
            images[item.replace('./', '',)] = requiredImages(item);
            return images
        })
        console.log(images)
    },
    fetchSpecificPokemon : async(id)=>{
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res=>res.json())      
    },
    fetchAllPokemons: async(pokemonSelection) =>{
        return fetch(`https://pokeapi.co/api/v2/${pokemonSelection}`)
        .then(res=>{return res.json()
        })
        .then(res=>{
            let results = res.results;
            let array = results.map(x=> x.url)
            return array
        }).then(res=>{let pokemons = res.map(x=>fetch(x)
            .then(res=>{
            return res.json()
        }))
        return Promise.all(pokemons)})
    },
    fetchFilteredPokemons: async(typeSelected, limit, offset)=>{
        return fetch(`https://pokeapi.co/api/v2/type/${typeSelected}?limit=${limit}&offset=${offset}`)
        .then(res=>{return res.json()}
        )
        .then(res=>{
            let results = res.pokemon;
            let urlArray = results.map(x=>x.pokemon.url)
            return urlArray
        }).then(res=>{let pokemons = res.map(x=>fetch(x)
            .then(res=>{
            return res.json()
        }))
        return Promise.all(pokemons)})
    }
}

module.exports= fn;