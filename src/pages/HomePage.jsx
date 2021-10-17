import React, { useState } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/InfoSection';
import Navbar from '../components/Navbar/Navbar';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import Sidebar from '../components/Sidebar/Sidebar';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false); //isOpen=false로 초기값 설정

  const toggle = () => {
    setIsOpen(!isOpen); //isOpen의 반대로 값을 변경하는 함수
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ServiceSection />
      <InfoSection {...homeObjThree} />
    </div>
  );
};

export default HomePage;
