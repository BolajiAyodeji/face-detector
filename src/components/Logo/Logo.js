import React from 'react'
import Tilt from 'react-tilt'
import FaceLogo from './logo.svg'
import './Logo.css'

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt bg-ddd br2 shadow-2" options={{ max : 50 }} style={{ height: 160, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop:"5px"}} src={FaceLogo} alt="Face Logo" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;