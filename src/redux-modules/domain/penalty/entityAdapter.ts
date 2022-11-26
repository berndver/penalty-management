import { createEntityAdapter } from '@reduxjs/toolkit';
import { Penalty } from '../../../types/domain/penalty';

export const entityAdapter = createEntityAdapter<Penalty>();
