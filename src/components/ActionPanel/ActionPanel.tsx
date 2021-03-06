import React from 'react';
import { useDispatch } from 'react-redux';
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from '../../reducer/counterReducer';
import { changeFruit, resetFruit } from '../../reducer/fruitReducer';
import './ActionPanel.css';

const ActionPanel = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter(1));
  };

  const handleDecrement = () => {
    dispatch(decrementCounter(1));
  };

  const handleReset = () => {
    dispatch(resetCounter());
    dispatch(resetFruit());
  };

  const handleChangeFruit = () => {
    dispatch(changeFruit());
  };

  return (
    <div className='actionPanel'>
      <button onClick={handleIncrement}>๐ผ Buy</button>
      <button onClick={handleDecrement}>๐ฝ Sell</button>
      <button onClick={handleChangeFruit}>๐งบ Change fruit</button>
      <button onClick={handleReset}>๐ Reset</button>
    </div>
  );
};

export default ActionPanel;
