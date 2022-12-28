import { Auth } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '../configureAmplify';

const Protected = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    checkUser();
  }, []);
  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (error) {
      setUser(null);
      router.push('/profile');
    }
  }
  if (!user) return null;
  return (
    <div>
      <h1>Protected</h1>
    </div>
  );
};

export default Protected;
