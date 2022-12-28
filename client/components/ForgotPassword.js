import React from 'react';
import Input from './Input';
import SocialSignIn from './SocialSignIn';

const ForgotPassword = ({
  onChange,
  setUiState,
  signUp,
  confirmSignUp,
  forgotPassword,
}) => {
  return (
    <div>
      <p className='text-3x1 font-black'>Forgot Password? Start here.</p>
      <div className='mt-10'>
        <label className='text-sm'>Email </label>
        <Input onChange={onChange} name='email' />
      </div>
      <button
        onClick={forgotPassword}
        className='text-white w-full mt-6 bg-pink-600 p-3 rounded'
      >
        Reset Password
      </button>
      <button onClick={signUp} className='text-sm mt-6 text-pink-500'>
        Cancel
      </button>
    </div>
  );
};

export default ForgotPassword;
