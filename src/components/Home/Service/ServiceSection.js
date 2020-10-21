import React from 'react';
import ServiceDetails from './ServiceDetails';
const serviceData = [
    {
        image: '../../../images/icons/service1.png',
        title:'Web & Mobile Design',
        details:'We craft stunnin'
    },
    {
        
        image: '../../../images/icons/service2.png',
        title:'Web & Mobile Design',
        details:'We craft stunnin'
    },
    {
        
        image: '../../../images/icons/service3.png',
        title:'Web & Mobile Design',
        details:'We craft stunnin'
    }
]

const ServiceSection = () => {
    return (
        <section className="services-container mt-5">
        <div className="text-center">
            
            <h2>Provide awesome services</h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
            {
                serviceData.map(service => <ServiceDetails service={service} key={service.title}></ServiceDetails>)
            }
        </div>
    </div>
    </section>
);
};

export default ServiceSection;