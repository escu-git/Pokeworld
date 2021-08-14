import React from 'react'
import showImage from '../../assets/icons/superPokeball.svg'
import hideImage from '../../assets/icons/teamRocketPokeball.svg'

const HideShowBtn = ({state, fn}) => {
    return (
        <div className='hideShowBtn' onClick={()=>fn()}>
            <img className='hideShowImage' src={state? showImage : hideImage} alt=''/>
            <span>{state? 'HIDE MENU' : 'SHOW MENU'}</span>
        </div>
    )
}

export default HideShowBtn

