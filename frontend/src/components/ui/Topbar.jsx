import React from "react";
import { SidebarTrigger } from "./sidebar";
import { Separator } from "@radix-ui/react-separator";
import DialogBox from "./DialogBox";

const Topbar = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between px-3 gap-2 border-b">
      <div className="flex items-center gap-2 px-3">
        <SidebarTrigger className="cursor-pointer size-5" />
        <Separator
          orientation="vertical"
          className="mr-1 border border-r border-zinc-100 h-4"
        />
        <h1 className="text-lg font-medium">Hello, DemoName 🙂</h1>
      </div>
      <DialogBox />
    </header>
  );
};

export default Topbar;
