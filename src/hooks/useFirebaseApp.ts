import { useMemo } from 'react';
import { firebaseApp } from '../common/firebase';

export const useFirebaseApp = () => {
  return useMemo(() => firebaseApp, []);
};
