import React from 'react';
import './HeaderMain.css';
import picture from '../../../images/samir.jpg';
import filess from '../../../images/Samir_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

library.add(fab, faCheckSquare, faCoffee)
const HeaderMain = () => {
    return (
        <div className='container'>
            <div style={{ marginTop: '10%' }} className="row ">
                <div className="col-md-6 ">
                    <div className='text-light offset-md-1 resume-button'>
                        <h4 className='text-success '>Hello! I am </h4>
                        <h1 className='name-design'>SAMIR BISWAS</h1>
                        <h3 className='text-success'>Front End Developer</h3>
                        <p className='description pb-3'>A front-end web developer is responsible for implementing visual
                            elements that users see and interact with in a web application.</p>
                        <a style={{ textDecoration: 'none' }} className="text-white bg-success p-3 rounded" href={filess} target="_blank">GET RESUME</a>
                        <Link style={{ textDecoration: 'none' }} to='/about'>
                            <a style={{ textDecoration: 'none', marginLeft: '5px' }} className="text-white bg-success p-3 rounded" >ABOUT ME</a>
                        </Link>


                    </div>
                </div>
                <div className="col-md-6 pl-5">
                    <img className='image-setting' src={picture} alt="samir" />
                    <h5 className='text-success follow-me'>Follow Me </h5>
                    <div className="text-white d-flex  icon-settings">

                        <li className='a-color'>
                            <a href="https://github.com/samirbiswas/" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} /> </a>
                        </li>
                        <li className='a-color'>
                            <a href="https://www.linkedin.com/in/samirbiswas99/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /> </a>
                        </li>
                        <li className='a-color'>
                            <a href="https://medium.com/@samir99biswas" target="_blank"><FontAwesomeIcon icon={['fab', 'medium']} /> </a>
                        </li>


                    </div>

                </div>
            </div>

        </div>
    );
};

export default HeaderMain;