export type Title = string;
export type Descirption = string | undefined;
export type isCompleted = boolean;
export type dueAt = Partial<Date>;
export type ID = string;

export interface ReminderType {
  _id: ID;
  title: Title;
  description: Descirption;
  dueAt: dueAt;
  isCompleted: isCompleted;
}
