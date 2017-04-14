import { combineReducers } from 'redux';

import SelectedRating from './select-reducer';

const rootReducer = combineReducers ({
  ratings: SelectedRating
});

export default rootReducer;
