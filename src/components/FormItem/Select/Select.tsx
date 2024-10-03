import { FieldModel } from "@/interfaces/Form";

export const Select = ({ id, options, value }: FieldModel) => {
  return (
    <select id={String(id)} value={value}>
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
