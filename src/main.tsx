/**
 * main.tsx — entry point. Mounts <App /> into the #root element in index.html.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// The `!` (non-null assertion) tells TypeScript we know #root exists in index.html.
const rootElement = document.getElementById('root')!;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
