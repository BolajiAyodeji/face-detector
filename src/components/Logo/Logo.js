import React from 'react'
import Tilt from 'react-tilt'
import FaceLogo from './logo.svg'
import './Logo.css'

const Logo = () => {
    return (
        <div className="ma2">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 140, width: 150 }} >
                <div className="pa2">
                    <img style={{paddingTop:"2px",width:"80%",height:"auto"}} src={FaceLogo} alt="Face Logo" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;