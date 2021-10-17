import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram, BsYoutube, BsTwitter, BsLinkedin } from 'react-icons/bs';
import {
  FooterContainer,
  FooterWrapper,
  LinkContainer,
  LinkWrapper,
  LinkTitle,
  LinkList,
  LinkItem,
  SocialMediaContainer,
  SocialMediaWrapper,
  SocialMediaLogo,
  SocialIconsWrapper,
  SocialIconLink,
  CopyRight,
} from './Footer.style';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LinkContainer>
          <LinkWrapper>
            <LinkList>
              <LinkTitle>About Us</LinkTitle>
              <LinkItem to='/'>How It Works</LinkItem>
              <LinkItem to='/'>Careers</LinkItem>
              <LinkItem to='/'>Privacy Policy</LinkItem>
              <LinkItem to='/'>Terms of Service</LinkItem>
            </LinkList>
            <LinkList>
              <LinkTitle>Videos</LinkTitle>
              <LinkItem to='/'>Submit Video</LinkItem>
              <LinkItem to='/'>Ambassadors</LinkItem>
              <LinkItem to='/'>Agency</LinkItem>
              <LinkItem to='/'>Influencer</LinkItem>
            </LinkList>
          </LinkWrapper>
          <LinkWrapper>
            <LinkList>
              <LinkTitle>Contact Us</LinkTitle>
              <LinkItem to='/'>Contact</LinkItem>
              <LinkItem to='/'>Support</LinkItem>
              <LinkItem to='/'>Destinations</LinkItem>
              <LinkItem to='/'>Sponsorship</LinkItem>
            </LinkList>
            <LinkList>
              <LinkTitle>Resources</LinkTitle>
              <LinkItem to='/'>Blog</LinkItem>
              <LinkItem to='/'>Documentation</LinkItem>
              <LinkItem to='/'>Community</LinkItem>
              <LinkItem to='/'>Affiliates</LinkItem>
            </LinkList>
          </LinkWrapper>
        </LinkContainer>
 
      <SocialMediaContainer>
        <SocialMediaWrapper>
          <SocialMediaLogo to='/'>dolla</SocialMediaLogo>
          <CopyRight>
            © {new Date().getFullYear()} Placide IRANDOR. All Rights Reserved.
          </CopyRight>
          <SocialIconsWrapper>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <BsInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
              <BsYoutube />
            </SocialIconLink>
            <SocialIconLink
              href='//www.twitter.com/briandesignz'
              target='_blank'
              aria-label='Twitter'
            >
              <BsTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <BsLinkedin />
            </SocialIconLink>
          </SocialIconsWrapper>
        </SocialMediaWrapper>
      </SocialMediaContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
