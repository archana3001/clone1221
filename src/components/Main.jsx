import React from 'react'
import Sidebar from './Sidebar'
import "../styles/Main.scss"
import Test from './Test'
import Stat from './Stat'
import BarCard from './BarCard'

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
                <div className='Main-syllabus'>
                    <div style={{
                        marginLeft: '50px',
                        marginBottom: "14px",
                        marginTop: "40px"
                    }}><b >
                            Syllabus wise Analysis</b></div>

                    <BarCard name="HTML Tools, Forms, History " marks={80} color="#438AF6" />
                    <BarCard name="Tags & References in HTML" marks={60} color="#FF9142" />
                    <BarCard name="Tables & CSS Basics " marks={24} color="#FB5E5E" />
                    <BarCard name="Tables & CSS Basics" marks={96} color="#2EC971" />

                </div>
                <div className='Main-analysis'></div>
            </div>

        </div>
    )
}

export default Main