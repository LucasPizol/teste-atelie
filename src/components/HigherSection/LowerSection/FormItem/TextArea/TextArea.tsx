import { CommonInputProps } from "@/interfaces/CommonInput";
import { FieldModel } from "@/interfaces/Form";

export const TextArea = ({
  id,
  value,
  onChange,
  name,
}: FieldModel & CommonInputProps) => {
  return (
    <textarea onChange={onChange} name={name} id={String(id)} value={value} />
  );
};
