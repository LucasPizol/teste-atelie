import { CommonInputProps } from "@/interfaces/CommonInput";
import { FieldModel } from "@/interfaces/Form";

export const Checkbox = ({
  checked,
  id,
  onChange,
  name,
}: FieldModel & CommonInputProps) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      id={String(id)}
      name={name}
      onChange={onChange}
    />
  );
};
