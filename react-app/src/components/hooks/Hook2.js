import React, { useState } from 'react'

export default function Button() {

    const [buttonText,setButtonText] = useState('Clicke me, please')
    
    function handleClick(){
        return setButtonText('Thanks, been clicked')
    }


    return <button class="bg-success" onClick={handleClick}>{buttonText}</button>

}

