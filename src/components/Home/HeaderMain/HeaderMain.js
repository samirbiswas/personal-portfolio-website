import React from 'react';
import './HeaderMain.css';
import picture from '../../../images/samir.jpg';
import filess from '../../../images/Samir_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)
const HeaderMain = () => {
    return (
        <div className='container'>
           <div className="row ">
              <div className="col-md-6 ">
                    <div className='text-light mt-5 offset-md-1 resume-button'>
                        <h3 className='text-success '>Hello! I am </h3>
                        <h1 className='name-design'>SAMIR BISWAS</h1>
                        <h2 className='text-success mb-5'>Front End Developer</h2>
                        <a className="text-white bg-success p-3 rounded" href={filess}>GET RESUME</a>
                   
                    </div>
              </div>
              <div className="col-md-6 pl-5 mt-5 ">
                  <img className='image-setting' src={picture} alt="samir"/>
                  <h5 className='text-success follow-me'>Follow Me </h5>
                  <div className="text-white d-flex  icon-settings">

                  <li>
                      <a href="https://github.com/samirbiswas/"><FontAwesomeIcon icon={['fab', 'github']} /> </a>
                  </li>
                  <li>
                      <a href="https://www.linkedin.com/in/samirbiswas99/" ><FontAwesomeIcon icon={['fab', 'linkedin']} /> </a>
                  </li>
                  <li>
                      <a href="https://medium.com/@samir99biswas"><FontAwesomeIcon icon={['fab', 'medium']} /> </a>
                  </li>
                  
                      
                  </div>
                 
              </div>
           </div>
        </div>
    );
};

export default HeaderMain;