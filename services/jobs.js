import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../lib/firebase";

export async function createJob({ data, uid }) {
  await setDoc(doc(db, "jobs", uid), data);
}

export async function getJobsByClient({ uid }) {
  const q = query(collection(db, "jobs"), where("companyId", "==", uid));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export async function deleteJob({ id }) {
  await deleteDoc(doc(db, "jobs", id));
}
