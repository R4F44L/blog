import { useCallback } from "react";
import { ReminderProps } from "./types";

export const useReminder = ({ _id: id, onClick }: ReminderProps) => {
  const onClickHandler = useCallback(() => {
    onClick(id);
  }, [onClick, id]);

  return {
    onClickHandler,
  };
};
