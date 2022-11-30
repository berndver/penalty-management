import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './domain/login/reducer';
import { penaltyReducer } from './domain/penalty/reducer';
import { penaltyMiddleware } from './domain/penalty/middlewares';
import { teamReducer } from './domain/team/reducer';

const domainReducer = combineReducers({ login: loginReducer, penalty: penaltyReducer, team: teamReducer });

export const store = configureStore({
  reducer: {
    domain: domainReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend([...penaltyMiddleware]),
});
