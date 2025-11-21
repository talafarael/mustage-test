import { Checkbox } from "@/components/ui/checkbox";

export interface SharedCheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

export const SharedCheckbox = ({ checked, onChange }: SharedCheckboxProps) => {
  return <Checkbox checked={checked} onCheckedChange={onChange} />;
};
