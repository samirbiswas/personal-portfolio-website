import React from 'react';

const PortfolioDetail = (props) => {
    const { title,description,picture,liveLink,GithubLink,WesiteLink,GitLink} = props.project
        
    return (
       
        <div className="col-md-4 ">

            <div class="card-deck">
                <div class="card">
                        <img src={picture} class="card-img-top" style={{height:'200px'}} alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                    <div className='d-flex justify-content-between '>
                            <a href={liveLink} target="_blank">{WesiteLink} </a>
                            <a href={GithubLink} target="_blank">{GitLink} </a>
                        </div>
                    </div>
                </div>
                        
            </div>
        </div>
    );
};

export default PortfolioDetail;