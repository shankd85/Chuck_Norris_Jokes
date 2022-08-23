import * as jokesAction from '../constant';

const initalState = {
  jokes: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case jokesAction.GET_JOKES:
      return { ...state, loading: true, jokes: '' };
    case jokesAction.JOKES_RECEIVED:
      return {
        ...state,
        loading: false,
        jokes: action.json,
      };
    default:
      return state;
  }
};
export default reducer;
