import { CommonInputProps } from "@/interfaces/CommonInput";
import { FieldModel } from "@/interfaces/Form";

export const TextArea = ({
  id,
  value,
  onChange,
}: FieldModel & CommonInputProps) => {
  return <textarea onChange={onChange} id={String(id)} value={value} />;
};
