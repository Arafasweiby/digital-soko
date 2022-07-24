import React from "react";
import { useAuth } from "../firebase/auth";
import firebaseClient from "../firebase/client";
import { getSession } from "../services/session";

export default function Home({ session }) {
  firebaseClient();
  const { user } = useAuth();

  return <div></div>;
}

export async function getServerSideProps(context) {
  return await getSession(context);
}
