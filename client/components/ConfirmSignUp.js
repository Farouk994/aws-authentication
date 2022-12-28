import React from 'react';
import Input from './Input';
import SocialSignIn from './SocialSignIn';

const ConfirmSignUp = ({ onChange, setUiState, signUp, confirmSignUp }) => {
  return (
    <div>
      <p className='text-3x1 font-black'>Confirm Your Account</p>
      <div className='mt-10'>
        <label className='text-sm'>Confirmation Code </label>
        <Input onChange={onChange} name='authCode' />
      </div>
      <button
        onClick={confirmSignUp}
        className='text-white w-full mt-6 bg-pink-600 p-3 rounded'
      >
        Confirm Sign Up
      </button>
      <button onClick={signUp} className='text-sm mt-6 text-pink-500'>
        Cancel
      </button>
    </div>
  );
};

export default ConfirmSignUp;
