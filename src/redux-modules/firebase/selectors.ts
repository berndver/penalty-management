import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '../../types/appState';

export const selectIsAuthenticated = createSelector([(state: AppState) => state.firebase.auth.uid], (value) => !!value);
export const selectUser = createSelector([(state: AppState) => state.firebase.auth], (value) => value);
export const selectUserId = createSelector([(state: AppState) => state.firebase.auth.uid], (value) => value);
