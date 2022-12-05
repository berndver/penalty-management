import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import type { AppState } from './appState';

export type AppDispatch = ThunkDispatch<AppState, unknown, AnyAction>;
