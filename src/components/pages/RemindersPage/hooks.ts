import { ID, ReminderType } from "@/types/models/reminders";
import { useCallback, useMemo, useState } from "react";
import { ReminderPageProps } from "./types";
import update from "immutability-helper";

export const useRemindersPage = ({
  reminders: initialReminders,
}: ReminderPageProps) => {
  const [reminders, setReminders] = useState<ReminderType[]>(initialReminders);
  const [selectedReminderId, setSelectedReminderId] = useState<string>();

  const onOptimisticUpdate = useCallback(
    (reminder: ReminderType) => {
      const updateIndex = reminders.findIndex(
        ({ _id }) => _id === reminder._id
      );

      if (updateIndex > 0) {
        const newReminders = update(reminders, {
          [updateIndex]: { $set: reminder },
        });
        setReminders(newReminders);

        return;
      }
      setReminders((prev) => [...prev, reminder]);
    },
    [reminders]
  );

  const selectedReminder = useMemo(() => {
    return reminders.find(({ _id }) => _id === selectedReminderId);
  }, [selectedReminderId, reminders]);

  const chooseReminder = useCallback((reminderID: ID) => {
    setSelectedReminderId(reminderID);
  }, []);

  return {
    reminders,
    selectedReminderId,
    setSelectedReminderId,
    onOptimisticUpdate,
    chooseReminder,
    initialReminders,
    selectedReminder,
  };
};
