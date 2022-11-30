import React, { FunctionComponent, useEffect, useRef } from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { Routes } from './common/routes';
import NavigationBar from './components/common/NavigationBar';
import { useDispatch } from 'react-redux';
import { updateStatus, updateUser } from './redux-modules/domain/login/actions';
import { LoginStatus } from './constants/loginStatus';
import { Container } from '@mui/material';
import { firebaseAuth } from './common/firebase';

const App: FunctionComponent = () => {
  const isRegistrationCall = useRef(true);
  const appRoutes = useRoutes(Routes);

  const dispatch = useDispatch();

  useEffect(() => {
    return firebaseAuth.onAuthStateChanged((user) => {
      if (isRegistrationCall.current) {
        isRegistrationCall.current = false;
        return;
      }
      if (!user || !user.uid || !user.email) {
        dispatch(updateStatus(LoginStatus.Unauthenticated));
        return;
      }
      // already logged in
      console.log('auth state changed and update user');

      dispatch(
        updateUser({
          id: user.uid,
          email: user.email,
          displayName: user.displayName ?? undefined,
          photoURL: user.photoURL ?? undefined,
        })
      );
      dispatch(updateStatus(LoginStatus.Authenticated));
    });
  }, [dispatch]);

  return (
    <>
      <NavigationBar />
      <Container>{appRoutes}</Container>
    </>
  );
};

export default App;
