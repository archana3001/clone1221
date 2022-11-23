import React from 'react'
import "../styles/Test.scss"


function Test() {
    return (
        <div className='Test-main'>
            <img className='Test-img' src="html.png" alt="" />
            <div className='Test-tag'>
                <b>Hypertext Markup Language</b><br />
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </div>
            <button className='Test-btn'>Update</button>
        </div >
    )
}

export default Test