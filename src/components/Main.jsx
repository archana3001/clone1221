import React from 'react'
import Sidebar from './Sidebar'
import "../styles/Main.scss"
import Test from './Test'
import Stat from './Stat'

function Main() {
    return (
        <div className='Main-div'>
            <Sidebar />
            <div className='Main-mid'>
                <div className='Main-head'>Skill Test</div>
                <div className='Main-test'>
                    <Test />
                </div>
                <div className='Main-stat'>
                    <Stat />
                </div>
                <div className='Main-compare'></div>

            </div>
            <div className='Main-right'>
                <div></div>
                <div className='Main-syllabus'></div>
                <div className='Main-analysis'></div>
            </div>

        </div>
    )
}

export default Main