import { Charts } from "@/components/ui/Charts";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-muted/50 px-5 py-6">
          <h3 className="text-2xl font-medium">Today's Attendance</h3>
          <p className="text-5xl mt-2 font-bold">20</p>
        </div>
        <div className="rounded-xl bg-muted/50 px-5 py-6">
          <h3 className="text-2xl font-medium">Total Attendance</h3>
          <p className="text-5xl mt-2 font-bold">20</p>
        </div>
        <div className="rounded-xl bg-muted/50 px-5 py-6">
          <h3 className="text-2xl font-medium">Leave balance</h3>
          <p className="text-5xl mt-2 font-bold">20</p>
        </div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <Charts />
      </div>
    </div>
  );
};

export default Dashboard;
