import { DataTable } from "@/components/ui/DataTable";
import React from "react";

const Leaves = () => {
  let dialogData = [
    {
      title: "leaveType ",
      value: ["sick", "vacation", "casual", "other"],
    },
    {
      title: "Start Date",
      value: '03-05-2025',
    },
    {
      title: "End Date",
      value: '08-05-2025',
    },
    {
      title: "Status",
      value: ["pending", "approved", "rejected"],
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Employee Leaves</h1>
      <DataTable dialogTitle='Add Your Leave' dialogData={dialogData} />
    </div>
  );
};

export default Leaves;
