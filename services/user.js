import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export async function createUser({ email, password }) {
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error.code.replace("auth/", "");
  }
}

export async function signInUser({ email, password }) {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error.code.replace("auth/", "");
  }
}

export async function signOutUser() {
  try {
    const auth = getAuth();
    await signOut(auth);
    window.location.href = "/";
  } catch (error) {
    throw error.code.replace("auth/", "");
  }
}
