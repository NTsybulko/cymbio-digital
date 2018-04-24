import { SET_RETAILERS, SET_CURRENT_RETAILER } from '../actions/types';

const auth = (state = {}, action) => {
  switch (action.type) {
    case SET_RETAILERS:
      return {
        ...state,
        retailers: action.payload,
      };
    case SET_CURRENT_RETAILER:
        return {
        ...state,
        currentRetailer: action.payload,
    };
    default:
      break;
  }
  return state;
};

export default auth;
