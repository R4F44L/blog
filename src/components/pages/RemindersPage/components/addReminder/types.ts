import { ReminderType, Title } from "@/types/models/reminders";

export type AddReminder = {
  title: Title;
};

export type UpdateReminder = ReminderType | undefined;

export type AddOrReplaceReminder = AddReminder | UpdateReminder;

export type AddReminderProps = {
  reminder: ReminderType | undefined;
  callback?: Function;
};
