import { createEntityAdapter } from '@reduxjs/toolkit';
import { Team } from '../../../types/domain';

export const entityAdapter = createEntityAdapter<Team>({
  selectId: (elem) => elem.id,
});
