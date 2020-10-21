import React from 'react';
import frame from '../../../images/logos/frame.png';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1  ">
                <h1 className="d-flex justify-content-start font-weight-bold">Let's Grow Your</h1>
                <h1 className="d-flex justify-content-start font-weight-bold">Brand To The </h1>
                <h1 className="d-flex justify-content-start font-weight-bold">Next Level</h1>
                <p className=" text-secondary text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="d-flex justify-content-start align-items-center btn btn-dark button">Hire us</button>
            </div>
            <div className="col-md-5 offset-md-1">
                <img style={{marginTop:"20px"}}src={frame} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};


export default HeaderMain;