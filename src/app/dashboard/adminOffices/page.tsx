'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styleOffices.css';
import Link from 'next/link';

const slidesData = [
  {
    id: 1,
    city: 'Villavicencio',
    image: '/img/villavicencio.png',
    address: 'Calle 13 # 8-10',
    phone: '321 123 4567',
    schedule: '8:00 am - 5:00 pm',
  },
  {
    id: 2,
    city: 'Pereira',
    image: '/img/pereira.jpg',
    address: 'Calle 13 # 8-10',
    phone: '321 123 4567',
    schedule: '8:00 am - 5:00 pm',
  },
  {
    id: 3,
    city: 'Yopal',
    image: '/img/yopal.jpg',
    address: 'Calle 13 # 8-10',
    phone: '321 123 4567',
    schedule: '8:00 am - 5:00 pm',
  },
];

const AdminOffices: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev: any, next: any) => setCurrentSlide(next),
  };

  return (
    <>
      <Navbar />
      <div className='title'>
        <h1>Sucursales</h1>
      </div>
      <div className='btnSucur'>
        <button>
          <Link href='/dashboard/Forms/office' className='navbar__menu--link'>
            Agregar Empleado
          </Link>
        </button>
      </div>
      <div className='slider'>
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div key={slide.id} className='card'>
              <div className='content'>
                <div className='imageContainer'>
                  <Image
                    src={slide.image}
                    width={1000}
                    height={800}
                    alt={`Picture of ${slide.city}`}
                    className='cityImage'
                  />
                </div>
                <div className='infoContainer'>
                  <h3>{slide.city}</h3>
                  <h4>Concesionaria Ricaurte:</h4>
                  <p>{slide.address}</p>
                  <p>Telefono: {slide.phone}</p>
                  <p>Horario: {slide.schedule}</p>
                  <div className='buttons'>
                    <button className='btn'>Editar</button>
                    <button className='btn'>Eliminar</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default AdminOffices;
