import { ReminderType } from "@/types/models/reminders";

export type ReminderProps = ReminderType & {
  onClick: Function;
};
