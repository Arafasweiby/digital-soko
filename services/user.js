import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export async function createUser({ email, password }) {
  try {
    const auth = getAuth();
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    return error;
  }
}

export async function signInUser({ email, password }) {
  try {
    const auth = getAuth();
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    return error;
  }
}
