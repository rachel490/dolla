import React from 'react';
import {serviceObj as data}from './Data.js';
import {
    ServicesSection,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesImg,
    ServicesH2,
    ServicesP
} from './ServiceSection.style';


const ServicesCardItem = ({data :{img,alt,header,description}}) => {
  return (
    <ServicesCard>
      <ServicesImg src={img} alt={alt}/>
      <ServicesH2>{header}</ServicesH2>
      <ServicesP>{description}</ServicesP>
    </ServicesCard>
  );
};

const ServiceSection = () => {
  return (
    <>
      <ServicesSection>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          {data.map(item => <ServicesCardItem data={item}/>)}
        </ServicesWrapper>
      </ServicesSection>
    </>
  );
};

export default ServiceSection;
