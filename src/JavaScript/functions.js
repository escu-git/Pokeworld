
const fn = {
    pokemonsList: async(id) =>{
        try{
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res=>{
            return res.json()
            .then(res=>{
                fetch(res.results.url)
                .then(res=>{
                    console.log(res)
                    return res
                })
            })
        })
        }catch(err){
            console.log(err)
        }
    },
    importImages: async(requiredImages)=>{
        let images ={};
        requiredImages.keys().forEach((item, index)=>{
            images[item.replace('./', '',)] = requiredImages(item);
            return images
        })
        console.log(images)
    },

}


export default fn;


