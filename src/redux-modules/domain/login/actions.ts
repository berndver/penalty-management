import { createAction } from '@reduxjs/toolkit';
import { LoginStatus } from '../../../constants/loginStatus';
import { User } from '../../../types/domain';

export const updateStatus = createAction<LoginStatus>('login/updateStatus');
export const updateUser = createAction<User | undefined>('login/updateUser');
