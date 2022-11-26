import { createReducer } from '@reduxjs/toolkit';
import { LoginReducerState } from '../../../types/appState';
import { LoginStatus } from '../../../constants/loginStatus';
import { updateStatus, updateUser } from './actions';

export const loginReducer = createReducer<LoginReducerState>(
  {
    status: LoginStatus.Initial,
  },
  (builder) =>
    builder
      .addCase(updateStatus, (draft, action) => {
        draft.status = action.payload;
      })
      .addCase(updateUser, (draft, action) => {
        draft.user = action.payload;
      })
);
