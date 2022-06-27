import 'overlayscrollbars/css/OverlayScrollbars.css';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import './index.css';
import App from '~/App';
import GlobalStyle from '~/components/GlobalStyle/GlobalStyle';
import { Provider } from 'react-redux'
import { store, persistSto } from '~/store'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

// window.socket = socket

// Add a response interceptor
// axios.interceptors.response.use(function (response) {
//   return response.data
// }, function (error) {
//   return Promise.reject(error)
// });

const token = window.localStorage.getItem('token')
console.log(token)
axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistSto}>
      <GlobalStyle>
        <App />
      </GlobalStyle>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

