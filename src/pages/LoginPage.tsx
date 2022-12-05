import { Box, styled } from '@mui/material';
import React, { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import GoogleLoginButton from '../components/common/GoogleLoginButton';
import { selectIsAuthenticated } from '../redux-modules/firebase/selectors';

const ContainerBox = styled(Box)`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) return;
    navigate({ pathname: 'home' });
  }, [isAuthenticated, navigate]);

  return (
    <ContainerBox>
      <GoogleLoginButton />
    </ContainerBox>
  );
};

export default LoginPage;
