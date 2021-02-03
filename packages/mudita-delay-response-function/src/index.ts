/**
 * Delays async function to be resolved not earlier than after given time.
 *
 * @param {Promise} promise - Asynchronous function (promise) to delay
 * @param {number} minDelay=500 - Minimum time after which the function will be executed (in milliseconds)
 * @returns {Promise} - Rejected or fulfilled promise
 *
 */
export const delayResponse = async <T = unknown>(
  promise: Promise<T>,
  minDelay = 500
): Promise<T> => {
  const startTime = new Date().getTime()

  const delay = (data: T, failed = false): Promise<T> => {
    const elapsedTime = new Date().getTime() - startTime

    return new Promise((resolve, reject) => {
      if (elapsedTime < minDelay) {
        setTimeout(() => {
          failed ? reject(data) : resolve(data)
        }, minDelay - elapsedTime)
      } else {
        failed ? reject(data) : resolve(data)
      }
    })
  }

  return promise.then(delay).catch((error) => delay(error, true))
}

export default delayResponse
