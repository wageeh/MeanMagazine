import {
    ADD_ARTICLE,
    Load_ARTICLES,
    REMOVE_ARTICLE,
    UPDATE_ARTICLE
} from '../constants';
import { Article } from '../models';
import {Reducer, Action} from '@ngrx/store';

export const articles: Reducer<Article[]> = (state: Article[] = [], action: Action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return state.concat([Object.assign({}, action.payload, { id: state.length + 1 })]);
        case UPDATE_ARTICLE:
            return state.map(todo => {
                return todo.id !== action.payload.id ?
                    todo :
                    Object.assign({}, todo, action.payload);
            });
        case Load_ARTICLES:
            return state.concat(action.payload);
        case REMOVE_ARTICLE:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
};


