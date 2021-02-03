import { delayResponse } from "../index"

const resolveFakePromise = (timeout = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved")
    }, timeout)
  })
}

const rejectFakePromise = (timeout = 100) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rejected")
    }, timeout)
  })
}

test("Response is resolved properly", async () => {
  const thenCallback = jest.fn()
  const catchCallback = jest.fn()

  await delayResponse(resolveFakePromise())
    .then(thenCallback)
    .catch(catchCallback)

  expect(thenCallback).toBeCalledWith("resolved")
  expect(catchCallback).not.toBeCalled()
})

test("Response is rejected properly", async () => {
  const thenCallback = jest.fn()
  const catchCallback = jest.fn()

  await delayResponse(rejectFakePromise())
    .then(thenCallback)
    .catch(catchCallback)

  expect(thenCallback).not.toBeCalled()
  expect(catchCallback).toBeCalledWith("rejected")
})

test("Delaying resolved promise works properly", async () => {
  const startTime = new Date().getTime()

  await delayResponse(resolveFakePromise(300), 500).then(() => {
    const endTime = new Date().getTime()
    expect(endTime - startTime).toBeGreaterThanOrEqual(500)
    expect(endTime - startTime).toBeLessThan(550)
  })
})

test("Delaying rejected promise works properly", async () => {
  const startTime = new Date().getTime()

  await delayResponse(rejectFakePromise(300), 500).catch(() => {
    const endTime = new Date().getTime()
    expect(endTime - startTime).toBeGreaterThanOrEqual(500)
    expect(endTime - startTime).toBeLessThan(550)
  })
})

test("Resolving late promise works properly", async () => {
  const startTime = new Date().getTime()

  await delayResponse(resolveFakePromise(300), 100)
  const endTime = new Date().getTime()
  expect(endTime - startTime).toBeGreaterThanOrEqual(300)
  expect(endTime - startTime).toBeLessThan(350)
})

test("Rejecting late promise works properly", async () => {
  const startTime = new Date().getTime()

  await delayResponse(rejectFakePromise(300), 150).catch(() => {
    const endTime = new Date().getTime()
    expect(endTime - startTime).toBeGreaterThanOrEqual(300)
    expect(endTime - startTime).toBeLessThan(350)
  })
})
