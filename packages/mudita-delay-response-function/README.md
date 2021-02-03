<p align="center">
  <a href="https://appnroll.com">
    <img alt="App'n'roll" src="https://appnroll.com/img/appnroll-logotype.svg" width="160" />
  </a>
</p>
<h1 align="center">
  Delay response function
</h1>

An async function that delays other async function to be resolved not earlier than after given time.

## Install

```
npm install @appnroll/delay-response

# or

yarn add @appnroll/delay-response
```

## Usage

```TS
await delayResponse(somePromise, timeInMsToResolve)
```

## Example

```TS
const fakePromise = async () =>
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved")
    }, 125)
  })

const data = await delayResponse(fakePromise, 1000)

// Console will log after 1s even though fakePromise was resolved in 125ms
console.log(data) // "resolved"
```
