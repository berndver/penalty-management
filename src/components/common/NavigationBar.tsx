import { Menu } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectIsAuthenticated, selectUser } from '../../redux-modules/firebase/selectors';
import { AppRoute, LoginRoute, NavigationRoutes } from './Routes';

const DrawerContentContainer = styled(Box)`
  min-width: 250px;

  @media (max-width: 600px) {
    min-width: 75vw;
  }
`;

const NavigationBar = () => {
  const navigate = useNavigate();
  const showFlyout = useMediaQuery('(max-width:600px)');

  const [open, setOpen] = useState(false);

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const handleMenuButtonClick = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  const handleClick = useCallback(
    (route: AppRoute) => {
      navigate({ pathname: route.path });
      setOpen(false);
    },
    [navigate]
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          {showFlyout && (
            <IconButton color="inherit" onClick={handleMenuButtonClick}>
              <Menu />
            </IconButton>
          )}
          {!showFlyout &&
            NavigationRoutes.map((elem) => (
              <Button key={elem.path} color="inherit" onClick={() => handleClick(elem)}>
                <Typography>{elem.displayName}</Typography>
              </Button>
            ))}
          <Box sx={{ flex: 1 }} />
          {isAuthenticated ? (
            <Avatar alt="user" src={user?.photoURL ?? undefined} />
          ) : (
            <Button key={LoginRoute.path} color="inherit" onClick={() => handleClick(LoginRoute)}>
              <Typography>{LoginRoute.displayName}</Typography>
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <DrawerContentContainer>
          <List>
            {NavigationRoutes.map((elem) => (
              <ListItemButton key={elem.path} onClick={() => handleClick(elem)}>
                <ListItemIcon>
                  <elem.iconComponent />
                </ListItemIcon>
                <ListItemText>{elem.displayName}</ListItemText>
              </ListItemButton>
            ))}
          </List>
        </DrawerContentContainer>
      </Drawer>
    </>
  );
};

export default NavigationBar;
