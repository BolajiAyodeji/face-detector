import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <section className="center ma">
            <div className="absolute mt2">
                <img id="inputImage" src={imageUrl} alt="recognition face" width="500px" height="auto" />
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </section>
    )
}

export default FaceRecognition;