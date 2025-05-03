import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Selectbox from "./Selectbox";
import { Input } from "./input";

const DialogBox = ({ dialogData, dialogTitle }) => {
  const now = new Date();

  // Format date as DD-MM-YYYY
  const formattedDate = now.toLocaleDateString("en-GB").split("/").join("-");

  // Format time as 12-hour with AM/PM
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  let attendance = [
    {
      title: "Status",
      value: ["clock-in", "clock-out"],
    },
    {
      title: "Date",
      value: formattedDate,
    },
    {
      title: "Time",
      value: formattedTime,
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="ml-3">
          Log Attendance
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle || "Add Your Attendance"}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-5 py-4">
          {(dialogData || attendance).map((items, key) => (
            <div key={`${items.title}-${key}`} className="grid gap-4">
              <Label className="text-right">{items.title}</Label>
              {Array.isArray(items.value) ? (
                <Selectbox value={items.value} />
              ) : (
                <Input
                  name={items.title.toLowerCase()}
                  type="text"
                  placeholder="Email"
                  value={items.value}
                />
              )}
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button type="submit">{ dialogData ? 'Create Leave' : 'Create Log'}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
