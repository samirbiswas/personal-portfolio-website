import React from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import filess from '../../../images/Samir_Resume.pdf';
import './About.css'
import Footer from '../../Footer/Footer';
const About = () => {
    return (
       
            <div  style={{backgroundColor:'#1d293a',height:'650px'}}>
            <NavBar></NavBar>
           <div className="container">
           <div style={{marginTop:'3%'}} className="row text-white">
                <div className="col-md-5 mt-5 ">
                    <h3 className='mb-3 page-title'>About Me</h3>
                    <p className='text-justify mb-4'>Hello! I'm Samir Biswas, a passionate Front End Developer.My core skill is based on JavaScript and I love to do most of the things
                     using JavaScript. I have graduated with a bachelor's degree in Computer
                     Science Engineering from State University Of Bangladesh.
                    I am available for any kind of job opportunity that suits my interests.</p>
                      <a style={{textDecoration: 'none'}} className="text-white bg-success p-3 rounded" href={filess}>GET RESUME</a>
                </div>
                <div style={{marginTop:'3%'}} className="col-md-6 offset-md-1 offset-sm-0">
                    <div>
                        <h3 className='page-title'>My Skills Set</h3>
                            <div className="technology">
                                <span>JavaScript</span>
                                <span>ES6</span>
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                
                                <span>MySQL</span>
                                <span>Git</span>
                                <span>Babel</span>
                                <span>NPM</span>
                                <span>VS Code</span>
                                <span>REST API</span>
                                <span>Firebase</span>
                                <span>Wordpress</span>
                                <span>Python</span>
                                <span>C</span>
                        </div>
                    </div>
                    <div>
                    <h3 className='page-title mt-3'>I want to work</h3>
                    <div className="technology">
                        <span>JavaScript</span>
                        <span>ES6</span>
                        <span>React.js</span>
                        <span>Rest API</span>
                        <span>Express.js</span>
                        <span>MongoDB</span>
                        
                       </div>
                    </div>
                </div>
            </div>
           </div>
           <div style={{marginTop:'15%'}}>
           <Footer></Footer>
           </div>
        </div>
      
    );
};

export default About;