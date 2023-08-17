# @dev_jatin/tiny

<p align="center">
  <img src="https://img.shields.io/npm/v/@bamblehorse/tiny.svg" alt="npm version"/>
</p>
<p align="center">
  <img src="https://img.shields.io/bundlephobia/min/@bamblehorse/tiny.svg" alt="minified"/>
</p>

Removes all spaces from the string

```
$ npm install @dev_jatin/tiny
```

## Usage

```js
const tiny = require("@dev_jatin/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//   at tiny (<anonymous>:2:41)
//   at <anonymous>:1:1
```
