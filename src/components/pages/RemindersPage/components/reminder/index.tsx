import { ReminderType } from "@/types/models/reminders";
import React from "react";
import { useReminder } from "./hooks";
import { ReminderProps } from "./types";

const Reminder = (props: ReminderProps) => {
  const { title } = props;
  const { onClickHandler } = useReminder(props);

  return (
    <div onClick={onClickHandler} className="font-extrabold m-3">
      {title}
    </div>
  );
};

export default Reminder;
