import React from 'react'
import "../styles/Stat.scss"
import RoundCard from './RoundCard'

function Stat() {
    return (
        <div className='Stat-main'>
            <div className='Stat-head'><b>Comparison Graph</b></div>
            <div className='Stat-body'>
                <RoundCard url="rank.png" Head="190012" Desc="YOUR RANK" />
                <hr />
                <RoundCard url="per.png" Head="45" Desc="PERCENTILE" />
                <hr />
                <RoundCard url="corr.png" Head="12/22" Desc="CORRECT ANSWERS" />

            </div>
        </div>
    )
}

export default Stat