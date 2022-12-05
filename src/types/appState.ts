import { FirebaseReducer, FirestoreReducer } from 'react-redux-firebase';

export type AppState = {
  firebase: FirebaseReducer.Reducer;
  firestore: FirestoreReducer.Reducer;
};
