import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { LoadingStatus } from '../../../constants/loadingStatus';
import { Team } from '../../../types/domain';
import { firebaseFirestore, teamCollection } from '../../../common/firebase';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';

export const updateStatus = createAction<LoadingStatus>('domain/team/updateStatus');
export const addEntities = createAction<Array<Team>>('domain/team/addEntities');

export const createTeam = createAsyncThunk<Team, Pick<Team, 'name'>>('domain/team/createTeam', async ({ name }) => {
  setDoc(teamCollection, { name });
});
