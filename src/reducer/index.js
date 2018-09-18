import {combineReducers} from 'redux';
import * as BasicReducer from './BasicReducer';

export default combineReducers({
    ...BasicReducer
});
