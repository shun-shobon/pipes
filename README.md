# pipes

`pipes` is a lightweight JavaScript/TypeScript library designed to reduce function nesting and help you write more readable code. It leverages a fluent interface to facilitate more readable function compositions.

## Features

- **Lightweight:** Just a few lines of code to improve the readability of your JavaScript/TypeScript projects.
- **Fluent Interface:** The `.pipe()` method allows for readable chained function calls.
- **Type-Safe:** Developed with TypeScript to ensure type safety while using the library.

## Installation

Install `pipes` using your favorite package manager with the following command:

```sh
npm install @shun-shobon/pipes
```

## Usage

Here's how you can use `pipes` to simplify nested function calls:

```javascript
import { pipe } from "@shun-shobon/pipes";

const value = pipe(1)
  .pipe((x) => x + 2)
  .pipe((x) => x * 2).value;

console.log(value); // 6
```

In the above example:

- We initiate a `pipe` with a value of `1`.
- We then add `2` to this value in the first `.pipe()` method.
- In the second `.pipe()` method, we multiply the result of the previous operation by `2`.
- We obtain the final result using the `.value` property.
- The result, `6`, is then logged to the console.

## API

### `pipe(initialValue)`

Creates a new pipe with the given initial value.

### `.pipe(function)`

Applies the given function to the current value and returns a new pipe with the updated value.

### `.value`

Gets the current value of the pipe.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
