import status from './status';
import sort from './sort';
//comnbine reducer
import  { combineReducers } from 'redux';

const myReducer = combineReducers({
    status,
    sort
});

export default myReducer;