import React from 'react';
import CompaniesIcon from '../CompaniesIcon/CompaniesIcon';
import Contact from '../Contact/Contact';
import FeedBack from '../Feedback/FeedBack';
import Header from '../Header/Header';
import ServiceSection from '../Service/ServiceSection';

import WorkSection from '../Work/WorkSection';


const Home = () => {
    return (
        <div>
           <Header></Header>
           <CompaniesIcon></CompaniesIcon>
           <ServiceSection></ServiceSection>
           <WorkSection></WorkSection>
           <FeedBack></FeedBack>
           <Contact></Contact>
        </div>
    );
};

export default Home;