import { IInputFormData } from "@/shared/type/input-form-data";
import { CreateTaskDto } from "../../dto/create-task.dto";

export const formTaskData: IInputFormData<CreateTaskDto>[] = [
  {
    type: "input",
    name: "title",
    placeholder: "Enter title",
  },
  {
    type: "textarea",
    name: "description",
    placeholder: "Enter description",
  },
];

