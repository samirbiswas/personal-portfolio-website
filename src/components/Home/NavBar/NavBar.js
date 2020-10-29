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
            <Link to='/about'>
                <li class="nav-item active ml-3">
                    <a className="nav-link text-light">ABOUT</a>
                </li>
            </Link>
            <li class="nav-item ml-3">
                <a class="nav-link text-light" href="/">SKILL</a>
            </li>
            <li class="nav-item ml-3">
                <a class="nav-link text-light" href="/">PORTFOLIO </a>
            </li>
            <li class="nav-item ml-3">
                <a class="nav-link text-light" href="/">BLOG</a>
            </li>
            <Link to='contact'>
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