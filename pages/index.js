import { useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SelectAccountTypeModal from "../components/modals/selectAccountTypeModal";
import { useAuth } from "../firebase/auth";
import { getSession } from "../services/session";
import { getAccount, signOutUser } from "../services/user";
import { showToast } from "../utils/ui";

export default function Home({ session }) {
  const toast = useToast();
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [account, setAccount] = useState();

  useEffect(() => {
    if (session)
      getAccount(session.uid)
        .then((value) => setAccount(value))
        .catch((error) => {
          if (error === "Account details do not exist") {
            onOpen();
          } else
            showToast({
              toast,
              title: "Error",
              description: error,
              status: "error",
            });
        });
  }, [onOpen, session, toast]);

  if (session) {
    return (
      <>
        <SelectAccountTypeModal isOpen={isOpen} onClose={onClose} />
        <button
          onClick={async () => {
            await signOutUser();
          }}
        >
          Sign Out
        </button>
      </>
    );
  } else {
    return <div>Loading</div>;
  }
}

export async function getServerSideProps(context) {
  return await getSession(context);
}
