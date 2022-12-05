import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { BrowserRouter } from 'react-router-dom';
import { createFirestoreInstance } from 'redux-firestore';

import App from './components/App';
import { FIREBASE_CONFIG } from './constants/firebaseConfig';
import './index.css';
import { store } from './redux-modules/store';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

firebase.initializeApp(FIREBASE_CONFIG);
firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ReactReduxFirebaseProvider
          firebase={firebase}
          config={{
            userProfile: 'users',
            useFirestoreForProfile: true,
            updateProfileOnLogin: true,
            attachAuthIsReady: true,
            useFirestoreForStorageMeta: true,
            autoPopulateProfile: true,
          }}
          dispatch={store.dispatch}
          createFirestoreInstance={createFirestoreInstance}
          initializeAuth
        >
          <App />
        </ReactReduxFirebaseProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
