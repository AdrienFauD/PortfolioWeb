import { useState } from 'react';

export default function useSessionTokens() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('session');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('session', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}