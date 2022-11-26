import { createReducer } from '@reduxjs/toolkit';
import { PenaltyReducerState } from '../../../types/appState';
import { LoadingStatus } from '../../../constants/loadingStatus';
import { entityAdapter } from './entityAdapter';
import { addEntities, setEntities, updateStatus } from './actions';

export const penaltyReducer = createReducer<PenaltyReducerState>(
  {
    status: LoadingStatus.Initial,
    ...entityAdapter.getInitialState(),
  },
  (builder) =>
    builder
      .addCase(updateStatus, (draft, action) => {
        draft.status = action.payload;
      })
      .addCase(addEntities, (draft, action) => {
        entityAdapter.addMany(draft, action.payload);
      })
      .addCase(setEntities, (draft, action) => {
        entityAdapter.setAll(draft, action.payload);
      })
);
