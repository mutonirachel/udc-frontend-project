import React from 'react'
import SectionTitle from './SectionTitle'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Services = () => {
  return (
    <div className='flex justify-center my-24' id='services' data-aos="fade-up"
    data-aos-duration={1500}>
        <SectionTitle title="Our Services" titleText="What do we do?" serviceCentered={true} />
    </div>
  )
}

export default Services