import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  padding: 48px 24px;
  margin: 0 auto;
`;

export const LinkContainer = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const LinkList = styled.div`
  margin: 16px;
  width: 160px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  text-align: left;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const LinkTitle = styled.span`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 16px;
`;

export const LinkItem = styled(Link)`
  margin-bottom: 5px;
  font-size: 0.9rem;
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`;



export const SocialMediaContainer = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrapper = styled.section`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

export const SocialMediaLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-self: start;
  font-weight: bold;
  cursor: pointer;
`;

export const CopyRight = styled.small`
  margin-bottom: 16px;
`;

export const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  font-size: 24px;
  color: #fff;
`;
