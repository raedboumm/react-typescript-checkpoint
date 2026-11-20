# React + TypeScript Checkpoint

Two React components converted from JavaScript to TypeScript, with comments explaining every change.

| Original | Converted | What it is |
|---|---|---|
| Code 01 | `src/components/Greeting.tsx` | Function component with props |
| Code 02 | `src/components/Counter.tsx` | Class component with state |

## Run it

```bash
npm install
npm run dev        # start the dev server
npm run typecheck  # check types without building
```

## Steps taken to convert

### General setup
1. Created a Vite + React + TypeScript project (`package.json`, `tsconfig.json`, `vite.config.ts`).
2. Installed type definitions for React: `@types/react` and `@types/react-dom`.
3. Turned on `"strict": true` in `tsconfig.json` so TypeScript catches as many mistakes as possible.
4. Renamed every component file from `.js`/`.jsx` to `.tsx` (TypeScript + JSX).

### Code 01: `Greeting` (function component)
1. Created a `GreetingProps` interface with `name: string`.
2. Typed the destructured props: `({ name }: GreetingProps)`.
3. Added an explicit return type `React.JSX.Element`.

Now `<Greeting />` without `name`, or `<Greeting name={5} />`, is a compile-time error.

### Code 02: `Counter` (class component)
1. Created a `CounterProps` type (empty, because the component takes no props).
2. Created a `CounterState` interface with `count: number`.
3. Passed both to the generic base class: `Component<CounterProps, CounterState>`.
4. Typed the `state` field as `CounterState`.
5. Gave `increment` a `void` return type and kept it as an arrow function so `this` stays bound.
6. Switched to the functional `setState(prev => ...)` form, which is safer when new state depends on old state.
7. **Bug fix:** the original had `return` on its own line, followed by `( <div> ... )`. JavaScript's automatic semicolon insertion turns that into `return;`, so the component rendered nothing. The `(` now sits on the same line as `return`.
8. Added an explicit return type to `render()`.

## Project structure

```
react-typescript-checkpoint/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx           # entry point
    ├── App.tsx            # renders both components
    └── components/
        ├── Greeting.tsx   # Code 01
        └── Counter.tsx    # Code 02
```
