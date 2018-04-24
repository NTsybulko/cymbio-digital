import { AUTHENTICATED } from '../actions/types';

const auth = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        auth: action.payload,
      };
    default:
      break;
  }
  return state;
};

export default auth;
