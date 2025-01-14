import React from 'react'
import SectionTitle from './SectionTitle'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Portfolio = () => {
  return (
    <div className='flex justify-center my-16' id='services' data-aos="fade-up"
    data-aos-duration={1500}>
        <SectionTitle title="" titleText="Projects" serviceCentered={true} />
    </div>
  )
}

export default Portfolio