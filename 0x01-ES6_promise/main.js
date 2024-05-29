import handleResponseFromAPI from './2-then';

const promise = Promise.reject(new Error('oopsy..'));
handleResponseFromAPI(promise)
  .then((d) => console.log(d))
  .catch((err) => console.log(err));
