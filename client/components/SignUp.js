import React from 'react';
import Input from './Input';
import SocialSignIn from './SocialSignIn';

const SignUp = ({ onChange, setUiState, signUp }) => {
  return (
    <div>
      <div>
        <p className='text-3x1 font-black'>Sign Up for an account</p>
        <div className='mt-10'>
          <label className='text-sm'>Email</label>
          <Input onChange={onChange} name='email' />
        </div>
        <div className='mt-4'>
          <label className='text-sm'>Password</label>
          <Input onChange={onChange} name='password' type='password' />
        </div>
        <button
          onClick={signUp}
          className='text-white w-full mt-6 bg-pink-600 p-3 rounded'
        >
          Sign In
        </button>
        <SocialSignIn />
        <p className='mt-12 text-sm font-light'>
          Have an Account?
          <span
            onClick={() => setUiState('signIn')}
            role='button'
            className='cursor-pointer text-pink-600'
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
