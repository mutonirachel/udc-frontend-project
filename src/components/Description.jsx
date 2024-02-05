import SectionTitle from "./SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import CarouselComponent from "./Carousel";

AOS.init();
const Description = () => {
  return (
    <div
      className="lg:my-10 lg:my-8 flex flex-col lg:flex-row"
      data-aos="fade-up"
      data-aos-duration={2000}
    >
  
       <div className="w-1/2 px-6 lg:py-6">
          <CarouselComponent/>
        </div>
      <div className="lg:w-[44%] w-full lg:ml-8 lg:my-24 max-w-screen-md mx-auto p-4" id="about">

        <SectionTitle titleText="Welcome To A World Of"/>
        <SectionTitle titleText="Your Dreams"/>
        <p className="my-12 leading-loose text-[#777777] text-justify text-[18px] text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed">
        At Universal Design And Construction Ltd we understand , that each Client is Unique and Has
        Distinct dreams and aspirations. we prioritize Client collaboration And Aim to create spaces
        that truly reflect their vision. with focus on innovation and sustainability we turn Dreams into
        Reality. <br />  Engineering we lead!
        </p>
      </div>
    </div>
  );
};

export default Description;

