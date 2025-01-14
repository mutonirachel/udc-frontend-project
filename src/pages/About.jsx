import React from 'react'
import SectionTitle from '../components/SectionTitle'
import TeamTitle from '../components/TeamTitle'
import Team from '../components/Team'
import AOS from "aos";
import "aos/dist/aos.css";
import project from "../assets/project.jpg"
AOS.init();

const About = () => {
  return (
    <div className='overflow-hidden'>
           <div className='grid justify-center items-center'>
        <div className="absolute z-50 w-full pt-24 text-2xl lg:pt-0 font-bold text-white lg:h-[45vh]">
        <h1 className="lg:text-7xl text-white text-center font-medium lg:pl-24 lg:py-40 z-20">
          About Us
        </h1>
        </div>
        <img
          src={project}
          className="max-h-[50vh] object-cover min-w-[100vw]"
        />
      </div>
      <div className='mx-6 flex flex-col lg:flex-row' id='2aboutus' data-aos="fade-up"
    data-aos-duration={2000}>
      <div className='lg:w-1/2 w-full my-6 lg:my-24 border-4 border-blue-600'>
        <img src={project} alt="project" className='max-h-[120vh] object-cover m-12 pt-8'/>
      </div>
      <div className="lg:w-[44%] w-full lg:ml-24 lg:my-16 border-indigo-500" id="about">
        <SectionTitle titleText="About Us"/>
        <p className="lg:my-6 leading-loose  text-[15.0385px]  text-[#777777]">
        As a company, we are dedicated to continuous improvement, staying abreast of industry advancements,
         and embracing innovation. We foster a collaborative and inclusive work environment that encourages 
         teamwork, creativity, and professional growth. Universal Design And Construction, Ltd. is proud to 
         have established a strong reputation for excellence, integrity, and customer satisfaction. With a track 
         record of successful projects, we have earned the trust of clients who seek exceptional design, meticulous
          construction, and a partner who values their dreams.
          <br /><br />
            
         At Universal Design And Construction, Ltd., we understand that each client is
         unique and has distinct dreams and aspirations. We prioritize client collaboration
         and aim to create spaces that truly reflect their vision. By engaging in open and
         transparent communication, we ensure that our clients' needs are at the forefront of every decision. <br /><br />
         With our unwavering commitment to client-centricity, sustainable practices, and uncompromising quality, Universal
         Design And Construction, Ltd. is poised to lead the industry and set new benchmarks in the world of construction.
        </p>
      </div>
      </div>
      <div className='my-8 mx-6 flex flex-col lg:flex-row' id='3aboutus' data-aos="fade-up"
    data-aos-duration={2000}>
        <div className="lg:w-[42%] w-full ml-5 my-18 border-indigo-500" id="about">
        
        <p className="my-6 leading-loose  text-[15.0385px] text-[#777777]">
       <i className='font-medium text-black'> Mission: </i>
       Our mission is to create exceptional spaces that embody our clients' dreams through
       modern design, luxury, and sustainable practices. We prioritize collaboration, innovation,
       and quality to deliver outstanding residential, commercial, and hospitality projects that 
       exceed expectations.<br /><br />
       <i className='font-medium text-black'>Vision :</i> To be the leading provider of luxury design and construction services, integrating client
        aspirations, innovative architectural concepts, and sustainable practices to create exceptional
         spaces that inspire and exceed expectations.
      <br /><br />
      Sustainability is a core value that permeates throughout our company. We are committed to integrating 
      environmentally responsible practices into our designs and construction processes. From energy-efficient 
      solutions to the use of eco-friendly materials, we strive to minimize our environmental footprint and create
       buildings that contribute to a greener future. <br />
        </p>
      </div>
      <div className='lg:w-1/2 lg:ml-24 border-4 border-[gold]'>
        <img src={project} alt="" className='max-h-[120vh] object-cover m-10 pt-4'/>
      </div>
      </div>
       <div className='lg:mx-auto lg:p-16 bg-blue-900 w-full lg:h-80'id='1aboutus' data-aos="fade-up"
    data-aos-duration={1500}>
      <p className='font-medium text-white  text-[15.0385px]'>With a focus on quality, craftsmanship, and attention to detail, Universal Design And Construction, Ltd. consistently delivers projects of the highest standards.
         We employ the latest technologies and employ stringent quality control measures to ensure that every construction endeavor is completed to perfection.</p>
       <h1 className='font-extrabold text-white text-xl py-4'>MOTIVATION</h1>
        <p className='font-medium text-white text-[15.0385px]'>Dedicated to creating exceptional spaces that inspire and exceed expectations. With a focus on collaboration, innovation,
           and sustainability, we turn dreams into reality, delivering outstanding residential, commercial, and hospitality projects.
           Join us on this exciting journey where luxury design meets sustainability. <br /><br /> 
           Welcome to Universal Design And Construction, Ltd.!</p>
       </div>
        <div>
        <TeamTitle />
        <p className="lg:ml-40 text-[#777777] text-[15.0385px] pb-12" id='aboutus' data-aos="fade-up"
    data-aos-duration={1500}>With a team of highly skilled architects, engineers, and construction
     professionals, Universal Design And Construction, Ltd. brings together a wealth of expertise and
      experience to create stunning, functional, and sustainable structures. Our team possesses a deep 
      understanding of modern architectural trends, incorporating luxurious aesthetics and green design 
      principles into every project.</p>
        <Team />
        </div>
    </div>
    
  )
}

export default About
