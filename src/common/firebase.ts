// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { collection, DocumentData, getFirestore, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore';
import { Team } from '../types/domain';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAb8nG4ACpASavYAilCdreD9iGdJffYt7w',
  authDomain: 'penalty-management-da326.firebaseapp.com',
  projectId: 'penalty-management-da326',
  storageBucket: 'penalty-management-da326.appspot.com',
  messagingSenderId: '870866736643',
  appId: '1:870866736643:web:0713e300634ca107cae036',
  measurementId: 'G-GY19GBP0HS',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAnalytics = getAnalytics(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseFirestore = getFirestore(firebaseApp);

export const teamCollection = collection(firebaseFirestore, 'teams').withConverter({
  fromFirestore: (snapshot: QueryDocumentSnapshot, options?: SnapshotOptions): Team => {
    const data = snapshot.data(options)!;
    return { id: data.id, name: data.name, adminUserIds: data.adminUserIds, memberUserIds: data.adminUserIds };
  },
  toFirestore: (modelObject: Team): DocumentData => modelObject,
});
