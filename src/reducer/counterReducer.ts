import { createAction, createReducer, Reducer } from '@reduxjs/toolkit';

export type CounterState = {
  counter: number;
  uselessProp: number;
};

const initialState: CounterState = {
  counter: 0,
  uselessProp: 1,
};

export const resetCounter = createAction('counter/reset');
export const incrementCounter = createAction<number>('counter/increment');
export const decrementCounter = createAction<number>('counter/decrement');

export const counterReducer: Reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(incrementCounter, (state, { payload }) => ({
      ...state,
      counter: state.counter + payload,
    }))
    .addCase(decrementCounter, (state, { payload }) => ({
      ...state,
      counter: state.counter > 0 ? state.counter - payload : 0,
    }))
    .addCase(resetCounter, (state, { payload }) => ({ ...initialState }))
);
