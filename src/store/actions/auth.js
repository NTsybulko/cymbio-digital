import axios from 'axios';
import api from '../../utils/api';
import token from '../../utils/token';
import { AUTHENTICATED, UNAUTHENTICATED } from './types';

export const authenticated = { type: AUTHENTICATED, payload: true };
export const unauthenticated = { type: UNAUTHENTICATED, payload: false };

export const signIn = values => (dispatch) => {
  
  const params = new URLSearchParams();
  params.append('client_id', values.client_id);
  params.append('client_secret', values.client_secret);
  params.append('grant_type', values.grant_type);
  params.append('username', values.username);
  params.append('password', values.password);
  params.append('scope', values.scope);

  axios
  .post('/oauth/token', params)
  .then((response) => {
    const data = response.data;
    if(data) {
      const newToken = JSON.stringify(data);
      token.setToken(newToken);
      dispatch(authenticated);
    }
  });
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(unauthenticated);
};

export const users = () => (dispatch) => {
  api.get('/users').then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err);
  });
};

