import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ForgotPassword from '../components/ForgotPassword';
import ForgotPasswordSubmit from '../components/ForgotPasswordSubmit';
import ConfirmSignUp from '../components/ConfirmSignUp';

const initialState = { email: '', password: '', authCode: '' };

const Profile = () => {
  // use UI state
  const [uiState, setUiState] = useState(null);
  const [formState, setFormState] = useState(initialState);
  const [user, setUserState] = useState(null);
  const { email, password, authCode } = formState;

  useEffect(() => {
    // log user info in the console
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      setUserState(user);
      setUiState('signedIn');
    } catch (error) {
      setUserState(null);
      setUiState('signIn');
      console.log(error.message);
    }
  }

  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function signUp() {
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: { email },
      });
      setUiState('confirmSignUp');
    } catch (err) {}
  }

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(email, authCode);
      await Auth.signIn(email, password);
      setUiState('signedIn');
      signIn();
    } catch (err) {
      console.log({ err });
    }
  }

  async function signIn() {
    try {
      await Auth.signIn(email, password);
      setUiState('signedIn');
      //   checkUser();
    } catch (err) {
      console.log({ err });
    }
  }
  async function forgotPassword() {
    try {
      await Auth.forgotPassword(email);
      setUiState('forgotPasswordSubmit');
    } catch (err) {
      console.log({ err });
    }
  }

  async function forgotPasswordSubmit() {
    try {
      await Auth.forgotPasswordSubmit(email, authCode, password);
      setUiState('signIn');
    } catch (err) {
      console.log({ err });
    }
  }

  return (
    <div>
      <div className='bg-gray-50 min-h-screen'>
        <div className='flex flex-col items-center'>
          <div className='max-w-full sm:w-540 mt-14'>
            <div className='bg-white py-14 px-16 shadow-form rounded'></div>
            {uiState === 'signUp' && (
              <SignUp
                onChange={onChange}
                setUiState={setUiState}
                signUp={signUp}
              />
            )}
            {uiState === 'confirmSignUp' && (
              <ConfirmSignUp
                onChange={onChange}
                confirmSignUp={confirmSignUp}
                setUiState={setUiState}
              />
            )}
            {uiState === 'signIn' && (
              <SignIn
                onChange={onChange}
                signIn={signIn}
                setUiState={setUiState}
              />
            )}
            {uiState === 'signedIn' && user && (
              <div>
                <h1>Welcome, {user.attributes.email}</h1>
                <button
                  className='text-white w-full mt-10 bg-pink-600 p-3 rounded'
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
            {uiState === 'forgotPassword' && (
              <ForgotPassword
                onChange={onChange}
                forgotPassword={forgotPassword}
                setUiState={setUiState}
              />
            )}
            {uiState === 'forgotPasswordSubmit' && (
              <ForgotPasswordSubmit
                onChange={onChange}
                forgotPasswordSubmit={forgotPasswordSubmit}
              />
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
