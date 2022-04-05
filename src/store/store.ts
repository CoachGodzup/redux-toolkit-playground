import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../reducer/counterReducer';
import { fruitReducer } from '../reducer/fruitReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  fruit: fruitReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
