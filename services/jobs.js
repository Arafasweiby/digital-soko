import { doc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export async function createJob({ data, uid }) {
  await setDoc(doc(db, "jobs", uid), data);
}
