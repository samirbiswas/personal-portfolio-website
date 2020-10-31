import React from 'react';

const BlogPost = (props) => {
    const { title,description,picture,disLink,readMOre} = props.blog;
    return (
        <div className="col-md-4 ">

        <div class="card-deck">
            <div class="card">
                    <img src={picture} class="card-img-top" style={{height:'200px'}} alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                
                        <a href={disLink} target="_blank">{readMOre} </a>
                        
                    
                </div>
            </div>
                    
        </div>
    </div>
    );
};

export default BlogPost;