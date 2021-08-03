
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
    }
}


module.exports= fn;


