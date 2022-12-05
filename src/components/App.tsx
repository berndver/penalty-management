import { Container } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { useRoutes } from 'react-router-dom';

import { Routes } from './common/Routes';
import './App.css';
import NavigationBar from './common/NavigationBar';

const App: FunctionComponent = () => {
  const appRoutes = useRoutes(Routes);

  return (
    <>
      <NavigationBar />
      <Container>{appRoutes}</Container>
    </>
  );
};

export default App;
