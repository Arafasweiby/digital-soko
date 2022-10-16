import { useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "../components/layout/navBar";
import SelectAccountTypeModal from "../components/modals/selectAccountTypeModal";
import { auth } from "../lib/firebase";
import { getAccount, signOutUser } from "../services/user";
import { showToast } from "../utils/ui";

export default function Page() {
  const toast = useToast();
  const [user] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [account, setAccount] = useState();

  useEffect(() => {
    if (user)
      getAccount(user.uid)
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
  }, [onOpen, toast, user]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <>
        <SelectAccountTypeModal isOpen={isOpen} onClose={onClose} />
      </>
    </div>
  );
}

Page.auth = false;
Page.layout = NavBar;
