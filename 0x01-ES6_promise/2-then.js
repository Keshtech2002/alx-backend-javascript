export default async function handleResponseFromAPI(promise) {
  const newPromise = promise.then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));

  return newPromise;
}
