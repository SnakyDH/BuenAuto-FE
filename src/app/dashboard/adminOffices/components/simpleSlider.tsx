// SimpleSlider.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';

const SimpleSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesData = [
    { id: 1, content: <h3>1</h3> },
    { id: 2, content: <h3>2</h3> },
    { id: 3, content: <h3>3</h3> },
    { id: 4, content: <h3>4</h3> },
    { id: 5, content: <h3>5</h3> },
    { id: 6, content: <h3>6</h3> },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev: any, next: any) => setCurrentSlide(next),
  };

  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id}>
            {slide.content}
            <div className='botones'></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
