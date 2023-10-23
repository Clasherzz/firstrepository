
import React, { Component } from 'react'
import './About.css'


class About extends Component {
  render() {
    return(
        <>
        <div>
            <h1>
                About me
            </h1>
            <span class="material-symbols-outlined">
            info
            </span>
            
            <p>
                Hello guys my name is K Govind I am a 1st Year computer student in GEC Thrissur.
                I am also a programmer currently doing web development.I am fluent in python , 
                javascript,HTML, and CSS.
            </p>
           
        </div>
         <img src='./components/me.png'></img>
        </>
    );
  };
}

export default About