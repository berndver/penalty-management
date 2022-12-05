import { Button } from '@mui/material';
import { FunctionComponent, useCallback } from 'react';
import { useFirebase } from 'react-redux-firebase';

const GoogleLoginButton: FunctionComponent = () => {
  const firebase = useFirebase();

  const handleLogin = useCallback(async () => {
    // @ts-ignore
    await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }, [firebase]);

  return (
    <Button onClick={handleLogin} variant="outlined">
      Login with Google
    </Button>
  );
};

export default GoogleLoginButton;
