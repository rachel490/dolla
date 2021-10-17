import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../Shared/Button';
import { NavLogo } from '../Navbar/Navbar.style';


export const SignInContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  align-items: center;
  background-color: #01bf71;
  position: fixed;
`;

export const LogoWrapper = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 50px;
`;

export const Logo = styled(NavLogo)`
    color: #fff;
    font-size: 2rem;
    margin: 0 0 0 20px;
    outline: none;
    padding: 10px;
`;

export const SignInBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #010606;
  color: #fff;
  padding: 80px 30px;
  border-radius: 5px;
  width: 400px;
  max-height: 550px;

  @media screen and (max-width:480px) {
      margin: 0 10px;
  }

`;

export const SignInH1 = styled.h1`
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 50px;
  text-align: center;
`;

export const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 0.9rem;
    margin-bottom: 30px;

`;

export const Label = styled.label`
    margin-bottom: 10px;
`;

export const Input = styled.input`
  border-radius: 5px;
  height: 50px;
  border: none;
  outline: none;
`;

export const ContinueButton = styled(Button)`
    border-radius: 5px;
`

export const SignInLink = styled(Link)`
    margin-top: 30px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    font-size: 0.9rem;
`;
