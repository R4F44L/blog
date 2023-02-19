import { mutationURL, REMINDER_TYPE } from "@/consts";
import { api } from "@/axios";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AddOrReplaceReminder, AddReminderProps, AddReminder } from "./types";
import { AxiosResponse } from "axios";

const mutationFn = (data: AddOrReplaceReminder) => {
  const body = {
    mutations: [{ createOrReplace: { ...data, _type: REMINDER_TYPE } }],
  };
  return api.post<
    {},
    AxiosResponse<{ results: { id: string } | { id: string }[] }>
  >(mutationURL, body, { params: { returnIds: true } });
};

export const useAddReminder = ({ reminder, callback }: AddReminderProps) => {
  const { register, handleSubmit, reset } = useForm<AddReminder>({
    defaultValues: { title: reminder?.title },
  });

  const { mutateAsync } = useMutation({ mutationFn });

  const addReminder = useCallback(
    async (data: AddReminder) => {
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

  useEffect(() => {
    reset(reminder);
  }, [reminder, reset]);

  return {
    register,
    onSubmit,
  };
};
