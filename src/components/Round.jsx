import React from 'react'
import "../styles/Round.scss"

function Round({ url }) {
    return (
        <div className='Round-main'>
            <img className='Round-pic' src={url} alt="" />
        </div>
    )
}

export default Round