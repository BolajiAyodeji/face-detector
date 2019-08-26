import React from 'react'

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if(isSignedIn) {
        return (
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
                <p onClick={() => onRouteChange('profile')} className="f3 link dim white underline pa3 pointer">Profile</p>
            <p onClick={() => onRouteChange('signout')} className="f3 link dim white underline pa3 pointer">Log Out</p>
            </nav>
        );
        } else {
        return (
            <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className="f3 link dim white underline pa3 pointer">Sign in</p>
            <p onClick={() => onRouteChange('register')} className="f3 link dim white underline pa3 pointer">Register</p>
            </nav>
        );
    }
}

export default Navigation;