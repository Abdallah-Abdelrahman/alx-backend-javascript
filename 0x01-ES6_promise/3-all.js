import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    return [{ status: 'fulfilled', value: user }, { status: 'fulfilled', value: photo }];
  } catch (err) {
    return [{ status: 'rejected', value: err }, { status: 'rejected', value: err }];
  }
}
