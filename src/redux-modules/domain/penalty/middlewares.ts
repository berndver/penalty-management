import { createListenerMiddleware } from '@reduxjs/toolkit';
import { LoginStatus } from '../../../constants/loginStatus';
import { collection, getDocs } from 'firebase/firestore';
import { firebaseFirestore } from '../../../common/firebase';
import { addEntities, setEntities, updateStatus } from './actions';
import { updateStatus as updateLoginStatus } from '../login/actions';
import { LoadingStatus } from '../../../constants/loadingStatus';
import { Penalty } from '../../../types/domain';

const authenticatedMiddleware = createListenerMiddleware();
authenticatedMiddleware.startListening({
  actionCreator: updateLoginStatus,
  effect: async (action, api) => {
    if (action.payload === LoginStatus.Authenticated) {
      api.dispatch(updateStatus(LoadingStatus.Loading));
      const snapshot = await getDocs(collection(firebaseFirestore, 'penalties'));
      api.dispatch(
        addEntities(
          snapshot.docs.map((elem) => ({
            id: elem.id,
            ...elem.data(),
          })) as Array<Penalty>
        )
      );
    } else {
      api.dispatch(setEntities([]));
    }
  },
});

export const penaltyMiddleware = [authenticatedMiddleware.middleware];
