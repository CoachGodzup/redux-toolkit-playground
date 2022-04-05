import React from 'react';
import Counter from '../Counter/Counter';
import ActionPanel from '../ActionPanel/ActionPanel';
import './Playground.css';

const Playground = () => (
  <section className='playground'>
    <h1>Redux Playground</h1>
    <article>
      <Counter></Counter>
      <ActionPanel></ActionPanel>
    </article>
  </section>
);

export default Playground;
