import { ReminderType } from "@/types/models/reminders";
import React from "react";
import { useAddReminder } from "./hooks";
import { AddReminderProps } from "./types";

const AddRemidner = ({ reminder, callback }: AddReminderProps) => {
  const { onSubmit, register } = useAddReminder({ reminder, callback });

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Add Reminder"
        {...register("title", { required: true })}
      />
      <button type="submit">Add Reminder</button>
    </form>
  );
};

export default AddRemidner;
