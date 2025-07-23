"use client";
import React from "react";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const TodoList = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-2">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>{"Pick a Date"}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="max-h-[450px] overflow-y-auto mt-4">
        {/* LIST ITEM */}
        <div className="flex flex-col gap-2">
          {Array.from({ length: 10 }, (_, index) => index).map((item) => (
            <Card className="p-4" key={item}>
              <div className="flex items-center gap-4">
                <Checkbox id={`item${item}`} />
                <label
                  htmlFor={`item${item}`}
                  className="text-sm text-muted-foreground"
                >
                  Lorem ipsum dolor sit amet.
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
