import { ID, ReminderType } from "@/types/models/reminders";
import { useCallback, useState } from "react";
import { ReminderPageProps } from "./types";
import update from "immutability-helper";

export const useRemindersPage = ({ reminders }: ReminderPageProps) => {
  const [initialReminders, setInitialReminders] =
    useState<ReminderType[]>(reminders);
  const [selectedReminder, setSelectedReminder] = useState<ReminderType>();

  const onOptimisticUpdate = useCallback(
    (reminder: ReminderType) => {
      const updateIndex = initialReminders.findIndex(
        ({ _id }) => _id === reminder._id
      );
      console.log("update", { updateIndex, initialReminders, reminder });
      if (updateIndex > 0) {
        const newReminders = update(initialReminders, {
          [updateIndex]: { $set: reminder },
        });
        setInitialReminders(newReminders);

        return;
      }
      setInitialReminders((prev) => [...prev, reminder]);
    },
    [initialReminders]
  );

  return {
    reminders: initialReminders,
    selectedReminder,
    setSelectedReminder,
    onOptimisticUpdate,
    initialReminders,
  };
};
