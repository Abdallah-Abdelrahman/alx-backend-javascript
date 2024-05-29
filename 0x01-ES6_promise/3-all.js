import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([p1, p2]) => {
      console.log(`${p1.body} ${p2.firstName} ${p2.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
