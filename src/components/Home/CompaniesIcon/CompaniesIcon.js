import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import ubar from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import  airbnb from '../../../images/logos/airbnb.png';
import './CompaniesIcon.css';




const CompaniesIcon = () => {

  
    return (
        <section  className="d-flex justify-content-around">
            <div className=" row">
            <div className="col-md-1 ">
                <img  className="image"src={slack} alt=""/>
            </div>
            <div className="col-md-1 offset-md-1 ">
                <img className="image" src={google} alt=""/>
            </div>
            <div className="col-md-1 offset-md-1 ">
                <img className="image" src={ubar} alt=""/>
            </div>
            <div className="col-md-1 offset-md-1 ">
                <img className="image"  src={netflix} alt=""/>
            </div>
            <div className="col-md-1 offset-md-1 ">
                <img className="image" src={airbnb} alt=""/>
            </div>
            </div>
        </section>
        
 );
};

export default CompaniesIcon;