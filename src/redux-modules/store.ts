import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './domain/login/reducer';
import { penaltyReducer } from './domain/penalty/reducer';

const domainReducer = combineReducers({ login: loginReducer, penalty: penaltyReducer });

export const store = configureStore({
  reducer: {
    domain: domainReducer,
  },
});
