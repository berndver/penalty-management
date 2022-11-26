import { useMemo } from 'react';
import { firebaseAuth } from '../common/firebase';

export const useFirebaseAuth = () => {
  return useMemo(() => firebaseAuth, []);
};
