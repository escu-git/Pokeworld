import React from 'react'
import fn from '../../JavaScript/functions';

const Loading = async() => {
    let images = await fn.importImages(require.context('../../assets/icons', false, /\.(png|jpeg|svg)$/))

    console.log(images)

    return (
        <div>
            <img src={images.pokeball.svg} alt='Loading spinner'/>
        </div>
    )
}

export default Loading
