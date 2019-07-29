import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css';

const app = new Clarifai.App({
 apiKey: '2b9d1cd1394c49199d54d87bffc05a2e'
});

const particlesParams = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (e) => {
    console.log(e.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');

    app.models.predict(
      "2b9d1cd1394c49199d54d87bffc05a2e",
      "https://www.bolajiayodeji.com/portfolio/images/bolaji.jpg")
      .then(
        function(response) {
          console.log(response)
        },
        function(err) {
            //
          }
        );
      }

  render() {
    return (
    <div className="App">
      <Particles className="particles"
              params={{particlesParams}}
      />
     <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm
      onInputChange={this.onInputChange}
      onButtonSubmit= {this.onButtonSubmit} /> 
      <FaceRecognition />}
    </div>
    );
  }
}

export default App;
