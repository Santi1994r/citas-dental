import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselC = ({ ourServices, ourSkills, watchMobile, watchTablet, watchDesktop, wSkills }) => {
  const [servicesMapping, setServiceMapping] = useState([]);

  const stateContent = () => {
    if (ourServices) {
      const servicesMap = ourServices.map((service) => (
        <div key={service.nameService} className="flex flex-col items-center">
          <img className=" w-32" src={service.img} alt={service.nameService} />
          <p className=" text-xl font-medium text-center">
            {service.nameService}
          </p>
        </div>
      ));
      setServiceMapping(servicesMap);
    } else if (ourSkills) {
      const skills = ourSkills.map((service) => (
        <div key={service.title} className="flex flex-col items-center">
          <img className=" w-20" src={service.image} alt="" />
          <h3 className="text-center font-bold py-3">{service.title}</h3>
          <p className="text-center w-60">{service.info}</p>
        </div>
      ));
      setServiceMapping(skills);
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: watchDesktop,
    },
    tablet: {
      breakpoint: { max: 1024, min: 568 },
      items: watchTablet,
    },
    mobile: {
      breakpoint: { max: 568, min: 0 },
      items: watchMobile,
    },
  };

  useEffect(() => {
    stateContent();
  }, []);

  return (
    <Carousel
      className={` m-auto my-14 z-0 ${wSkills}`}
      responsive={responsive}
      infinite={true}
    >
      {servicesMapping}
    </Carousel>
  );
};

export default CarouselC;
