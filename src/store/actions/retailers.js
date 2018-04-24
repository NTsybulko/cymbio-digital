import api from '../../utils/api';
import { SET_RETAILERS, SET_CURRENT_RETAILER } from './types';

export const getRetailers = () => (dispatch) => { 
    api
    .post('/retailers')
    .then((response) => {
        dispatch({ type: SET_RETAILERS, payload: [] });
    });
};

export const getRetailer = id => (dispatch) => {
    api
    .get('/retailers/' + id)
    .then((response) => {
        dispatch({ type: SET_CURRENT_RETAILER, payload: [] });
    });
};