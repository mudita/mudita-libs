<p align="center">
  <a href="https://mudita.com">
    <img alt="Mudita" src="/mudita-logo.svg" width="160" />
  </a>
</p>
<h1 align="center">
  Delay response function
</h1>

An async function that delays other async function to be resolved not earlier than after given time.

## Install

```
npm install @mudita/delay-response-function

# or

yarn add @mudita/delay-response-function
```

## Usage

```TS
await delayResponse(somePromise, timeInMsToResolve)
```

## Example

```TS
const fakePromise = () =>
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved")
    }, 125)
  })

const data = await delayResponse(fakePromise, 1000)

// Console will log after 1s even though fakePromise was resolved in 125ms
console.log(data) // "resolved"
```
