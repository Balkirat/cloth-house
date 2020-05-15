import React from 'react';
import SignIn from '../../components/SignIn/signIn';
import SignUp from "../../components/SignUp/signUp";
import './signInAndSignUp.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;