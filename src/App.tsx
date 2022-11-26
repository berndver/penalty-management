import React, { FunctionComponent, useEffect } from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { routes } from './common/routes';
import NavigationBar from './components/common/NavigationBar';
import { useFirebaseAuth } from './hooks/useFirebaseAuth';
import { useDispatch } from 'react-redux';
import { updateStatus, updateUser } from './redux-modules/domain/login/actions';
import { LoginStatus } from './constants/loginStatus';
import { Container } from '@mui/material';

const App: FunctionComponent = () => {
  const appRoutes = useRoutes(routes);
  const firebaseAuth = useFirebaseAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (!user || !user.uid || !user.email) {
        dispatch(updateStatus(LoginStatus.Unauthenticated));
      } else {
        dispatch(updateUser({ id: user.uid, email: user.email, displayName: user.displayName ?? undefined }));
        dispatch(updateStatus(LoginStatus.Authenticated));
      }
    });
  }, [dispatch, firebaseAuth]);

  return (
    <>
      <NavigationBar />
      <Container>{appRoutes}</Container>
    </>
  );
};

export default App;
