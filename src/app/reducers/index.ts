import {articles} from './article';
import {combineReducers} from '@ngrx/store';

export * from './article';
export default combineReducers({ articles });
