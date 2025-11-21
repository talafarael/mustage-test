"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formTaskData } from "./form-task.data";
import { TextareaController } from "@/shared/ui/textarea-controller";
import { formTaskSchema } from "../../schemas/form-task.schema";
import { CreateTaskDto } from "../../dto/create-task.dto";
import { SharedButton } from "@/shared/ui/button";
import { InputController } from "@/shared/ui/input-controller";
import { Spinner } from "@/components/ui/spinner";

export interface FormTaskProps {
  handlerSubmit: (data: CreateTaskDto) => void;
  mockData?: CreateTaskDto;
  isLoading?: boolean;
  error?: string;
}
export const FormTask = ({
  mockData,
  handlerSubmit,
  isLoading,
  error,
}: FormTaskProps) => {
  const form = useForm<z.infer<typeof formTaskSchema>>({
    resolver: zodResolver(formTaskSchema),
    defaultValues: mockData ?? {
      title: "",
      description: "",
    },
  });

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={form.handleSubmit(handlerSubmit)}
    >
      {formTaskData.map((data, index) => {
        switch (data.type) {
          case "input":
            return (
              <InputController
                key={index}
                control={form.control}
                name={data.name}
                placeholder={data.placeholder}
              />
            );
          case "textarea":
            return (
              <TextareaController
                key={index}
                control={form.control}
                name={data.name}
                placeholder={data.placeholder}
              />
            );
          default:
            return null;
        }
      })}
      {error ?? <p className="text-[red]">{error}</p>}
      <SharedButton disabled={isLoading} type="submit">
        {isLoading ? (
          <div>
            <Spinner />
            Loading...{" "}
          </div>
        ) : (
          "Submit"
        )}
      </SharedButton>
    </form>
  );
};
