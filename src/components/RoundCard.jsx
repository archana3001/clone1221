import React from 'react'
import Round from './Round'
import "../styles/Round.scss"

function RoundCard({ url, Head, Desc }) {
    return (
        <div className='RoundCard'>
            <Round url={url} />
            <div className='RoundCard-desc'>
                <b>
                    {Head}
                </b><br />
                <p>{Desc}</p>
            </div>

        </div>
    )
}

export default RoundCard