import { LoginStatus } from '../constants/loginStatus';
import { User } from './domain/user';
import { EntityState } from '@reduxjs/toolkit';
import { Penalty } from './domain/penalty';
import { LoadingStatus } from '../constants/loadingStatus';

export type LoginReducerState = {
  status: LoginStatus;
  user?: User;
};

export type PenaltyReducerState = EntityState<Penalty> & {
  status: LoadingStatus;
};

export type AppState = {
  domain: {
    login: LoginReducerState;
    penalty: PenaltyReducerState;
  };
};
