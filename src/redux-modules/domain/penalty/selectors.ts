import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../../types/appState';

export const selectStatus = createSelector([(state: AppState) => state.domain.penalty.status], (value) => value);
