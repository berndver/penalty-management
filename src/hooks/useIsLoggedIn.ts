import { useSelector } from 'react-redux';
import { selectStatus, selectUser } from '../redux-modules/domain/login/selectors';
import { useMemo } from 'react';
import { LoginStatus } from '../constants/loginStatus';

export const useIsLoggedIn = () => {
  const status = useSelector(selectStatus);
  const user = useSelector(selectUser);

  return useMemo(() => status === LoginStatus.Authenticated && !!user, [status, user]);
};
