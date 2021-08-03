
const fn = {
    importImages: async(requiredImages)=>{
        let images ={};
        requiredImages.keys().forEach((item, index)=>{
            images[item.replace('./', '',)] = requiredImages(item);
            return images
        })
        console.log(images)
    },
}


module.exports= fn;


