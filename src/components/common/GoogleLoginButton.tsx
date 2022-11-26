import { FunctionComponent, useCallback } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateStatus } from '../../redux-modules/domain/login/actions';
import { LoginStatus } from '../../constants/loginStatus';
import { firebaseAuth } from '../../common/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const GoogleLoginButton: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleLogin = useCallback(async () => {
    try {
      await signInWithPopup(firebaseAuth, new GoogleAuthProvider());
    } catch (e) {
      dispatch(updateStatus(LoginStatus.Error));
    }
  }, [dispatch]);

  return <Button onClick={handleLogin}>Login with Google</Button>;
};

export default GoogleLoginButton;
