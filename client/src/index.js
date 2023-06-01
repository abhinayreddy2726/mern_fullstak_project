import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  authReducer  from './state';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PERSIST
} from "redux-persist"
import  Storage  from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig ={key:"root",Storage,version:1}
const persistedReducer = persistReducer (persistConfig,authReducer)
const store =configureStore({
  reducer: persistedReducer,
  serializableCheck:{
    ignoreAction:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider  store={store}>
      <PersistGate loader={null} persistor={persistStore(store)}>
      <App />
      </PersistGate>
    </Provider>
   
  </React.StrictMode>
);

