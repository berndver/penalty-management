import { createAction } from '@reduxjs/toolkit';
import { LoadingStatus } from '../../../constants/loadingStatus';
import { Penalty } from '../../../types/domain/penalty';

export const updateStatus = createAction<LoadingStatus>('domain/penalty/updateStatus');
export const addEntities = createAction<Array<Penalty>>('domain/penalty/addEntities');
export const setEntities = createAction<Array<Penalty>>('domain/penalty/setEntities');
