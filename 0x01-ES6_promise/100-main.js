import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    console.log('Photo and User fetched successfully:', { photo, user });
    return { photo, user };
  } catch (error) {
    console.error('Error occurred while fetching photo or user:', error);
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
