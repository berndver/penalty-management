import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material';
import { AppRoute, LoginRoute, NavigationBarRoute } from '../../common/routes';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux-modules/domain/login/selectors';
import { useIsLoggedIn } from '../../hooks/useIsLoggedIn';

const NavigationBar = () => {
  const navigate = useNavigate();

  const isLoggedIn = useIsLoggedIn();
  const user = useSelector(selectUser);

  const handleClick = useCallback(
    (route: AppRoute) => {
      navigate({ pathname: route.path });
    },
    [navigate]
  );

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        {NavigationBarRoute.map((elem) => (
          <Button key={elem.path} color="inherit" onClick={() => handleClick(elem)}>
            <Typography>{elem.displayName}</Typography>
          </Button>
        ))}
        <Box sx={{ flex: 1 }} />
        {isLoggedIn ? (
          <Avatar alt="user" src={user?.photoURL} />
        ) : (
          <Button key={LoginRoute.path} color="inherit" onClick={() => handleClick(LoginRoute)}>
            <Typography>{LoginRoute.displayName}</Typography>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
