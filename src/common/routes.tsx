import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

export type AppRoute = RouteObject & { displayName: string };

export const HomeRoute: AppRoute = { displayName: 'Home', path: 'home', element: <HomePage />, index: true };
export const LoginRoute: AppRoute = { displayName: 'Login', path: 'login', element: <LoginPage /> };

export const routes = [HomeRoute, LoginRoute];
