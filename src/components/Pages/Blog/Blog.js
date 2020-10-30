import React from 'react';
import react from '../../../images/react.png';
import javascript from'../../../images/javascript.jpg';
import node from '../../../images/nodejs.png'
import NavBar from '../../Home/NavBar/NavBar';
import BlogPost from '../BlogPost/BlogPost';
import Footer from '../../Footer/Footer';

const Blog = () => {

    const blogs =[
        {
            id:1,
            picture:react,
            title:'What is ReactJS',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
            disLink:'https://medium.com/@samir99biswas/what-is-react-js-ef8636757d6e',
            readMOre:'Read More'

        },
        {
            id:2,
            picture:javascript,
            title:'What is JavaScript',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
            disLink:'https://medium.com/@samir99biswas/what-is-react-js-ef8636757d6e',
            readMOre:'Read More'

        },
        {
            id:3,
            picture:node,
            title:'What is NodeJS',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
            disLink:'https://medium.com/@samir99biswas/what-is-react-js-ef8636757d6e',
            readMOre:'Read More'

        },

    ]


    return (
        <div style={{backgroundColor:'#1d293a',height:'650px'}}>
        <NavBar></NavBar>
        <div className="container">
                <div className='row mt-5'>
                    {
                        blogs.map(br=> <BlogPost blog={br}></BlogPost>)
                    }
                </div>
        </div>
        <div style={{marginTop:'20%'}}>
           <Footer></Footer>
           </div>
    </div>
    );
};

export default Blog;