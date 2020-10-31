import React from 'react';
import Footer from '../Footer/Footer';


import Header from './Header/Header';


const Home = () => {
    return (
        <div>
            <Header></Header>
           
            <div className='footer-setting'>
            <Footer></Footer>
            </div>
           
        </div>
    );
};

export default Home;