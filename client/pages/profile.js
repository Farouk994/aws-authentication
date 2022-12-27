import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import SignIn from '../components/SignIn';

const initialState = { email: '', password: '', authCode: '' };

const Profile = () => {
  // use UI state
  const [uiState, setUiState] = useState(null);
  const [formState, setFormState] = useState(initialState);
  const [user, setUserState] = useState(null);

  useEffect(() => {
    // log user info in the console
    checkUser();
    async function checkUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log(user);
      } catch (error) {
        setUserState(null);
        console.log(error.message);
      }
    }
  }, []);
  function onChange() {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <div className='bg-gray-50 min-h-screen'>
        <div className='flex flex-col items-center'>
          <div className='max-w-full sm:w-540 mt-14'>
            <div className='bg-white py-14 px-16 shadow-form rounded'></div>
            {uiState === 'signIn' && (
              <SignIn onChange={onChange} setUiState={setUiState} />
            )}
            {uiState === 'signedIn' && (
              <div>
                <h1>Welcome {user.username}</h1>
                <button
                  onClick={() => {
                    Auth.signOut();
                    setUiState('signIn');
                    setUserState();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// Authentication is handled here
// Enable facebook or google signin
