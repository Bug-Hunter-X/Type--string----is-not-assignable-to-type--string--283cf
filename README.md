# Type 'string[]' is not assignable to type 'string'
This bug demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.

## Problem
The `greeter` function expects a single string argument. However, the `user` variable is an array of strings. This type mismatch leads to a compilation error.

## Solution
The solution involves either modifying the `greeter` function to accept an array of strings or modifying the way the `user` variable is handled.  We'll show both approaches.