import React from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import PortfolioDetail from '../PortfolioDetail/PortfolioDetail';
import agency from '../../../images/creative-agency.png';
import emajhon from '../../../images/emajhon-app.PNG';
import travel from '../../../images/hotel-booking-app.PNG';
import Footer from '../../Footer/Footer';
import './Portfolio.css'
const Portfolio = () => {

const projects=[
    {
        id:1,
        title:'Creative Agency Webapp',
        picture:agency,
        description:'The user can order any service. The user can review if he wants and it will show on the front page.',
        liveLink:'https://creative-agency004.firebaseapp.com/',
        GithubLink:'https://github.com/samirbiswas/creative-agency-client-site',
        WesiteLink:'Live Link',
        GitLink:'Github'
    },
    {
        id:2,
        title:'Ema Jhon Shopping Cart',
        picture:emajhon,
        description:'Simple e-commerce cart where anyone can shopping different type of products. Customer can add product to the cart.',
        liveLink:'https://simple-ema-jhon-app.web.app/',
        GithubLink:'https://github.com/samirbiswas/ema-jhon-shopping-cart',
        WesiteLink:'Live Link',
        GitLink:'Github'
    },

    {
        id:3,
        title:'Online Hotel Booking Webapp',
        picture:travel,
        description:'Travel your dream place. Select your dream area and booking the hotel room. When you booking ...',
        liveLink:'https://hotel-booking-app-d7fd5.web.app/',
        GithubLink:'https://github.com/samirbiswas/online-hotel-booking-app',
        WesiteLink:'Live Link',
        GitLink:'Github'
    },

]


    return (
        <div style={{backgroundColor:'#1d293a',height:'610px'}}>
            <NavBar></NavBar>
            <div className="container">
                    <div className='row mt-5'>
                        {
                            projects.map(pr=> <PortfolioDetail project={pr}></PortfolioDetail>)
                        }
                    </div>
            </div>
            <div style={{marginTop:'5%'}} >
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Portfolio;