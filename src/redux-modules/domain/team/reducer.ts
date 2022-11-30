import { createSlice } from '@reduxjs/toolkit';
import { TeamReducerState } from '../../../types/appState';
import { LoadingStatus } from '../../../constants/loadingStatus';
import { entityAdapter } from './entityAdapter';

const initialState: TeamReducerState = {
  status: LoadingStatus.Initial,
  ...entityAdapter.getInitialState(),
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
});

export const { reducer: teamReducer } = teamSlice;
