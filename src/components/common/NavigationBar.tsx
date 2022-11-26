import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { AppRoute, routes } from '../../common/routes';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(
    (route: AppRoute) => {
      navigate({ pathname: route.path });
    },
    [navigate]
  );

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        {routes.map((elem) => (
          <Button key={elem.path} color="inherit" onClick={() => handleClick(elem)}>
            <Typography>{elem.displayName}</Typography>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
