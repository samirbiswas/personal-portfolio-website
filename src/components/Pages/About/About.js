import React from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import filess from '../../../images/Samir_Resume.pdf';
const About = () => {
    return (
       
            <div  style={{backgroundColor:'#1d293a',height:'500px'}}>
            <NavBar></NavBar>
           <div className="container">
           <div className="row text-white">
                <div className="col-md-6 mt-5 ">
                    <h3 className='border-bottom border-success mb-3'>About Me</h3>
                    <p className='text-justify mb-4'>Hello! I'm Samir Biswas, a passionate Front End Developer.My core skill is based on JavaScript and I love to do most of the things
                     using JavaScript. I have graduated with a bachelor's degree in Computer
                     Science Engineering from State University Of Bangladesh.
                    I am available for any kind of job opportunity that suits my interests.</p>
                      <a className="text-white bg-success p-3 rounded" href={filess}>GET RESUME</a>
                </div>
                <div className="col-md-6">
                    
                </div>
            </div>
           </div>
        </div>
      
    );
};

export default About;