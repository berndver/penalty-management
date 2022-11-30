import { LoginStatus } from '../constants/loginStatus';
import { EntityState } from '@reduxjs/toolkit';
import { LoadingStatus } from '../constants/loadingStatus';
import { User, Penalty, Team } from './domain';

export type LoginReducerState = {
  status: LoginStatus;
  user?: User;
};

type EntityReducerState<TEntity> = EntityState<TEntity> & {
  status: LoadingStatus;
};

export type PenaltyReducerState = EntityReducerState<Penalty>;
export type TeamReducerState = EntityReducerState<Team>;´0

export type AppState = {
  domain: {
    login: LoginReducerState;
    penalty: PenaltyReducerState;
    team: TeamReducerState;
  };
};
