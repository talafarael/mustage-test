import { Path } from "react-hook-form";

export interface IInputFormData<T> {
  type: "input" | "textarea";
  name: Path<T>;
  placeholder: string;
}
