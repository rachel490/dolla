import React from 'react';
import { Button } from '../Shared/Button';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Description,
  BtnWrapper,
  Column2,
  ImgWrapper,
  Img,
} from './InfoSection.style';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  heading,
  darkText,
  description,
  button,
  img,
  alt,
  primary,
  dark
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg ? true : false} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText ? true : false}>
                  {heading}
                </Heading>
                <Description darkText={darkText ? true : false}>
                  {description}
                </Description>
                <BtnWrapper>
                  <Button
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary = {primary ? true : false}
                    dark = {dark ? true : false}
                  >
                    {button}
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
