/**
 * Counter.tsx  —  Code 02 converted from JavaScript to TypeScript
 *
 * Steps taken to convert this component:
 *  1. Renamed the file from `.js`/`.jsx` to `.tsx`.
 *  2. Declared a `CounterProps` type. This component takes no props, so it is
 *     an empty object type. (It is still declared so the component's
 *     contract is explicit and easy to extend later.)
 *  3. Declared a `CounterState` interface describing the state object:
 *     `count` must always be a `number`.
 *  4. Passed both types to the generic base class:
 *     `Component<CounterProps, CounterState>`. Now `this.props` and
 *     `this.state` are fully typed, and `setState` only accepts valid keys
 *     and value types (e.g. `setState({ count: 'abc' })` will not compile).
 *  5. Typed the `state` class field with `CounterState`.
 *  6. Gave the `increment` arrow function an explicit `void` return type.
 *     It stays an arrow function so `this` is bound to the class instance.
 *  7. Used the functional form of `setState` (prevState => ...) which is the
 *     recommended way to update state that depends on the previous value.
 *  8. BUG FIX: in the original code `return` was on its own line, followed
 *     by `( <div> ... )` on the next line. JavaScript's automatic semicolon
 *     insertion turns that into `return;`, so the component rendered
 *     nothing. The opening parenthesis is now on the same line as `return`.
 *  9. Added an explicit return type to `render()`.
 */

import React, { Component } from 'react';

// Step 2: this component receives no props.
type CounterProps = Record<string, never>;

// Step 3: the shape of the component's state.
interface CounterState {
  /** Current value of the counter. */
  count: number;
}

// Step 4: tell React.Component which props and state types we use.
class Counter extends Component<CounterProps, CounterState> {
  // Step 5: typed initial state.
  state: CounterState = {
    count: 0,
  };

  // Step 6 + 7: typed event handler that safely increments the count.
  increment = (): void => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  // Step 8 + 9: `(` sits on the same line as `return` so the JSX is returned.
  render(): React.JSX.Element {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
