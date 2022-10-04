import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { app, db } from "../firebase/client";

export async function createUser({ email, password }) {
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw "Could not create user account";
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

export async function getAccount(uid) {
  const docRef = doc(db, "accounts", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw "Account details do not exist";
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
