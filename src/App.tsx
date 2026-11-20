/**
 * App.tsx — root component that renders both converted components.
 */

import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

const App = (): React.JSX.Element => {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>React + TypeScript Checkpoint</h1>

      {/* `name` is required and must be a string — try removing it to see the TS error */}
      <Greeting name="World" />

      <Counter />
    </main>
  );
};

export default App;
