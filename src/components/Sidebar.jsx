import React from 'react'
import "../styles/Sidebar.scss"
function Sidebar() {
    return (
        <div className='Sidebar-main'>
            <div className='Option'><img src="dash.png" /> Dashboard</div>
            <div className='Option'><img src="skill.png" /> Skill Test</div>
            <div className='Option'><img src="intern.png" /> Internships</div>

        </div>

    )
}

export default Sidebar