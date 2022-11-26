import { FunctionComponent, useEffect } from 'react';
import GoogleLoginButton from '../components/common/GoogleLoginButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectStatus } from '../redux-modules/domain/login/selectors';
import { LoginStatus } from '../constants/loginStatus';

const LoginPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const loginStatus = useSelector(selectStatus);

  useEffect(() => {
    if (loginStatus !== LoginStatus.Authenticated) return;
    navigate({ pathname: 'home' });
  }, [loginStatus, navigate]);

  return (
    <>
      <GoogleLoginButton />
    </>
  );
};

export default LoginPage;
