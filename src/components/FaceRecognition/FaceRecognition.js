import React from 'react'

const FaceRecognition = ({ imageUrl }) => {
    return (
        <section className="center ma">
            <div className="absolute mt2">
                <img id="inputImage" src={imageUrl} alt="recognition face" width="500px" height="auto" />
            </div>
        </section>
    )
}

export default FaceRecognition;