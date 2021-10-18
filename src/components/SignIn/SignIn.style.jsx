import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInContainer = styled.div`
  min-height: 692px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const Logo = styled(Link)`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    margin: 20px 0 0 30px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.div`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  border-radius: 4px;
  padding: 80px 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  margin: 0 auto;
  color: #fff;

  @media screen and (max-width: 480px) {
    padding: 32px;
  }
`;

export const FormTitle = styled.h1`
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 40px;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
`;

export const FormInput = styled.input`
  border-radius: 4px;
  padding: 16px;
  border: none;
  outline: none;
  margin-bottom: 32px;
`;

export const FormButton = styled.button`
  border-radius: 4px;
  background-color: #01bf71;
  padding: 16px 0;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
`;

export const FormText = styled.span`
  margin-top: 24px;
  text-align: center;
  color: #fff;
  font-size: 14px;
`;
