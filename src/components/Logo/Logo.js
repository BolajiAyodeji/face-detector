import React from 'react'
import Tilt from 'react-tilt'
import FaceLogo from './logo.svg'
import './Logo.css'

const Logo = () => {
    return (
        <div className="ma2">
            <Tilt className="Tilt br5 shadow-2" options={{ max : 50 }} style={{ height: 85, width: 100 }} >
                <div className="pa2">
                    <img style={{paddingTop:"2px",width:"80%"}} src={FaceLogo} alt="Face Logo" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;