import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Counter = () => {
  const elmNumber = useSelector((state: RootState) => state.counter.counter);
  const elmFruit = useSelector((state: RootState) => state.fruit.fruit);

  return (
    <div>
      You bought {elmNumber} {elmFruit}
    </div>
  );
};

export default Counter;
