import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName)
    ])
    .then((results) => {
      return results.map((result) => ({
        status: 'fulfilled',
        value: result,
      }));
    })
    .catch((error) => [
      { status: 'rejected', value: error.toString() },
      { status: 'rejected', value: error.toString() },
    ]);
}
