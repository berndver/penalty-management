import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../../types/appState';
import { entityAdapter } from './entityAdapter';

export const selectStatus = createSelector([(state: AppState) => state.domain.penalty.status], (value) => value);
export const { selectById, selectEntities, selectIds, selectTotal, selectAll } = entityAdapter.getSelectors<AppState>(
  (state) => state.domain.penalty
);
