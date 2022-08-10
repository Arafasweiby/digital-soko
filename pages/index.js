import React from "react";
import firebaseClient from "../firebase/client";
import { getSession } from "../services/session";
import { signOutUser } from "../services/user";

export default function Home({ session }) {
  firebaseClient();
  if (session) {
    return (
      <button
        onClick={async () => {
          await signOutUser();
        }}
      >
        Sign Out
      </button>
    );
  } else {
    return <div>Loading</div>;
  }
}

export async function getServerSideProps(context) {
  return await getSession(context);
}
