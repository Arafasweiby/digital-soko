import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import SolidButton from "../components/buttons/solidButton";
import NavBar from "../components/layout/navBar";
import CreateJobModal from "../components/modals/createJobModal";
import ClientJobsTable from "../components/tables/clientJobsTable";

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <CreateJobModal isOpen={isOpen} onClose={onClose} />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-8 space-y-8">
        <div className="flex items-center">
          <h2 className="text-2xl font-extrabold text-lipad-black">Jobs</h2>
          <div className="ml-auto w-48">
            <SolidButton label="Create Job" onClick={onOpen} />
          </div>
        </div>
        {/* <ClientJobsTable /> */}
      </div>
    </>
  );
}

Page.auth = true;
Page.layout = NavBar;
