import React from "react";
import project from "../assets/Civil Engineering 2.jpg"
import project7 from "../assets/Archtecural pics.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const NewServices = ({imgDir, title, content}) => {
    
  return (
    <section className="lg:px-24 px-6 py-24" id='services' data-aos="fade-up" data-aos-duration={2000}>

  {imgDir === 'right' ? (
    <div className="flex flex-col lg:flex-row lg:justify-around">
      <div className="lg:w-1/2 my-16">
        <h1 className="lg:text-4xl text-2xl text-blue-700 font-medium uppercase">{title}</h1>
        <p className="text-[18] text-justify pt-4 text-[#777777]">{content}</p>
      </div>
      <div className="w-1/2">
      <img src={project7}
  className="ml-0 md:ml-12 w-full mt-[-40px] lg:mt-0 object-cover h-[50vh] lg:h-[50vh]" alt="Project Image"/>
      </div>
    </div>
  ) : (
    <div className="flex flex-col lg:flex-row lg:justify-around">
      <div className="lg:w-1/2">
        <img src={project} className="lg:ml-[-40px] ml-[-20px] mt-[-40px] lg:mt-0 object-cover w-full" alt="Project Image" />
      </div>
      <div className="lg:w-1/2 my-16">
        <h1 className="lg:text-4xl text-2xl my-8 lg:mt-0 text-blue-700 font-medium uppercase">{title}</h1>
        <p className="text-[#777777] text-justify pt-4 text-[18x]">{content}</p>
      </div>
    </div>
  )}

</section>

  );
};

export default NewServices;
