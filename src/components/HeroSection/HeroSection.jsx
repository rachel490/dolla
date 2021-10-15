import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../Shared/Button';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContext,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroSection.style';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type='video/mp4' autoPlay loop muted />
      </HeroBg>
      <HeroContext>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </HeroP>

        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
          primary='true' dark='true'>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContext>
    </HeroContainer>
  );
};

export default HeroSection;
