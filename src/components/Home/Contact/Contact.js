import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="contact my-5 py-5">
           <div className="row">
               <div className="col-md-5 offset-md-1 text-div">
                   <h1>Let Us Handle Your <br/> Project,Professionally.</h1>
                   <h6>with well written codes,we builds amazing apps for all platforms,mobile and web apps in general</h6>
               </div>
               <div>
               <div className="container col-md-6">
               
               <div>
                   <form className="form">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group d-flex flex-row">
                           <button type="button" className="btn btn-dark"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
               </div>
           </div>
           <h6 className="footer">copyright orange labs 2020</h6>
       </section>
    );
};

export default Contact;