# pbkdf2-passworder

Password hashing and verification with PBKDF2.

## Installation

Install `pbkdf2-passworder` with your favorite package manager:

```sh
$ npm i pbkdf2-passworder
# or
$ yarn add pbkdf2-passworder
# or
$ pnpm i pbkdf2-passworder
# or
$ bun add pbkdf2-passworder
```

## Usage

The `pbkdf2-passworder` package provides a convenient way to hash and verify passwords using the PBKDF2 algorithm. Follow the steps below to get started.

1. Import the necessary functions from the `pbkdf2-passworder` package:

```ts
import pbkdf2 from 'pbkdf2-passworder';
```

2. Hashing a Password:

```ts
const password = '123456';
const hashedPassword = await pbkdf2.hash(password);
```

The `hash` function takes a password as input and returns a Promise that resolves to the hashed password. The resulting hashed password is a string.

3. Comparing a Password:

```ts
const inputPassword = '123456';
const isMatch = await pbkdf2.compare(inputPassword, hashedPassword);
```

The `compare` function takes an input password and a hashed password as input and returns a Promise that resolves to a boolean value. It indicates whether the input password matches the hashed password.

If the input password matches the hashed password, the result will be `true`. Otherwise, it will be `false`.

That's it! You can now use `pbkdf2-passworder` to securely hash and verify passwords using the PBKDF2 algorithm in your Node.js applications.
