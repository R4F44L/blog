import { ReminderType, Title } from "@/types/models/reminders";

export type AddTodo = {
  title: Title;
};

export type UpdateTodo = ReminderType | undefined;

export type AddOrReplaceTodo = AddTodo | UpdateTodo;

export type AddReminderProps = {
  reminder: ReminderType | undefined;
  callback?: Function;
};
