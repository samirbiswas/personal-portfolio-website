import React from 'react';

const BlogPost = (props) => {
    const { title,description,picture,disLink,readMOre} = props.blog;
    return (
        <div className="col-md-4 ">
        <div className="card" style={{height:'200px'}} >
        <img class="card-img-top" src={picture} alt="Card image cap"/>
        <div class="card-body text-white pl-4">
            <h5 className="card-title ">{title}</h5>
            <p class="card-text">{description}</p>
            <div className='d-flex justify-content-between '>
                <a href={disLink} target="_blank" >{readMOre} </a>
                
            </div>
        </div>
  
    </div>
    </div>
    );
};

export default BlogPost;