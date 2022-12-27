import React from 'react';
import { Auth } from 'aws-amplify';

const SignIn = () => {
  return (
    <div>
      <button onClick={() => Auth.federatedSignIn({ provider: 'Google' })}>
        SignIn With Google
      </button>
      <br />
      <hr />
      <br />
      <button onClick={() => Auth.federatedSignIn({ provider: 'Facebook' })}>
        SignIn With Facebook
      </button>
      <br />
      <button onClick={() => Auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default SignIn;
