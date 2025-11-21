export interface IInputFormData<T> {
  type: "input" | "textarea";
  name: keyof T;
  placeholder: string;
}

