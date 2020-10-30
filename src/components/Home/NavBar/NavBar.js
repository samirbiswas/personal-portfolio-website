import React from 'react';
import './NavBar.css'
import filess from '../../../images/Samir_Resume.pdf'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand text-success logo-samir" href="/">SAMIR</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto ">
            <Link style={{textDecoration: 'none'}} to='/'>
                <li class="nav-item active ml-3">
                    <a className="nav-link text-light">HOME</a>
                </li>
            </Link>
            
            <Link style={{textDecoration: 'none'}} to='/about'>
                <li class="nav-item ml-3">
                    <a className="nav-link text-light">ABOUT</a>
                </li>
            </Link>
            
            <Link style={{textDecoration: 'none'}} to='/portfolio'>
                <li class="nav-item ml-3">
                    <a class="nav-link text-light" >PORTFOLIO </a>
                </li>
            </Link>
            <Link style={{textDecoration: 'none'}} to='/blog'>
                <li class="nav-item ml-3">
                    <a class="nav-link text-light">BLOG</a>
                </li>
                
            </Link>
            <Link style={{textDecoration: 'none'}} to='contact'>
            <li class="nav-item ml-3">
                <a class="nav-link text-light">CONTACT</a>
            </li>
            </Link>
            <li class="nav-item ml-3">
                <a class="nav-link text-light resume-btn" href={filess}>RESUME</a>
            </li>

   
    </ul>
   
  </div>
</nav>
        </div>
    );
};

export default NavBar;