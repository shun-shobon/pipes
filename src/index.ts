export function pipe<T>(x: T): Pipe<T> {
  return {
    value: x,
    pipe(fn) {
      return pipe(fn(x));
    },
  };
}

export interface Pipe<T> {
  value: T;
  pipe<U>(fn: (x: T) => U): Pipe<U>;
}
