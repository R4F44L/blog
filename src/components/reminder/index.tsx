import { ReminderType } from "@/types/models/reminders";
import React from "react";

const Reminder = ({ title }: ReminderType) => {
  return <div className="font-extrabold m-3">{title}</div>;
};

export default Reminder;
