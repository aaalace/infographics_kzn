import {createStore, combineReducers} from 'redux';

import { monthReducer } from './month/reducer';

const rootReducer = combineReducers({
    month: monthReducer
})


export const store = createStore(
    rootReducer,
)
