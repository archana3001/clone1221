import React, { useState } from 'react'
import "../styles/Test.scss"



function Test() {
    let imageurl = "html.png"
    const [count, setCount] = useState(null);
    return (
        <div className='Test-main'>
            <img className='Test-img' src={imageurl} alt="" />
            <div className='Test-tag'>
                <b>Hypertext Markup Language</b><br />
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </div>
            {count && <div className='Test-report'>
                <div className='Test-report1'>
                    <div className='Test-report-head'>
                        <h1>Update Score</h1>
                        <img className='Test-img' src={imageurl} />
                    </div>

                    <div className='Test-report-mid'>
                        <div className='Report-list'>
                            <span>1</span> Update your rank <input type="text" /><br />
                            <span>2</span> Update your profile <input type="text" /><br />
                            <span>3</span> Update you Score count <input type="text" /><br />

                        </div>
                    </div>
                    <button
                        className='Test-btn' onClick={() => {
                            setCount(null)
                        }
                        }>Save </button>
                </div>
            </div>}
            <button className='Test-btn' onClick={() => {
                setCount(1)
                console.log("jo")
            }
            }>Update</button>
        </div >
    )
}

export default Test