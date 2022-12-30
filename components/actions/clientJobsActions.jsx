import React from "react";
import { HiOutlineEye, HiPencil, HiTrash } from "react-icons/hi";
import { deleteJob } from "../../services/jobs";

export default function ClientJobsActions({
  id,
  data,
  reloadDataHandler,
  updateDataHandler,
}) {
  return (
    <div className="flex gap-3">
      <button className="relative">
        <HiOutlineEye className="text-green-600 w-6 h-6" />
        <div className="absolute -top-2 -right-2">
          <div className="rounded-full bg-green-600 w-5 h-5 text-white grid place-content-center text-xs font-medium">
            {data.proposals ?? 0}
          </div>
        </div>
      </button>
      <button
        onClick={() => {
          localStorage.setItem("clientJob", JSON.stringify(data));
          updateDataHandler();
        }}
      >
        <HiPencil className="text-blue-600 w-6 h-6" />
      </button>
      <button
        onClick={() => {
          deleteJob({ id }).then(() => reloadDataHandler());
        }}
      >
        <HiTrash className="text-red-600 w-6 h-6" />
      </button>
    </div>
  );
}
