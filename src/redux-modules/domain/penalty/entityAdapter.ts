import { createEntityAdapter } from '@reduxjs/toolkit';
import { Penalty } from '../../../types/domain';

export const entityAdapter = createEntityAdapter<Penalty>();
