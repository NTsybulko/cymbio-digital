import axios from 'axios';
import token from './token';
import * as config from '../utils/config.json';

const api = axios.create({
  baseURL: config.base_url,
});

api.interceptors.request.use(
  (config) => {
    const newConfig = config;
    const localToken = token.getToken();
    const currentDateTime = Date.now();

    if (
      localToken &&
      new Date(localToken.accessTokenExpiresAt) > currentDateTime
    ) {
      newConfig.headers.authorization = 'Bearer ' + localToken.accessToken;
      return newConfig;
    }

    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => response,
  (error) => {
    const status = error.response.status;
    if (status === 401) {
      return new Promise((resolve, reject) => {
        const localToken = token.getToken();
        const refreshTokenExpiration = token.getRefreshTokenExpiration();
        const isExpiredRefreshToken = refreshTokenExpiration > Date.now();

        if (localToken && isExpiredRefreshToken) {
          const params = new URLSearchParams();
          params.append('refresh_token', localToken.refreshToken);
          params.append('client_id', '1234');
          params.append('client_secret', '1234');
          params.append('grant_type', 'refresh_token');

          axios.post(config.token_url, params).then(
            (response) => {
              const data = response.data;
              if (data) {
                const newToken = JSON.stringify(data);
                token.setToken(newToken);
                error.config.baseURL = '';
                resolve(api(error.config));
              }
            }).catch((err) => {
              console.log('Refresh login error: ', error);
              reject(err.response);
            },
          );
        } else {
          reject(error.response);
        }
      });
    } else {
      return Promise.reject(error.response);
    }
  },
);

export default api;
