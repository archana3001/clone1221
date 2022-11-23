import React from 'react'
import "../styles/BarCard.scss"

function BarCard({ name, marks, color }) {
    return (
        <div className='Barcard-main'>{name}
            <div className='Barcard-show'>

                <div style={{
                    backgroundColor: '#eee',
                    // opacity: '0.1',
                    width: '55%',
                    height: "10px",
                    borderRadius: "10px"
                }}>
                    <div style={{
                        backgroundColor: color,
                        width: marks + '%',
                        opacity: "1",
                        height: "10px",
                        borderRadius: "10px"

                    }}></div>
                </div>
                <div style={{ color: color, marginRight: "10px" }}><b>{marks}%</b></div>

            </div>



        </div>

    )
}

export default BarCard