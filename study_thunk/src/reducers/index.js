import { combineReducers } from 'redux';
import tags from './tags';
import tagDatas from './tagDatas';

const rootReducer = combineReducers({
  tags,
  tagDatas
});

export default rootReducer;