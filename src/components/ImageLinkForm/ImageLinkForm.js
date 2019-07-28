import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
        <section>
            <p className="f3 white">
                {'This App will detect faces in your pictures!!'}
            </p>
            <div className="center">
                <div className="center form pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type="text" />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-black">Detect</button>
                </div>
            </div>
        </section>
    )
}

export default ImageLinkForm;