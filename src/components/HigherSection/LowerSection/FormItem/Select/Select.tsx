import { CommonInputProps } from "@/interfaces/CommonInput";
import { FieldModel } from "@/interfaces/Form";

export const Select = ({
  id,
  options,
  value,
  onChange,
  name,
}: FieldModel & CommonInputProps) => {
  return (
    <select id={String(id)} value={value} name={name} onChange={onChange}>
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
