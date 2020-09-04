<p align="center">
  <a href="https://appnroll.com">
    <img alt="App'n'roll" src="https://appnroll.com/img/appnroll-logotype.svg" width="160" />
  </a>
</p>
<h1 align="center">
  Template lib
</h1>

Template lib catalog to share how to setup package for the next lib in the monorepo.

## Install

```
npm install @appnroll/template-lib

# or

yarn add @appnroll/template-lib
```
## Usage
### JS
```js
const fn = require("@appnroll/template-lib").default
console.log("fn: ", fn(["A", "A", "B"])) // -> ["A", "B"]
```
### TS
```ts
import fn from "@appnroll/template-lib"
console.log("fn: ", fn(["A", "A", "B"])) // -> ["A", "B"]
```
