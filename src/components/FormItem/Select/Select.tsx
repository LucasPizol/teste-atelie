import { CommonInputProps } from "@/interfaces/CommonInput";
import { FieldModel } from "@/interfaces/Form";

export const Select = ({
  id,
  options,
  value,
  onChange,
  form_name,
}: FieldModel & CommonInputProps) => {
  return (
    <select
      id={String(id)}
      value={value}
      name={form_name}
      style={{
        borderRadius: 4,
        padding: "10px 11px",
        border: "1px solid #C4C4C4",
        outline: "none",
      }}
      onChange={onChange}
    >
      {!options && <span>Sem opções</span>}

      {options &&
        options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
    </select>
  );
};
