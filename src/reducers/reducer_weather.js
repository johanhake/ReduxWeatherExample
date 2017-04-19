import { FETCH_WEATHER } from '../actions/index';

// Initial state with an empty array
export default function(state=[], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Do not mutate state!! state.push(...); is no good!
      // return state.concat([action.payload.data]); ES6 syntax!
      return [ action.payload.data, ...state ];
  }

  return state;
};