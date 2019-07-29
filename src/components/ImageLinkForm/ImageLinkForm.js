import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <section>
            <p className="f4 white">
                {'Enter the image URL below.'}
            </p>
            <div className="center">
                <div className="center form pa4 br3 shadow-5">
                        <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
                    <button 
                     className="w-30 grow f4 link ph3 pv2 dib white bg-black"
                     onClick={onButtonSubmit}>
                         Detect
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ImageLinkForm;