import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '../configureAmplify';
import { Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

const AmplifyAuth = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // log user info in the console
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (error) {
      //   setUserState(null);
      //   setUiState('signIn');
      setUser(null);
      console.log(error.message);
    }
  }
  if (!user) return null;
  return (
    <div>
      <h1>Welcome, {user.attributes.email}</h1>
    </div>
  );
};

export default withAuthenticator(AmplifyAuth);
