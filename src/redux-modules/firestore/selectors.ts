import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '../../types/appState';
import { Team } from '../../types/domain';

export const selectTeams = createSelector(
  [(state: AppState) => state.firestore.ordered.teams as Array<Team>],
  (value) => value
);

export const selectTeam = createSelector(
  [(state: AppState) => state.firestore.ordered.teams as Array<Team> | undefined, (_, id: string | undefined) => id],
  (teams, id) => (id && teams ? teams.find((elem) => elem.id === id) : undefined)
);
