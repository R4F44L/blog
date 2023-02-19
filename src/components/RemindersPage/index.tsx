import React from "react";
import AddRemidner from "../addReminder";
import Reminder from "../reminder";
import { useRemindersPage } from "./hooks";
import { ReminderPageProps } from "./types";

export const RemindersPage = ({
  reminders: initialReminders,
}: ReminderPageProps) => {
  const {
    onOptimisticUpdate,
    selectedReminder,
    setSelectedReminder,
    reminders,
  } = useRemindersPage({ reminders: initialReminders });

  return (
    <>
      <AddRemidner reminder={selectedReminder} callback={onOptimisticUpdate} />
      {reminders.map((reminder) => (
        <div key={reminder._id} onClick={() => setSelectedReminder(reminder)}>
          <Reminder {...reminder} />
        </div>
      ))}
    </>
  );
};
