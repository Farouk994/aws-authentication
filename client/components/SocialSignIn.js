import React from 'react';
import { Auth } from 'aws-amplify';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const SocialSignIn = () => {
  return (
    <div>
      <div className='flex flex-col'>
        {/* <p className='text-3x1 font-black'>Sign in to your account</p> */}
        <hr />
        <button
          className='mt-4 focus:outline-none'
          onClick={() => Auth.federatedSignIn({ provider: 'Google' })}
        >
          <div className='flex border border-gray-300 p-2 rounded-full items-center justify-center'>
            <FaGoogle size='33' className='text-red-600' />
            <p className='ml-3'>SignIn With Google</p>
          </div>
        </button>
        <br />
        {/* <hr /> */}
        <br />
        <button
          className='mt-3 focus:outline-none'
          onClick={() => Auth.federatedSignIn({ provider: 'Facebook' })}
        >
          <div className='flex border border-gray-300 p-2 rounded-full items-center justify-center'>
            <FaFacebook size='33' className='text-blue-600' />
            <p className='ml-3'>SignIn With Facebook</p>
          </div>
        </button>
        <br />
        {/* <button onClick={() => Auth.signOut()}>Sign Out</button> */}
      </div>
    </div>
  );
};

export default SocialSignIn;
