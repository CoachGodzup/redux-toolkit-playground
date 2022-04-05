import { createAction, createReducer, Reducer } from '@reduxjs/toolkit';
import { getRandomIntegerBetweenBoundaries } from '../service/utils.service';

const availableFruits = [
  '🍎',
  '🍌',
  '🥝',
  '🍇',
  '🍊',
  '🍍',
  '🥑',
  '🫐',
  '🍓',
  '🌰',
  '🌶️',
  '🍉',
  '🍋',
  '🍒',
  '🍑',
  '🍐',
];

export type fruit = typeof availableFruits[number];

export type FruitState = {
  fruit: fruit;
};

const initialState: FruitState = {
  fruit: availableFruits[0],
};

const pickFruit = () => {
  return availableFruits[
    getRandomIntegerBetweenBoundaries(0, availableFruits.length - 1)
  ];
};

export const changeFruit = createAction('fruit/change');
export const resetFruit = createAction('fruit/reset');

export const fruitReducer: Reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(changeFruit, (state) => ({ ...state, fruit: pickFruit() }))
    .addCase(resetFruit, (state) => ({ ...initialState }))
);
