import { CommonInputProps } from "@/interfaces/CommonInput";
import { FieldModel } from "@/interfaces/Form";

export const InputText = ({
  id,
  value,
  type,
  name,
  form_name,
}: FieldModel & CommonInputProps) => {
  return (
    <input
      style={{
        borderRadius: 4,
        padding: "10px 11px",
        border: "1px solid #C4C4C4",
        outline: "none",
      }}
      placeholder={name}
      type={type}
      id={String(id)}
      value={value}
      name={form_name}
    />
  );
};
