import { mutationURL, REMINDER_TYPE } from "@/consts";
import { api } from "@/axios";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AddOrReplaceTodo, AddReminderProps, AddTodo } from "./types";
import { AxiosResponse } from "axios";

const mutationFn = (data: AddOrReplaceTodo) => {
  const body = {
    mutations: [{ createOrReplace: { ...data, _type: REMINDER_TYPE } }],
  };
  return api.post<
    {},
    AxiosResponse<{ results: { id: string } | { id: string }[] }>
  >(mutationURL, body, { params: { returnIds: true } });
};

export const useAddReminder = ({ reminder, callback }: AddReminderProps) => {
  const { register, handleSubmit, watch } = useForm<AddTodo>({
    defaultValues: { title: reminder?.title },
  });

  const { mutateAsync } = useMutation({ mutationFn });

  const addReminder = useCallback(
    async (data: AddTodo) => {
      try {
        const newData = { ...reminder, ...data };
        const response = await mutateAsync(newData);
        toast("Success!");

        callback?.({
          ...newData,
          _id: Array.isArray(response.data.results)
            ? response.data.results[0]?.id
            : response.data.results?.id,
        });
      } catch (e) {
        console.log("e", e);
        toast("Fail");
      }
    },
    [mutateAsync, reminder, callback]
  );

  const onSubmit = useMemo(
    () => handleSubmit(addReminder),
    [addReminder, handleSubmit]
  );

  return {
    register,
    watch,
    onSubmit,
  };
};
