import { DataTable } from "@/components/ui/DataTable";
import React from "react";
import { useCreateAttendanceHandler } from "../employee/FormHandlers";
import { useAllLeaves } from "@/lib/Api";

const EmployeesLeaves = () => {
  const { data, isLoading } = useAllLeaves();
  let path = "/attendance";
  const { handleCreateAttendance } = useCreateAttendanceHandler(path);
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Employees Leaves</h1>
      <DataTable
        dialogTitle='Create Employees'
        handler={handleCreateAttendance}
        data={isLoading ? [] : data?.leaves}
      />
    </div>
  );
};

export default EmployeesLeaves;
