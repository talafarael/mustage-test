import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
export interface TextareaControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder: string;
}
export const TextareaController = <T extends FieldValues>({
  control,
  name,
  placeholder,
}: TextareaControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>Bug Title</FieldLabel>
          <Textarea
            {...field}
            id={field.name}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
