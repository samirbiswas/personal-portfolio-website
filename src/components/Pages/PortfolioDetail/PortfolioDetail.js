import React from 'react';
import { Link } from 'react-router-dom';


const PortfolioDetail = (props) => {
    const { title,description,picture,liveLink,GithubLink,WesiteLink,GitLink} = props.project
        
    return (
       
        <div className="col-md-4 ">
            <div className="card" style={{height:'200px'}} >
            <img class="card-img-top" src={picture} alt="Card image cap"/>
            <div class="card-body text-white pl-4">
                <h5 className="card-title ">{title}</h5>
                <p class="card-text">{description}</p>
                <div className='d-flex justify-content-between '>
                    <a href={liveLink} target="_blank">{WesiteLink} </a>
                    <a href={GithubLink} target="_blank">{GitLink} </a>
                </div>
            </div>
      
        </div>
        </div>
    );
};

export default PortfolioDetail;