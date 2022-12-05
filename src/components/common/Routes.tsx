import { Home as HomeIcon, Groups as GroupsIcon, Person as PersonIcon } from '@mui/icons-material';
import { RouteObject } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import CreateTeamPage from '../../pages/team/CreateTeamPage';
import TeamDetailPage from '../../pages/team/TeamDetailPage';
import TeamPage from '../../pages/team/TeamPage';

export type AppRoute = RouteObject & { displayName: string; iconComponent: typeof HomeIcon };

export const HomeRoute: AppRoute = {
  displayName: 'Home',
  path: 'home',
  element: <HomePage />,
  index: true,
  iconComponent: HomeIcon,
};
export const LoginRoute: AppRoute = {
  displayName: 'Login',
  path: 'login',
  element: <LoginPage />,
  iconComponent: PersonIcon,
};
export const TeamRoute: AppRoute = {
  displayName: 'Teams',
  path: 'teams',
  element: <TeamPage />,
  iconComponent: GroupsIcon,
};
export const CreateTeamRoute: RouteObject = { path: 'teams/create', element: <CreateTeamPage /> };

export const TeamDetailRoute: RouteObject = { path: 'teams/:id', element: <TeamDetailPage /> };

export const Routes = [HomeRoute, LoginRoute, CreateTeamRoute, TeamRoute, TeamDetailRoute];
export const NavigationRoutes = [HomeRoute, TeamRoute];
