import { CommonInputProps } from "@/interfaces/CommonInput";
import { FieldModel } from "@/interfaces/Form";

export const Radio = ({
  form_name,
  options,
  onChange,
}: FieldModel & CommonInputProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {options?.map((option, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <label key={index} htmlFor={String(option)}>
            {option}
          </label>
          <input
            key={option}
            type="radio"
            name={form_name}
            value={option}
            id={String(option)}
            onChange={onChange}
          />
        </div>
      ))}
    </div>
  );
};
