import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../../types/appState';
import { LoginStatus } from '../../../constants/loginStatus';

export const selectStatus = createSelector([(state: AppState) => state.domain.login.status], (value) => value);
export const selectUser = createSelector(
  [(state: AppState) => state.domain.login.user, (state: AppState) => selectStatus(state)],
  (user, status) => (status === LoginStatus.Authenticated ? user : undefined)
);
