import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit';
import songReducer from './store/slices/songSlice';
import rootSaga from './saga';
import { BrowserRouter } from 'react-router-dom';

const saga  = createSagaMiddleware()

const store  = configureStore({
  reducer:{
    songsList:songReducer
  },
  middleware:[saga]
})

saga.run(rootSaga)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
