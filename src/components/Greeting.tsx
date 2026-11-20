/**
 * Greeting.tsx  —  Code 01 converted from JavaScript to TypeScript
 *
 * Steps taken to convert this component:
 *  1. Renamed the file from `.js`/`.jsx` to `.tsx` so the TypeScript compiler
 *     knows the file contains both TypeScript and JSX.
 *  2. Declared a `GreetingProps` interface that describes the shape of the
 *     props object. In the JS version `name` could be anything (or missing);
 *     now TypeScript enforces that it is a required `string`.
 *  3. Typed the destructured props with `GreetingProps`, so any parent that
 *     forgets `name` or passes a number gets a compile-time error.
 *  4. Added an explicit return type (`JSX.Element`) so the function always
 *     has to return valid JSX.
 */

import React from 'react';

// Step 2: describe the props this component expects.
interface GreetingProps {
  /** The name of the person to greet (required). */
  name: string;
}

// Step 3 + 4: type the props parameter and the return value.
const Greeting = ({ name }: GreetingProps): React.JSX.Element => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
