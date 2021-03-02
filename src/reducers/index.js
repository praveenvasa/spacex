import { combineReducers } from 'redux';
//root reducer to combine all reducer
import {addReducer} from './addReducer';

const rootReducer = combineReducers({
    add : addReducer

});

export default rootReducer;