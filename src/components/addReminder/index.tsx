import { ReminderType } from "@/types/models/reminders";
import React from "react";
import { useAddReminder } from "./hooks";
import { AddReminderProps } from "./types";

const AddRemidner = ({ reminder, callback }: AddReminderProps) => {
  const { onSubmit, register, watch } = useAddReminder({ reminder, callback });

  return (
    <form onSubmit={onSubmit}>
      <input
        value={watch("title")}
        placeholder="Add Reminder"
        {...register("title", { required: true })}
      />
      <button type="submit">Add {reminder?.title}</button>
    </form>
  );
};

export default AddRemidner;
