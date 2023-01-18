import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  increment,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../lib/firebase";

export async function createJob({ data }) {
  await addDoc(collection(db, "jobs"), data);
}

export async function createProposal({ jobId, data }) {
  await addDoc(collection(db, "proposals"), data);
  await updateDoc(doc(db, "jobs", jobId), { proposalCount: increment(1) });
}

export async function updateProposal({ data, id }) {
  await setDoc(doc(db, "proposals", id), data, { merge: true });
}

export async function getProposalsByJob({ jobId }) {
  const q = query(collection(db, "proposals"), where("jobId", "==", jobId));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export async function getJobs() {
  const q = query(collection(db, "jobs"));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export async function getProposals({ uid }) {
  const q = query(
    collection(db, "proposals"),
    where("freelancerUid", "==", uid)
  );
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
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
