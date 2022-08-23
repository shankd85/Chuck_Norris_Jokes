import * as jokesAction from '../constant';

export const getJokes = (numberOfJokes) => ({
  type: jokesAction.GET_JOKES,
  count: numberOfJokes,
});
