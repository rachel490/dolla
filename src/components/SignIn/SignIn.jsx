import React from 'react';
import {
  SignInContainer,
  LogoWrapper,
  Logo,
  SignInBox,
  SignInH1,
  SignInForm,
  InputWrapper,
  Label,
  Input,
  ContinueButton,
  SignInLink
} from './SignIn.style';

const SignIn = () => {
  return (
    <>
      <SignInContainer>
        <LogoWrapper>
          <Logo to='/'>dolla</Logo>
        </LogoWrapper>
        <SignInBox>
          <SignInH1>Sign In to your account</SignInH1>
          <SignInForm>
            <InputWrapper>
              <Label  htmlFor='email'>Email</Label>
              <Input type='text' id='email' />
            </InputWrapper>
            <InputWrapper>
              <Label  htmlFor='pw'>Password</Label>
              <Input type='text' id='pw' />
            </InputWrapper>
            <ContinueButton tpye='submit' primary="true" big="true" fontBig="true">Continue</ContinueButton>
          </SignInForm>
          <SignInLink to='#'>Forgot Password?</SignInLink>
        </SignInBox>
      </SignInContainer>
    </>
  );
};

export default SignIn;
