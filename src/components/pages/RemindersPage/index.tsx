import React from "react";
import AddRemidner from "./components/addReminder";
import Reminder from "./components/reminder";
import { ReminderList } from "./components/reminderList";
import { useRemindersPage } from "./hooks";
import { ReminderPageProps } from "./types";

export const RemindersPage = ({
  reminders: initialReminders,
}: ReminderPageProps) => {
  const { onOptimisticUpdate, selectedReminder, reminders, chooseReminder } =
    useRemindersPage({ reminders: initialReminders });

  return (
    <>
      <AddRemidner reminder={selectedReminder} callback={onOptimisticUpdate} />
      <ReminderList reminders={reminders} onClick={chooseReminder} />
    </>
  );
};
