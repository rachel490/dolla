import React from 'react';
import {
  SignInContainer,
  Logo,
  SignInWrapper,
  FormWrapper,
  Form,
  FormTitle,
  FormLabel,
  FormInput,
  FormText,
  FormButton
} from './SignIn.style';

const SignIn = () => {
  return (
    <>
      <SignInContainer>
        <SignInWrapper>
          <Logo to='/'>dolla</Logo>
          <FormWrapper>
            <Form action='#'>
              <FormTitle>Sign In to your account</FormTitle>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <FormText>Forgot Password?</FormText>
            </Form>
          </FormWrapper>
        </SignInWrapper>
      </SignInContainer>
    </>
  );
};

export default SignIn;
