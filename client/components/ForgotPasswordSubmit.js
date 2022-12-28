import React from 'react';
import Input from './Input';
import SocialSignIn from './SocialSignIn';

const ForgotPasswordSubmit = ({ onChange, forgotPasswordSubmit }) => {
  return (
    <div>
      <p className='text-3x1 font-black'>Confirm New Password</p>
      <div className='mt-10'>
        <label className='text-sm'>Confirmation Code </label>
        <Input onChange={onChange} name='authCode' />
      </div>
      <div className='mt-4'>
        <label className='text-sm'>New Password</label>
        <Input onChange={onChange} name='password' type='password' />
      </div>
      <button
        onClick={forgotPasswordSubmit}
        className='text-white w-full mt-6 bg-pink-600 p-3 rounded'
      >
        Submit New Password
      </button>
    </div>
  );
};

export default ForgotPasswordSubmit;
