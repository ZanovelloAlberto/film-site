import React from 'react';
import ReactDOM from 'react-dom';
import { AppContextProvider } from './context';
import { FirebaseContextProvider } from './firebase';
import Main from 'Routes';

ReactDOM.render(
  (
    <AppContextProvider>
      <FirebaseContextProvider>
        <Main />
      </FirebaseContextProvider>
    </AppContextProvider>
  )
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
