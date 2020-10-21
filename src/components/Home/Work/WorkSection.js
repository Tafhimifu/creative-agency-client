import React from 'react';
import Slider from "react-slick";





const WorkSection = () => {
    const renderSlides = () =>
    [1,2,3,4,5,6].map(num => (
      <div>
        <h3>Slide {num}</h3>
      </div>
    ));

  return (
    <div className="App">
      <Slider
        dots={true}
        slidesToShow={3}
        slidesToScroll={2}
        autoplay={true}
        autoplaySpeed={1500}
        infinite={true}
        centerPadding={"60px"}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}

export default WorkSection;