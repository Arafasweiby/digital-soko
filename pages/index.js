import { useDisclosure, useToast } from "@chakra-ui/react";
import { debounce } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Input from "../components/input/input";
import RadioFilters from "../components/input/radio_filters";
import SimpleSelectMenu from "../components/input/simple_select_menu";
import SwitchComponent from "../components/input/switch";
import NavBar from "../components/layout/navBar";
import SelectAccountTypeModal from "../components/modals/selectAccountTypeModal";
import { industries, radioFilters, recentJobs, workTimes } from "../lib/data";
import { auth } from "../lib/firebase";
import { getAccount } from "../services/user";
import { showToast } from "../utils/ui";

export default function Page() {
  const toast = useToast();
  const [user] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [account, setAccount] = useState();
  const [queries, setQueries] = useState();

  useEffect(() => {
    if (queries) console.log(queries);
  }, [queries]);

  const changeHandler = (event) => {
    setQueries((prevState) => ({
      ...prevState,
      location: event.target.value,
    }));
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    []
  );

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
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <>
        <SelectAccountTypeModal isOpen={isOpen} onClose={onClose} />
        {account && (
          <div className="grid grid-cols-12">
            <div className="col-span-2 space-y-2">
              <h3 className="font-bold text-lg">Filters</h3>
              <RadioFilters
                label="filters"
                options={["All Offers", ...radioFilters]}
                onChange={(event) =>
                  setQueries((prevState) => ({
                    ...prevState,
                    filter: event.target.value,
                  }))
                }
              />
              <p className="font-bold">Work Time</p>
              <RadioFilters
                label="workTimes"
                options={["All Times", ...workTimes]}
                onChange={(event) =>
                  setQueries((prevState) => ({
                    ...prevState,
                    workTime: event.target.value,
                  }))
                }
              />

              <Input
                name="location"
                id="location"
                label="Location"
                placeholder="Location"
                onChange={debouncedChangeHandler}
              />
              <SimpleSelectMenu
                name="industry"
                id="industry"
                label="Industry"
                options={["All Types", industries.map((e) => e.name)]}
                onChange={(event) =>
                  setQueries((prevState) => ({
                    ...prevState,
                    industry: event.target.value,
                  }))
                }
              />
              <SwitchComponent
                enabled={queries?.remote}
                onChange={(value) =>
                  setQueries((prevState) => ({
                    ...prevState,
                    remote: value,
                  }))
                }
              />
            </div>
            <div className="col-span-8"></div>
            <div className="col-span-2 space-y-2">
              <h3 className="font-bold text-lg">Recent View</h3>
              {recentJobs.map((job, i) => (
                <div key={i}>
                  <p>{job.client}</p>
                  <p className="font-semibold">{job.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    </div>
  );
}

Page.auth = false;
Page.layout = NavBar;
