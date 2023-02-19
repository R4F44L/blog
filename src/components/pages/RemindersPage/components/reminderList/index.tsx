import React from "react";
import { ReminderType } from "@/types/models/reminders";
import Reminder from "../reminder";

export const ReminderList = ({
  reminders,
  onClick,
}: {
  reminders: ReminderType[];
  onClick: Function;
}) => {
  return (
    <>
      {reminders.map((reminder) => (
        <Reminder onClick={onClick} key={reminder._id} {...reminder} />
      ))}
    </>
  );
};
